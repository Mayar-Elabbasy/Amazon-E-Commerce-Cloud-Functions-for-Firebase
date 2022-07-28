const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IFOIjEE9KsFcKposrNEkMpP5SQakfyxMcLgmDA0UhBWZFIIkTjYFXhiSkWuFOP8O1DWznTSYM4PWxMo3tlQA8Jn00khDMdaLW");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})


exports.api = functions.https.onRequest(app);

# Amazon-E-Commerce-Cloud-Functions-for-Firebase

##### This repo mainly contain a simple implementation for creating payments intends through 
[![N|Stripe](https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/200px-Stripe_Logo%2C_revised_2016.svg.png)](https://stripe.com/en-gb-us) 
##### and using 
[![N|Stripe](https://miro.medium.com/max/300/1*xRxNEQkLv2g-2SLZlmr8dg.png)](https://firebase.google.com/products/functions?gclid=Cj0KCQjw54iXBhCXARIsADWpsG9Mv516QA27fEnIQiMBVQNiRC2FcwLtAXGDL-Suj0HATiTy9SBL_S4aAsgEEALw_wcB&gclsrc=aw.ds)
###### To serve the back-end for payments Feature for the following Repo [Amazon-E-Commerce-using-React](https://github.com/Mayar-Elabbasy/Amazon-E-Commerce-using-React) 

## Prerequisites
###### 1. You should have node installed If you don't have it, install `node` from [here](https://nodejs.org/en/) 
NOTE: I am using version 14, but you are free to choose a higher version

If you don't know what is the exact version you are having, run the following command  
```sh
node --version
```
and don't forget to update the version on the `package.json` file I am going to talk about this file in the next section, but if you are familiar with it, you are going to change the following code with your current version
```sh
"engines": {
    "node": "14" // change this number with your current version of node
  },
```

###### 2. To use Firebase cloud Functions, you need to install Firebase command line tools using npm

Install Firebase tools: 
```sh 
npm install -g firebase-tools
```

## Installation

1. Download the code as ZIP OR Clone the project
    ```sh
    git clone https://github.com/Mayar-Elabbasy/Amazon-E-Commerce-Cloud-Functions-for-Firebase.git
    ```
2. cd into the project. 
    ```sh
    cd Amazon-E-Commerce-Cloud-Functions-for-Firebase
    ```
3. cd into the functions directory
    ```sh
    cd functions/ 
    ```
4.  Run this following command to add all the dependencies included in the ```package.json``` file --> It is a file that holds the metadata relevant to the project, and it is used for managing the project's dependencies, scripts, version and a lot more.
    ```sh
    npm install
    ```
5. You are ready to go and having everything done by doing the final step to run
    ```sh
    firebase emulators:start
    ```
    Congratulations, by running the last command, you now have All emulators ready! It is now safe to connect your app. You can View Emulator UI at http://localhost:4000 and mentor everything, OR go directly to the following link:
    Functions emulator --> http://localhost:4000/logs?q=metadata.emulator.name%3D%22functions%22.

## Author
**Mayar Elabbasy**

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

   

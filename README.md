# twitter_api_test

Learning how to use twitter api with node.js

## About

I wanted to learn how to use the `twitter` module and access their API.

## Setup

- Go to [https://apps.twitter.com/](Twitter Apps).
- Sign in or make an account
- Click on `Create New App`
- Give the app a `Name`, `Description`, and put any webaddress for the `Website` url part (I used `https://www.google.come`)
- Agree to their terms/conditions and click on `Create your Twitter Application`
- Once you created it, click on `Keys and Access Tokens`
- Click `Create my access token`
- Copy the `Access Token`, `Access Token Secret`, `Consumer Key (API Key)`, and `Consumer Secret (API Secret)` values and store them in the const variables in the main.js file

## Running the Application

After obtaining the various tokens needed to setup a connection to twitter, use GitBash or some other command line tool to go into the directory where you cloned this folder. Type the command `node main.js` and you will see the results of your query.

## Helpful Links

- https://github.com/ttezel/twit
- https://www.npmjs.com/package/twitter

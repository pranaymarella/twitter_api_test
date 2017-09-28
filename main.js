// Module required to use twitter api
const Twitter = require('twitter');

// parameters we need to pass in to start connection to twitter
const twitter_consumer_key = 'INSERT_CONSUMER_KEY_HERE';
const twitter_consumer_secret = 'INSERT_CONSUMER_SECRET_HERE';
const access_token = 'INSERT_ACCESS_TOKEN_HERE';
const access_secret = 'INSERT_ACCESS_SECRET_HERE';

// Connecting to twitter
var client = new Twitter({
    consumer_key: twitter_consumer_key,
    consumer_secret: twitter_consumer_secret,
    access_token_key: access_token,
    access_token_secret: access_secret
});

// One of the many requests we can do 
client.get('favorites/list', function(error, tweets, response) {
    if (error) throw error;
    console.log(tweets);
    console.log(response);
});

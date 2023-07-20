const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongodb connected!!');
    // const tweet = await Tweet.create({
    //     content: 'New Tweet',
    //     userEmail: 'agni@b.com'
    // });

    // const tweets = await Tweet.findById('64b8c8ad43807ca688cf378a');

    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments('64b8d1a6d602b4d6bd413f89');
    // const tweet = await tweetRepo.create({content : 'Tweet with comment schema'});
    // console.log(tweet);
    // const comment = await Comment.create({content: 'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();

    console.log(tweet);
});
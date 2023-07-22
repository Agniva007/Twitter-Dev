import express from 'express';
import bodyParser from 'body-parser';

import { connect } from './config/database.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

import apiRoutes from './routes/index.js';

app.use('/api', apiRoutes);

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongodb connected!!');
    // const tweet = await Tweet.create({
    //     content: 'New Tweet',
    //     userEmail: 'agni@b.com'
    // });

    // const tweets = await Tweet.findById('64b8c8ad43807ca688cf378a');

    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.getAll(2, 4);
    // // const tweet = await tweetRepo.create({content : 'Tweet with comment schema'});
    // // console.log(tweet);
    // // const comment = await Comment.create({content: 'new comment'});
    // // tweet.comments.push(comment);
    // // await tweet.save();

    // console.log(tweet);

    // let repo = new HashtagRepository();
    // await repo.bulkCreate([
    //     {
    //         title: 'Trend',
    //         tweets: []
    //     }, 
    //     {
    //         title: 'Excited',
    //         tweets: []
    //     }, 
    //     {
    //         title: 'Python',
    //         tweets: []
    //     }, 
    //     {
    //         title: 'Fun',
    //         tweets: []
    //     },
    //     {
    //         title: 'Career',
    //         tweets: []
    //     }
    // ]);

    // let repo = new HashtagRepository();
    // const response = await repo.findByName(['Excited', 'Trend']);

    // console.log(response);

    // let service = new TweetService();
    // const tweet = await service.create({
    //     content: 'my twitter #working'
    // });

    // console.log(tweet);

    // let ser = new service();
    // await ser.create({content: '#WooHoo !! I have done it..'});

});
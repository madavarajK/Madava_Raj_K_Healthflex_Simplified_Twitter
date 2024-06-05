const Tweet = require('../models/Tweet');

exports.postTweet = async (tweetData, user) => {
  const tweet = new Tweet({ ...tweetData, userId: user.userId });
  await tweet.save();
  return tweet;
};

exports.getUserTimeline = async (userId) => {
  return Tweet.find({ userId }).sort({ createdAt: -1 });
};

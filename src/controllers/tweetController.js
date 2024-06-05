const tweetService = require('../services/tweetService');

exports.postTweet = async (req, res) => {
  try {
    const tweet = await tweetService.createTweet(req.body, req.user);
    res.json(tweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserTimeline = async (req, res) => {
  try {
    const timeline = await tweetService.getUserTimeline(req.params.userId);
    res.json(timeline);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

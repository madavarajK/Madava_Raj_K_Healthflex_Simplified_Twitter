const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, tweetController.postTweet); // Ensure this line exists
router.get('/:userId/timeline', authMiddleware, tweetController.getUserTimeline);

module.exports = router;

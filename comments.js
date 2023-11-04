// Create web server

// Import Express
const express = require('express');

// Import Express Router
const router = express.Router();

// Import Comment Controller
const commentController = require('../controllers/commentController');

// Import Auth Middleware
const auth = require('../middleware/auth');

// Import Validation Middleware
const { check } = require('express-validator');

// Create a comment
// api/comments
router.post(
    '/',
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('task', 'Task is required').not().isEmpty(),
    ],
    commentController.createComment
);

// Get comments by task
router.get('/', auth, commentController.getCommentsByTask);

// Update comment
router.put('/:id', auth, commentController.updateComment);

// Delete comment
router.delete('/:id', auth, commentController.deleteComment);

module.exports = router;
var userRoutes = require('./userRoutes');

// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to check-it-out - crafted with love!',
    });
});

router = userRoutes(router);

// Export API routes
module.exports = router;
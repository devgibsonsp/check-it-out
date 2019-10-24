var userRoutes = require('./userRoutes');
// Initialize express router
let router = require('express').Router();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("../swaggerConfig");

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to check-it-out - crafted with love!',
    });
});

router = userRoutes(router);

const specs = swaggerJsdoc(swaggerConfig);
router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(specs, { explorer: true }));

// Export API routes
module.exports = router;
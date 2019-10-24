const userRoutes = require('./userRoutes');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("../swaggerConfig");

let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to check-it-out - crafted with love!',
    });
});

router = userRoutes(router);


// Set route for API documentation
const specs = swaggerJsdoc(swaggerConfig);
router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(specs, { explorer: true }));

// Export API routes
module.exports = router;
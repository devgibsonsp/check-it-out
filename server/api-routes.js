// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to check-it-out crafted with love!',
    });
});
// Import contact controller
var contactController = require('./userController');
// Contact routes
router.route('/users')
    .get(contactController.index)
    .post(contactController.new);

router.route('/users/userName/:userName')
    .get(contactController.viewByUserName)

router.route('/users/email/:email')
    .get(contactController.viewByEmail)

router.route('/users/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

router.route('/users/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);


// Export API routes
module.exports = router;
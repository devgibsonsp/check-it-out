
var userController = require('../controllers/userController');

function userRoutes(router) {  
    router.route('/users')
        .get(userController.index)
        .post(userController.new);

    router.route('/users/userName/:userName')
        .get(userController.viewByUserName)

    router.route('/users/email/:email')
        .get(userController.viewByEmail)

    router.route('/users/:contact_id')
        .get(userController.view)
        .patch(userController.update)
        .put(userController.update)
        .delete(userController.delete);

    router.route('/users/:contact_id')
        .get(userController.view)
        .patch(userController.update)
        .put(userController.update)
        .delete(userController.delete);
    return router;
}

module.exports = userRoutes;

const userController = require('../controllers/userController');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */
function userRoutes(router) {  

    /**
     * @swagger
     * path:
     *  /users/:
     *    get:
     *      summary: Get all users
     *      tags: [Users]
     *      responses:
     *        "200":
     *          description: An array of users
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/userSchema'
     *    post:
     *      summary: Create a new user
     *      tags: [Users]
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/userSchema'
     *      responses:
     *        "200":
     *          description: A user schema
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/userSchema'
     */    
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
const questionController = require('../controllers/questionController');

/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Question management
 */
function questionRoutes(router) {  
    
    router.route('/questions')
        .get(questionController.index)
        .post(questionController.new);

    return router;
}

module.exports = questionRoutes;
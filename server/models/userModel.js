
const mongoose = require('mongoose');
// Setup schema
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
const User = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      userSchema:
 *        type: object
 *        required:
 *          - userName
 *          - firstName
 *          - lastName
 *          - email
 *          - password
 *        properties:
 *          userName:
 *            type: string
 *            description: Display name for the user, needs to be unique.
 *          firstName:
 *            type: string
 *            description: First name of the user.
 *          lastName:
 *            type: string
 *            description: Last name of the user.
 *          email:
 *            type: string
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 *            description: Password for the user.
 *        example:
 *           userName: gobson123
 *           firstName: Steve
 *           lastName: Gobson
 *           email: gobson.steve@email.com
 *           password: th1sn33dz2bHa$h3d
 */
const Respository = require('../core/repository');
const {User} = require ('../models/index')
module.exports = class extends
Respository {
    // Xác định làm việc với model nào
    getModel() {
        return User;
    }
};
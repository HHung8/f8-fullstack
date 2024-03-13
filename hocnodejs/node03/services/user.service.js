const UserRepository = require("../repositories/user.repository");
const userRepository = new UserRepository();
module.exports = {
    create: (data) => {
        return userRepository.create(data);
    },
    
}
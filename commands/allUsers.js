const User = require('../models/User')

   //  find all users on users collection

async function findUsers(req, res) {
 
    try {
        const users = await User.find();

        res.status(200).send(users);

    } catch (error) {

        res.status(500).send(error.message);
        
        console.log(error.message);
    }
}

module.exports = findUsers;
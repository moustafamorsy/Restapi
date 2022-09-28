const User = require('../models/User')

    //  delete user by his id 

async function removeByid(req, res) {


    const id = req.params.id;

    try {
        await User.remove({ _id: id });

        res.status(200).send("removed")

    } catch (error) {

        res.status(500).send(error.message)
        
        console.log(error.message);
    }

}

module.exports = removeByid;
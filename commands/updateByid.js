const User = require('../models/User')

// update user data by his id

async function updateByid(req, res) {

    const { id } = req.params.id
    const data = req.body

    try {
        await User.updateOne( id , {$set: data})

        res.status(200).send("updated")

    } catch (error) {

        res.status(500).send(error.message)
        
        console.log(error.message);
    }

}

module.exports = updateByid;
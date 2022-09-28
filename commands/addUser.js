const User = require('../models/User')

// add one new user to collection

async function createUser(req, res) {

    const data = req.body;
    try {
        const user = await User.create({

            name: data.name,

            age: data.age,
        
        })
    
        res.status(200).send(data)

    } catch (error) {
        res.status(500).send(error.message)
        
        console.log(error.message);
    }
}

module.exports = createUser;
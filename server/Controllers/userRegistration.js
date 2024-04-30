import Workshop from './../Models/workshop.js';

const UserRegistration = async(req, res) => {
    const { name, email, contact, workshop } = req.body;

    const user = await Workshop.create({name: name, email: email, contact: contact, workshop: workshop,})
    if(user) {
        console.log(user)
        return res.status(200).json({ message : 'user created', user: user})
    } else {
        return res.status(400).json({ message: 'error creating user'})
    }
    
}

export default UserRegistration;

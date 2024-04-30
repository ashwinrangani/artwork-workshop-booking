import FeedBack from "../Models/feedback.js";

const feedback = async (req, res) => {
    const { name, email, message} = req.body;

    const user = await FeedBack.create({name: name, email:email, message: message})
    if(user){
        res.status(200).json('Thank You! Your query submitted successfully ')
    } else{
        res.status(400).json('Error while submitting the feedback')
    }
}

export default feedback;
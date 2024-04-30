import crypto from 'crypto';
import Workshop from './../Models/workshop.js';
import dotenv from 'dotenv'
dotenv.config()

const paymentValidation = async (req, res) => {
    console.log(req.body)
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature, id} = req.body;

    console.log(id)
    const sha = crypto.createHmac("sha256", process.env.KEY_SECRET)

    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest("hex");

    if (digest!== razorpay_signature){
        return res.status(400).json({message : 'transaction is not valid'})
    }
    try {
        const updateUser = await Workshop.findByIdAndUpdate(
            id,
            { paymentId: razorpay_payment_id, status: 'completed' },
            { new: true }
        );
           
            console.log(updateUser);
            
            res.json({
                msg: " Transaction is legit!", 
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                updatedUser : updateUser,
            });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Internal server error' });   
    }
    
    

}
export default paymentValidation;
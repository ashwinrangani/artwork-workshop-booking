import Razorpay from "razorpay"
const razorpayOrder = async(req, res) => {
    try {

        const razorpay = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET
        });

        if(!req.body) {
            return res.status(400).json({ message: 'Bad Request'})
        }
        const options = req.body;
        
        const order = await razorpay.orders.create(options);
        if(!order){
            return res.status(400).json({ message: 'Bad Request'})
        }
        res.json({order: order})
    } catch (error) {
       console.log(error) 
    }
}

export default razorpayOrder;
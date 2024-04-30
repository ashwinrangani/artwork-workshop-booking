import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    workshop: { type: String, required: true },
    contact: { type: Number },
    paymentId: { type: String, default: '' }, 
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
})

const Workshop = mongoose.model('Workshop', workshopSchema);

export default Workshop;

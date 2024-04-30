import express from 'express';
import razorpayOrder from '../Controllers/razrpayorder.js';
import paymentValidation from '../Controllers/paymentValidation.js';
import UserRegistration from '../Controllers/userRegistration.js';

import feedback from './../Controllers/feedback.js';
import getParticipant from '../Controllers/getparticipant.js';

const router = express.Router();

router.get('/', (req,res) => {
    res.json({message: 'Server Ok'})
  })
router.post('/registration', UserRegistration);
  router.post('/order', razorpayOrder);
  router.post('/validate', paymentValidation);
  router.post('/feedback', feedback)
  router.get('/getparticipant/:email', getParticipant)

  
export default router; 
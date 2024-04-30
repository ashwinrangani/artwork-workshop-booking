import Workshop from './../Models/workshop.js';

const getParticipant = async (req, res) => {
    const { email } = req.params;

    if (email) {
        // Find user by email
        const user = await Workshop.find({ email });

        if (user) {
            // If user is found, check if status is completed
            if (user.status === 'completed') {
                // If status is completed, send response indicating registration is successful
                return res.status(200).json({ message: 'User already registered and payment completed', user });
            } else {
                // If status is not completed, send response indicating registration is pending
                return res.status(200).json({ message: 'User registered but payment pending', user });
            }
        } else {
            // If no user found with provided email, send appropriate response
            console.error('No user found with the provided email');
            return res.status(404).json({ message: 'No user found with the provided email' });
        }
    } else {
        // If no email provided, send appropriate response
        console.error('No email provided');
        return res.status(400).json({ message: 'No email provided' });
    }
}

export default getParticipant;

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const UsersWorkshop = () => {
    
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState('');

    const navigate = useNavigate()

    const getUser = async (e) => {
        e.preventDefault();
        try {
            if (email) {
                const response = await axios.get(`http://localhost:4000/getparticipant/${email}`);
                const { user } = response.data;
                console.log(user);
                if (user) {
                    setUser(user);
                    
                }
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Fade>
        <div className=' bg-[#351b26]  h-screen'>
            <div>
            <button type='button' onClick={() => navigate('/')} className=' bg-red-900 float-end mt-2 mr-2 text-gray-300 hover:bg-[#351b26] border rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-yellow-200'>Home</button>
            </div>
            <div className='pt-12 r'>
                <form onSubmit={getUser} className='flex gap-2 justify-center  items-cente mt-8'>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        required
                        className='p-2 w-56 bg-slate-100 md:w-96 placeholder:font-serif rounded-lg mr-2'
                    />
                    <button type='submit' className='w-24  text-gray-300 border rounded-lg p-1.5 bg-red-900 hover:bg-[#351b26]  focus:outline-none focus:ring-1 focus:ring-yellow-200'>Get Details</button>
                    
                </form>
            </div>

           
            <div className="flex flex-wrap justify-center bg-[#351b26] mt-8">
           
    {user.map((person, index) => (
         <Fade>
        <div key={index} className="w-96 mx-4 mb-8 mt-8">
           
            <div className="rounded-xl bg-gray-300 p-6 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                    <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                        <path d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z" fill="white"></path>
                    </svg>
                </div>
                <h1 className="mb-3 -mt-6 text-2xl font-medium underline ">{person.workshop}</h1>
                <ul className='flex flex-col items-start justify-start gap-2 mt-5 font-semibold'>
                    
                    <li>Name : {person.name}</li>
                    <li>Email : {person.email}</li>
                    <li>Contact : {person.contact}</li>
                    <li>PaymentId : {person.paymentId}</li>
                    <li>Payment Status : {person.status}</li>
                    <li>Date of Registration : {person.createdAt ? new Date(person.createdAt).toLocaleDateString('en-IN') : ''}</li>
                </ul>
              
            </div>
          
        </div>
       
        </Fade> 
    ))}
  
</div>

            
        </div>
        </Fade>
    );
};

export default UsersWorkshop;

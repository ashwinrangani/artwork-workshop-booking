import {React, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useUser } from '../userContext/UserContext';


const Modal = ({closeModal, workshop }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  
  const base_url = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate();
  const { updateUser } = useUser();
  
//callback from google
    function handleCallbackResponse(response) {
        console.log(response.credential)
        var userObject = jwtDecode(response.credential)
        console.log(userObject)
        if(userObject){
          const registerUser = async() => {
            
            const response = await axios.post(`${base_url}/registration`, {
              workshop : workshop, name: userObject.name, email: userObject.email, contact: contact
            })
            console.log(response);
            const {user} = response.data
            updateUser({ name: userObject.name, email: userObject.email, workshop, id: user._id })
            if(response) {
              navigate('/payment')
            }
          }
          registerUser();
        }
        
      
     }
     useEffect(()=> {
       google.accounts.id.initialize({
         client_id: '371417701486-dmi4abq2511jveiqg9n1sa4kdhpcuavc.apps.googleusercontent.com',
         callback: handleCallbackResponse
       });
       google.accounts.id.renderButton(document.getElementById('googleBtn'), {theme: 'outline', size: 'large', width: '350px'})
     }, []);

    

  const userRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${base_url}/registration`, {
        workshop, name, email, contact
      })
      console.log(response.data)
      updateUser({ workshop, name, email, contact, id:response.data.user._id })
      if(response){
                
        navigate('/payment')
        
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  //cache user's info

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedContact = localStorage.getItem('contact');

    if(savedName) setName(savedName);
    if(savedEmail) setEmail(savedEmail);
    if(savedContact) setContact(savedContact)

  },[]);

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('contact', contact)

  },[name, email, contact])


  return (
    <div id="login-popup" tabIndex="-1" className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[999] h-full items-center justify-center popup flex">
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow popup-body">
          <button type="button" onClick={closeModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close">
            <svg aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            <span className="sr-only">Close popup</span>
          </button>
          <div className="p-5">
            <h3 className="text-2xl mb-0.5 font-medium"> </h3>
            <p className="mb-4 text-sm font-normal text-gray-800"> </p>
            <div className="mb-7 text-center">
              <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                Login to your account
              </p>
              <p className="mt-2 text-sm leading-4 text-slate-600">
                You must be logged in to perform this action.
              </p>
            </div>
            <div>
              
                
                <div id='googleBtn' className='flex justify-center items-center'></div>
                {/* Continue with LinkedIn button */}
              
              <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                <div className="h-px w-full bg-slate-200"></div>OR
                <div className="h-px w-full bg-slate-200"></div>
              </div>
              <form className="w-full">
              <label for="name" className="sr-only">Name</label>
                        <input name="name" type="text"  
                                value={name} onChange={(e) => setName(e.target.value)}
                                className="block w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                            placeholder="Name" />
              <label for="email" className="sr-only">Email address</label>
                        <input name="email" type="email" autocomplete="email" 
                                value={email} onChange={(e)=>setEmail(e.target.value)}
                                className="block mt-2 w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                            placeholder="Email Address" />
                        <label for="contact" className="sr-only">Mobile Number</label>
                        <input name="contact" type="number" value={contact} onChange={(e)=>setContact(e.target.value)}
                            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                            placeholder="Mobile Number" />
                {/* <p className="mb-3 mt-2 text-sm text-gray-500"><a href="/forgot-password" className="text-blue-800 hover:text-blue-600">Reset your password?</a></p> */}
                <button type="button" onClick={userRegistration} className="inline-flex mt-2 w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">Continue</button>
              </form>
            </div>
            {/* <div className="mt-6 text-center text-sm text-slate-600">
              Don't have an account? <a href="/signup" className="font-medium text-[#4285f4]"> Sign up</a> </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

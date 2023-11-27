import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../state/action-creators';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



const Login = () => {
  const dispatch = useDispatch();
 

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(formData));
    // Show a success toast for login
    toast.success('Login successful!');
 
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className='register-wrapper'>
      <div className='register'>
        <div className='register-card'>
          <h2>Login</h2>
          <form>
            <div className='mb-4'>
              <input type="email" className='input-field' name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>
            <div className='mb-4'>
              <input type="password" className='input-field' name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            </div>
            <div className='mb-4'>
              <button onClick={handleSubmit} className='submit'>
              <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>Login</Link>

                
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
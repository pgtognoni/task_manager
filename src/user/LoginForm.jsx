import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios';

function LoginForm() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const location = useLocation().pathname
    const navigate = useNavigate();

    const handleConfirmPasswordChange = (event) => {
      const confirmPasswordValue = event.target.value;
      setConfirmPassword(confirmPasswordValue);
      setPasswordMatch(password === confirmPasswordValue);
    };
    
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      
      const user = {
        email: email,
        password: password
      }

      try { 
        const response = await axios.post(
          `https://us-central1-doose-manager.cloudfunctions.net/${ location === '/register' ? 'registerUser' : 'loginUser' }`, 
          user,
          {headers: { 'Access-Control-Allow-Origin': '*'}})
        if (response.status === 200) {
          navigate('/')
          setEmail('')
          setPassword('')
          setConfirmPassword('')
          console.log(response.data)
        }
      } catch (error) {
        console.log(error);
      }
     };


  return (
    <div className='container'>
      <div className='row'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='col container'>
        <div className=''>
          <div className='col-xs-12 col-6 form-group mt-5'>
            <label htmlFor="email">Email</label>
            <input className='form-control mt-2' 
              type="email" id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder='Email' 
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              />
            {errors.email && <p>Please enter a valid email address.</p>}
          </div>
          <div className='col-xs-12 col-6 form-group mt-5'>
            <label htmlFor="password">Password</label>
            <input className='form-control mt-2'
             type="password" 
             id="password" 
             value={password} 
             onChange={(e) => setPassword(e.target.value)} 
             placeholder='Password' 
             {...register('password', {
              required: true,
              minLength: 8,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
             })}
             />
          </div>
          {errors.password  && (
            <p className='col-xs-12 col-6 m-0 mt-1' >
              Please enter a valid password
            </p>
            )}
          {location === '/register' 
            ? <>
            <p className='col-xs-12 col-6 m-0' >
              Password must be:
            </p>
            <ul>
                <li className={/^.{8,}$/.test(password) ? 'text-green' : 'text-gray'}>8 characters or more</li>
                <li className={/[A-Z]/.test(password) ? 'text-green' : 'text-gray'}>1 uppercase letter</li>
                <li className={/[\d]/.test(password) ? 'text-green' : 'text-gray'}>1 number</li>
                <li className={/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password) ? 'text-green' : 'text-gray'}>1 special character</li>
            </ul>
            <div className='col-xs-12 col-6 form-group mt-5'>
                <label htmlFor="password">Confirm Password</label>
                <input className='form-control mt-2' type="password" id="password" value={confirmPassword} onChange={(e) => handleConfirmPasswordChange(e)} placeholder='Password' />
                {!passwordMatch && <p>Passwords must match.</p>}
            </div>
            </>
            : null}  
        </div>
        <div className='d-flex mt-4 gap-3'>
          <button type="submit" className='btn btn-send btn-primary'>{location === '/register' ? 'Register' : 'Log In'}</button>
          {location !== '/login' 
          ? (
            <div className='d-flex align-items-center gap-2'>
                <span>Have an account?</span>
                <Link to='/login'>Log In</Link>
            </div>
          )
          : (
            <div className='d-flex align-items-center gap-2'>
                <span>Don't have an account?</span>
                <Link to='/register'>Sign Up</Link>
            </div>
          )}
        </div>
      </form>
      </div>
    </div>
  )
}

export default LoginForm
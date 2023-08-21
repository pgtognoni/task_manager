import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';
import '../firebaseConfig'
import { createUser } from '../apiCalls';
import { useAuth } from '../context/AuthContext';

function LoginForm() {

    const { setPending, setCurrentUser } = useAuth();
    const { register,  setValue, watch, reset, formState: { errors } } = useForm();
    
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const location = useLocation().pathname
    const navigate = useNavigate();
    const password = watch('password')
    const email = watch('email')

    const handleConfirmPasswordChange = (event) => {
      const confirmPasswordValue = event.target.value;
      setConfirmPassword(confirmPasswordValue);
      setPasswordMatch(password === confirmPasswordValue);
    };
    
    const handleFormSubmit = async (event) => {
      event.preventDefault();      
      
      let userEmail = email;
      let userPassword = password;

      let auth = getAuth();

      try {

        const userCredential = location === '/register' 
          ? await createUserWithEmailAndPassword(auth, userEmail, userPassword)
          : await signInWithEmailAndPassword(auth, userEmail, userPassword);

        const user = userCredential.user;

        if (user && location === '/register') {

          const newUser = {
            email: userEmail,
            toDos: []
          }

          navigate('/login')
          reset({});
          setConfirmPassword('')
          createUser(user.uid, newUser)

        } else {

          navigate('/taskmanager')
          reset({});
          setConfirmPassword('')
          setPending(false);
          // setCurrentUser(user);

        }
      } catch (error) {
        alert(error.message)
        console.log('Registration error:', error);
      }
      
     };


  return (
    <div className='container'>
      <div className='row'>
      <form onSubmit={(e) => handleFormSubmit(e)} className='col container form-container'>
        <div className='mx-auto'>
          <div className='col-12 col-sm-6 form-group mx-auto'>
            <label htmlFor="email">Email</label>
            <input className='form-control mt-2 email' 
              type="email" id="email" 
              placeholder='Email'
              onChange={(e) => setValue(e.target.value)} 
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              />
            {errors.email && <p>Please enter a valid email address.</p>}
          </div>
          <div className='col-12 col-sm-6 form-group mt-5 mx-auto'>
            <label htmlFor="password">Password</label>
            <input className='form-control mt-2 password'
             type="password" 
             id="password" 
             onChange={(e) => setValue(e.target.value)}
             placeholder={location === '/register' ? '' : 'Enter your password'}
             {...register('password', {
              required: true,
              minLength: 8,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
             })}
             />
          </div>
          {errors.password  && (
            <p className='col-12 col-sm-6 m-0 mt-1 mx-auto' >
              Please enter a valid password
            </p>
            )}
          {location === '/register' 
            ? (<>
            <p className='col-12 col-sm-6 m-0 mx-auto' >
              Password must be:
            </p>
            <ul className='col-12 col-sm-6 m-0 mx-auto'>
                <li className={/^.{8,}$/.test(password) ? 'text-green' : 'text-gray'}>8 characters or more</li>
                <li className={/[A-Z]/.test(password) ? 'text-green' : 'text-gray'}>1 uppercase letter</li>
                <li className={/[a-z]/.test(password) ? 'text-green' : 'text-gray'}>1 lowercase letter</li>
                <li className={/[\d]/.test(password) ? 'text-green' : 'text-gray'}>1 number</li>
                <li className={/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password) ? 'text-green' : 'text-gray'}>1 special character</li>
            </ul>
            <div className='col-12 col-sm-6 form-group mt-5 mx-auto'>
                <label htmlFor="password">Confirm Password</label>
                <input className='form-control mt-2 password' type="password" id="confirm-password" value={confirmPassword} onChange={(e) => handleConfirmPasswordChange(e)} placeholder='Confirm password' />
                {!passwordMatch && <p>Passwords must match.</p>}
            </div>
            </>)
            : null}  
        </div>
        <div className='d-flex flex-column flex-sm-row mt-4 mb-4 gap-3 align-items-center justify-content-center'>
          <button type="submit" className='text-white btn-log'>{location === '/register' ? 'Register' : 'Log In'}</button>
          {location !== '/login' 
          ? (
            <div className='d-flex align-items-center gap-2'>
                <span className='text-white'>Have an account?</span>
                <Link to='/login' className='text-orange'>Log In</Link>
            </div>
          )
          : (
            <div className='d-flex align-items-center gap-2'>
                <span className='text-white'>Don't have an account?</span>
                <Link to='/register' className='text-orange'>Sign Up</Link>
            </div>
          )}
        </div>
      </form>
      </div>
    </div>
  )
}

export default LoginForm
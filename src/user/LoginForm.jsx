import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const location = useLocation().pathname

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[!!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    };
    
    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);
        setIsValidEmail(validateEmail(emailValue));
    };
    
    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        setIsValidPassword(validatePassword(passwordValue));
    };
    
    const handleConfirmPasswordChange = (event) => {
        const confirmPasswordValue = event.target.value;
        setConfirmPassword(confirmPasswordValue);
        setPasswordMatch(password === confirmPasswordValue);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (location === '/register') {
            if (isValidEmail && isValidPassword && passwordMatch) {
                // Submit form
            } else {
                // Show error message
            }
        } else {
            if (isValidEmail && isValidPassword) {
                // Submit form
            } else {
                // Show error message
            }
        }

    };


  return (
    <div className='container'>
      <div className='row'>
      <form onSubmit={(e) => handleSubmit(e)} className='col container'>
        <div className=''>
          <div className='col-xs-12 col-6 form-group mt-5'>
            <label htmlFor="email">Email</label>
            <input className='form-control mt-2' type="email" id="email" value={email} onChange={(e) => handleEmailChange(e)} placeholder='Email' />
            {!isValidEmail && <p>Please enter a valid email address.</p>}
          </div>
          <div className='col-xs-12 col-6 form-group mt-5'>
            <label htmlFor="password">Password</label>
            <input className='form-control mt-2' type="password" id="password" value={password} onChange={(e) => handlePasswordChange(e)} placeholder='Password' />
          </div>
          {!isValidPassword && (
            <p>
                Password must be at least 8 characters long, contain 1 uppercase
                letter, 1 number and 1 special character
            </p>
            )}
          {location === '/register' 
            ? <>
            <ul>
                <li className={/^.{8,}$/.test(password) ? 'text-green' : 'text-gray'}>8 characters or more</li>
                <li className={/[A-Z]/.test(password) ? 'text-green' : 'text-gray'}>1 uppercase letter</li>
                <li className={/[\d]/.test(password) ? 'text-green' : 'text-gray'}>1 number</li>
                <li className={/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password) ? 'text-green' : 'text-gray'}>1 special character</li>
            </ul>
            <div className='col-xs-12 col-md-6 form-group mt-5'>
                <label htmlFor="password">Confirm Password</label>
                <input className='form-control mt-2' type="password" id="password" value={password} onChange={(e) => handleConfirmPasswordChange(e)} placeholder='Password' />
                {!passwordMatch && <p>Passwords must match.</p>}
            </div>
            </>
            : null}  
        </div>
        <div className='d-flex mt-4 gap-3'>
          <button type="submit" className='btn btn-send btn-primary'>{location === '/register' ? 'Register' : 'Log In'}</button>
          {location === '/login' && (
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
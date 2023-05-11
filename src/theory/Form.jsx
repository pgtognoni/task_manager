import React, { useState } from 'react'

function Form() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <form>
        <label for='name'>
          <input type='email' name='email' id='email' placeholder='Email' 
            value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label for='name'>
          <input type='password' name='password' id='password' placeholder='Password' 
            value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
            <button>Cancel</button>
            <button>Submit</button>
        </div>
    </form>
  )
}

export default Form
import React from 'react'

function Form() {

  return (
    <form>
        <label for='name'>
            <input type='text' name='name' id='name' placeholder='Name'/>
        </label>
        <label for='name'>
            <input type='email' name='email' id='email' placeholder='Email' />
        </label>
        <div>
            <button>Cancel</button>
            <button>Submit</button>
        </div>
    </form>
  )
}

export default Form
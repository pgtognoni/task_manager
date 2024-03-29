import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='p-4'>
      <section className='section sec-1 p-3 mx-auto'>
        <div className='section-text'>
          <p className='intro-1'>Introducing <span className='brand-name mx-1'><img src='/DXLogo.svg' alt='DX' /></span> 
          the app designed to help you manage your daily tasks and priorities. <br></br><br></br>
          Keep track of your to-do lists in one place and never miss an appointment or deadline again. <br></br><br></br>
          Ideal for busy professionals, students, or anyone who wants to stay organized.</p>
        </div>
      </section>
      <section className='section sec-2 p-3 mx-auto'>
        <div className='section-text'>
          <p>With <span className='brand-name mx-1'><img src='/DXLogo.svg' alt='DX' /></span> you can:</p>
          <ul>
            <li>Add a task to your list</li>
            <li>Set a Date</li>
            <li>Edit and mark as completed</li>
          </ul>
          <p>Become a member and...</p>
          <ul>
            <li>Use your Own Calendar</li>
            <li>Customise your reminders</li>
            <li>And much more...</li>
          </ul>
          <div className='start mx-auto'>
            <h2 className='text-center m-3 p-3 mx-auto'><Link to='/login'>Start Now</Link></h2>
          </div>
        </div>
      </section>
      <section className='section sec-3 p-3 mt-3 mx-auto d-flex justify-content-center align-items-center'>
        <div className='member-box'>
          <h2 className='p-3 text-center member m-0'><Link to='/register'>Become a Member</Link></h2>
        </div>
      </section>
    </div>
  )
}

export default HomePage
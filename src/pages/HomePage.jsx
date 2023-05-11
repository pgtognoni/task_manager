import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='p-4'>
      <section className='section sec-1 p-3 mx-auto'>
        <div className='gray-box'></div>
        <p className='intro-1'>Introducing <span className='brand-name mx-1'>Doose</span> 
        the app designed to help you manage your daily tasks and priorities. <br></br><br></br>
        Keep track of your to-do lists in one place and never miss an appointment or deadline again. <br></br><br></br>
        Ideal for busy professionals, students, or anyone who wants to stay organized.</p>
      </section>
      <section className='section sec-2 p-3 mx-auto'>
        <div className='gray-box'></div>
        <p>With <span className='brand-name mx-1'>Doose</span> you can:</p>
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
        <h2 className='text-center m-3 p-3 start mx-auto'><Link to='/taskmanager'>Start Now</Link></h2>
      </section>
      <section className='section sec-3 p-3 mt-3 mx-auto d-flex justify-content-center align-items-center'>
        <div className='purple-box'></div>
        <h2 className='p-3 text-center member'><Link to='/register'>Become a Member</Link></h2>
      </section>
    </div>
  )
}

export default HomePage
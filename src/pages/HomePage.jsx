import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='p-4'>
      <section className='section-1'>
        <p className='intro-1'>Introducing <span className='brand-name'>Doose</span> 
        - the app designed to help you manage your daily tasks and priorities. 
        Keep track of your to-do lists in one place and never miss an appointment or deadline again.
        Ideal for busy professionals, students, or anyone who wants to stay organized.</p>
      </section>
      <section className='section-2'>
        <p>With <span className='brand-name'>Doos</span> you can:</p>
        <ul>
          <li>Add a task to your list</li>
          <li>Set a Date</li>
          <li>Choose to get your reminder</li>
          <li>Edit and mark as complete</li>
        </ul>
        <ul>For members:
          <li>Use your Own Calendar</li>
          <li>Customise your reminders</li>
          <li>And much more...</li>
        </ul>
      </section>
      <section className='section-3'>
        <h2><Link to='/register'>Becomer a Member</Link></h2>
      </section>
    </div>
  )
}

export default HomePage
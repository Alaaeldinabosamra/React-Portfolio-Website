import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact us
      </h1>
      <p className='sub-title'>Contact us for more information and Get notified when i publish something new.</p>

      <div className="flex">
        <form action="">
          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name='' id='email' />
          </div>

          <div className='flex' style={{marginTop: "24px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="" id="message"></textarea>
          </div>

          <button className='submit'>Submit</button>
        </form>
        <div className="animation"></div>
      </div>
    </section>

  )
}

export default Contact
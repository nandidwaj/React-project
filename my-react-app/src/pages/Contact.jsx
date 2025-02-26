import React from 'react'
import PizzaLeft from "../assets/pizzaleft.jpg"
import '../styles/Contact.css'
function Contact() {
  return (
    <>
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${PizzaLeft})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'for>Full Name</label>
                <input name="name" placeholder='Enter Full Name.....' type="text"/>
                <label htmlFor='email'for>Email</label>
                <input name="email" placeholder='Enter Email.....' type="email"/>
                <label htmlFor='message'for>Message</label>
                <textarea rows={6} placeholder='Enter message...' name='message' required></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
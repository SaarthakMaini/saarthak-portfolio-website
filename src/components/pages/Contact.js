import {React,useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
            publicKey: process.env.REACT_APP_PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
  return (
    <section>
        <div className="container">
            <h2 className="--text-center --color-white">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">
                <input type="text" placeholder='Full Name' name='user_name' required/>
                <input type="email" placeholder='Email' name='user_email' required/>
                <input type="text" placeholder='Subject' name='subject' required/>
                <textarea name="message" cols="30" rows="10"></textarea>
                <button type='submit' className="--btn --btn-primary">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact

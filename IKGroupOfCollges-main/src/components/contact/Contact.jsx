import React, { useState } from "react"
import Back from "../common/back/Back"
import "./contact.css"
import emailjs from '@emailjs/browser';
import Spinner from "../spinner/Spinner"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", subject: "", message: "", isLoading: false,
    nameErr: false, emailErr: false, subjectErr: false, messageErr: false
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value, [name + 'Err']: false }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name === '') {
      setFormData((prevFormData) => ({ ...prevFormData, nameErr: true }));
      return
    } else if (formData.email === '') {
      setFormData((prevFormData) => ({ ...prevFormData, emailErr: true }));
      return
    } else if (formData.subject === '') {
      setFormData((prevFormData) => ({ ...prevFormData, subjectErr: true }));
      return
    } else if (formData.message === '') {
      setFormData((prevFormData) => ({ ...prevFormData, messageErr: true }));
      return
    }
    setFormData((prevState) => ({ ...prevState, isLoading: true }))
    const serviceId = process.env.REACT_APP_SERVICEID
    const templateId = process.env.REACT_APP_TEMPLATEID
    const publicKey = process.env.REACT_APP_PUBLICKEY
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "IK Verma, PSNIC, Naraini, Dewa",
      message: formData.message
    }
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(res => {
      setTimeout(() => {
        setFormData((prevState) => ({ ...prevState, name: "", email: "", subject: "", message: "", isLoading: false }))
      }, 2000);
    }).catch(err => setFormData((prevState) => ({ ...prevState, isLoading: false })))
  };

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.5792964756733!2d81.15405971080907!3d27.04345675436228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995d7bc08b5e3d%3A0xeaffb2bc994d7c1b!2sPRATIBHA%20SHIKSHA%20NIKETAN%20INTER%20COLLEGE%20-%20NARAINI!5e0!3m2!1sen!2sin!4v1719068213199!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Naraini ,dewa ,Barabanki,225301</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>pratibhasnhs@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>9415770331</p>
              </div>
            </div>

            <form action='' onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input type='text' placeholder='Name' id="name" name="name" value={formData.name} onChange={handleChange} style={{ 'border': formData.nameErr ? '1px solid red' : '', }} />
                <input type='email' placeholder='Email' id="email" name="email" value={formData.email} onChange={handleChange} style={{ 'border': formData.emailErr ? '1px solid red' : '', }} />
              </div>
              <input type='text' placeholder='Subject' id="subject" name="subject" value={formData.subject} onChange={handleChange} style={{ 'border': formData.subjectErr ? '1px solid red' : '', }} />
              <textarea cols='30' rows='10' placeholder='Type your message here...' id="message" name="message" value={formData.message} onChange={handleChange} style={{ 'border': formData.messageErr ? '1px solid red' : '', }} >
                Create a message here...
              </textarea>

              <div className='flexSB'>{formData?.isLoading ? <Spinner /> : <button className='primary-btn' >SEND MESSAGE</button>}</div>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

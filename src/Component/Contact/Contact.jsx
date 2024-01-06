import React from 'react'
import './Contact.css'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { ErrorBtn } from '../../index'


function Contact() {
  const form = useForm()
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const allFrameworks = useSelector(state => state.langBarData.language)


  const handleCross = (data) => {
    console.log(data)
  }


  return (
    <div className='contact'>
      <div className="contact-title">
        <lord-icon
          src="https://cdn.lordicon.com/wyqtxzeh.json"
          trigger="loop"
          delay="2000"
          colors={`primary:${allFrameworks.color},secondary:${allFrameworks.color}`}
          style={{ width: '70px', height: '70px' }}>
        </lord-icon>
        Contact
      </div>
      <div className='form-and-images'>
        <form onSubmit={handleSubmit(handleCross)} noValidate>
          <div className='companies'>
            <select {...register('comp', {
              required: {
                value: true,
                message: "Please select an option"
              }
            })} style={{ backgroundColor: allFrameworks.color }}>
              <option value="other">Other</option>
              <option value="facebook">Facebook</option>
              <option value="amazon">Amazon</option>
              <option value="apple">Apple</option>
              <option value="google">Google</option>
            </select>
            {!errors.comp?.message ? null : <ErrorBtn text={errors.comp?.message} />}
          </div>

          <input type="text" placeholder='Full Name' {...register("username", {
            required: {
              value: true,
              message: 'Name is required'
            }
          })} />

          {!errors.username?.message ? null : <ErrorBtn text={errors.username?.message} />}

          <input type="text" placeholder='Email' {...register("email", {
            pattern: {
              value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
              message: "Please enter a valid email address."
            }, required: {
              value: true,
              message: 'Email is required'
            }
          })} />
          {!errors.email?.message ? null : <ErrorBtn text={errors.email?.message} />}


          <textarea name="" id="" cols="30" rows="10" placeholder='Write your message' {...register("messages", {
            required: {
              value: true,
              message: 'Message is required.'
            },
            minLength: 20
          })}></textarea>
          {!errors.messages?.message ? null : <ErrorBtn text={errors.messages?.message} />}
          <button className='submit' type='submit' style={(!errors.email?.message && window.innerWidth < 768) ? { marginBottom: '50px', backgroundColor: allFrameworks.color } : { marginBottom: '50px', backgroundColor: allFrameworks.color }}>Submit</button>
        </form>
        <div className="image-part">
          <div className='image-box'>
            <div className="image1"></div>
            <div className="image2"></div>
          </div>
        </div>
      </div>
      <DevTool control={control} />
      <div className="contact-details">
        <div className="mail"><i class="fa-solid fa-envelope"></i>naitikkumarofficial2408@gmail.com</div>
        <div className="watsapp"><i class="fa-brands fa-square-whatsapp"></i>+91 9060557296</div>
      </div>
    </div>
  )
}

export default Contact

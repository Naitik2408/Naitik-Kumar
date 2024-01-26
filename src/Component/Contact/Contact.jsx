import React, { useRef, useState } from 'react'
import './Contact.css'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ErrorBtn } from '../../index'
import idea from '../../assets/idea_2.png'


function Contact() {
  const [setSubBtn]=useState(false)
  const form = useForm()
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const allFrameworks = useSelector(state => state.langBarData.language)


  const handleCross = (data) => {
    console.log(data)
    console.log('file is subbmited')
    setSubBtn(true)
    setTimeout(() => {
      setSubBtn(false)
      setTimeout(() => {
        alert('Form is submited.For faster Reply contact on Watsapp.')
      }, 100);
    }, 2000);
  }


  return (
    <div className='w-full min-h-screen p-4'>
      <div className="flex items-center text-4xl mb-5">
        <lord-icon
          src="https://cdn.lordicon.com/wyqtxzeh.json"
          trigger="loop"
          delay="2000"
          colors={`primary:${allFrameworks.color},secondary:${allFrameworks.color}`}
          style={{ width: '70px', height: '70px' }}>
        </lord-icon>
        Contact
      </div>
      <div className='w-full flex'>
        <form onSubmit={handleSubmit(handleCross)} noValidate className='w-[50%] flex flex-col'>
          <div className='companies'>
            <select {...register('comp', {
              required: {
                value: true,
                message: "Please select an option"
              }
            })} style={{ backgroundColor: allFrameworks.color }} className='w-full p-3 rounded-md shadow-black shadow-lg text-black mb-5'>
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
          })} className='w-full p-3 rounded-md shadow-black shadow-lg text-slate-100 mb-1 bg-slate-900 outline-none' />

          {!errors.username?.message ? null : <ErrorBtn text={errors.username?.message} />}

          <input type="text" placeholder='Email' {...register("email", {
            pattern: {
              value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
              message: "Please enter a valid email address."
            }, required: {
              value: true,
              message: 'Email is required'
            }
          })} className='w-full p-3 rounded-md shadow-black shadow-lg text-slate-100 mt-4 mb-1 bg-slate-900 outline-none' />
          {!errors.email?.message ? null : <ErrorBtn text={errors.email?.message} />}


          <textarea name="" id="" cols="30" rows="10" placeholder='Write your message' {...register("messages", {
            required: {
              value: true,
              message: 'Message is required.'
            }
          })} className='w-full p-3 rounded-md shadow-black shadow-lg text-slate-100 mt-4 mb-1 bg-slate-900 outline-none'></textarea>
          {!errors.messages?.message ? null : <ErrorBtn text={errors.messages?.message} />}
          <button className='w-20 px-4 py-2 flex justify-center items-center shadow-lg  shadow-black rounded-lg text-black mt-4 bg-green-400' type='submit' style={{ backgroundColor: allFrameworks.color }} >Submit</button>
        </form>
        <div className="w-[50%] flex justify-center">
          <img src={idea} alt="" className='b h-[550px]' />
        </div>
      </div>
    </div>
  )
}

export default Contact

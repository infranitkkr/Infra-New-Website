import React from 'react'
import { useForm } from 'react-hook-form'

const Mixcrete = () => {

    
    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form;
    const {errors} = formState;
    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-6 text-gray-800">MixCrete</h1>
    <form className="flex flex-col w-3/4 p-6 bg-white shadow-lg rounded-lg space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-1 ">
        <label htmlFor="teamName" className="text-gray-700">Team Name</label>
        <input
          type="text"
          id="teamName"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('teamName', {
            required: {
              value: true,
              message: 'Team Name is required'
            }
          })}
        />
        <p className=' text-red-500 text-sm '>{errors.teamName?.message}</p>
      </div>


      <div className="flex flex-col space-y-1">
        <label htmlFor="teamLeader" className="text-gray-700">Team Leader</label>
        <input
          type="text"
          id="teamLeader"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('teamLeader', {
            required: {
              value: true,
              message: 'Leader Name is required'
            }
          })}
        />
        <p className=' text-red-500 text-sm '>{errors.teamLeader?.message}</p>


      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-gray-700">Email</label>
        <input
          type="text"
          id="email"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required'
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address'
            }
          })}
        />
        <p className=' text-red-500 text-sm '>{errors.email?.message}</p>
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-gray-700">Phone number</label>
        <input
          type="text"
          id="number"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('number', {
            required: {
              value: true,
              message: 'Phone number is required'
            },
            pattern: {
              value: /^[0-9]/,
              message: 'Invalid phone number address'
            }
          })}
        />
        <p className=' text-red-500 text-sm '>{errors.number?.message}</p>
      </div>


      <div className='flex justify-between'>
      <button 
      onClick={() => reset()}
      type='button' 
      className='mt-4 py-2 px-4 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
      Reset
      </button>

      <button 
      type='submit'
        className="mt-4 py-2 px-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
      </div>
    </form>
  </div>
  
  )
}

export default Mixcrete
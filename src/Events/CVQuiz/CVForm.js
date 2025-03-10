import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const CVForm = () => {

  const [serverError, setServerError] = useState("");

  const form = useForm()
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors } = formState;

  const fields = ["name", "rollno", "email", "number","branch","year"];
  const formData = watch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      console.log("data", data);
      const response = await fetch('https://infra-event-form.onrender.com/submit/cvquiz', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      const result = await response.json();
      if (response.ok) {
        reset();
          
        navigate('success');
        setServerError("");
        console.log('Form submitted successfully');
      } else {
      
        setServerError(result.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);

    } 
  };
  return (
    <div className=' flex flex-col items-center justify-center '>

      <h1 className="text-3xl font-bold mb-6 text-gray-800 flex justify-center items-center">CV Quiz</h1>

      <div className="flex flex-row items-center justify-center w-full min-h-screen px-4 bg-gray-100 py-6">
        <div className='flex flex-col justify-center items-center sm:w-2/3 w-full bg-white shadow-lg rounded-lg space-y-4'>
          <form
            className="flex flex-col w-full p-6 bg-white shadow-lg rounded-lg space-y-4"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("name", { required: "Name is required" })}
              />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="rollNo" className="text-gray-700">    Roll No</label>
              <input
                type="number"
                id="rollNo"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                {...register("rollNo", { required: "Roll No is required" })}
              />
              <p className="text-red-500 text-sm">{errors.rollNo?.message}</p>
            </div>  
           

            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", {
                  required: "Domain ID is required",
                  pattern: {
                    value: /^[0-9]+@nitkkr\.ac\.in$/,
                    message: "Domain ID is required",
                  },
                })}
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="number" className="text-gray-700">Phone Number</label>
              <input
                type="number"
                id="number"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                {...register("number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              <p className="text-red-500 text-sm">{errors.number?.message}</p>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="branch" className="text-gray-700">Branch</label>
              <input
                type="text"
                id="branch"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("branch", { required: "Branch is required" })}
              />
              <p className="text-red-500 text-sm">{errors.branch?.message}</p>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="year" className="text-gray-700">Year</label>
              <input
                type="number"
                id="year"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                {...register("year", { required: "Year is required" ,pattern: {
                  value: /^\d{1}$/,
                  message: "Year can be 1 , 2 , 3 , 4",
                }})}
              />
              <p className="text-red-500 text-sm">{errors.year?.message}</p>
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
            {serverError && (
              <div className="text-red-500 text-sm mt-4">
                  {serverError}
              </div>
            )}  
          </form>
        </div>
      </div>
    </div>
  )
}

export default CVForm
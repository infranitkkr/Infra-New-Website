import React from 'react'
import { useForm } from 'react-hook-form'

const IForm = () => {


  const form = useForm()
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors } = formState;

  const fields = ["teamName", "teamLeader", "email", "number"];
  const formData = watch();

  // Calculate progress percentage
  const filledFields = fields.filter(
    (field) => formData[field]?.trim() && !errors[field]
  ).length;
  const progress = (filledFields / fields.length) * 100;


  const onSubmit = async (data) => {
    try {
      const response = await fetch('hhttps://infra-event-form.onrender.com/submit/mixcrete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        console.log('Form submitted successfully');
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className=' flex flex-col items-center justify-center '>

      <h1 className="text-3xl font-bold mb-6 text-gray-800 flex justify-center items-center">MixCrete</h1>

      <div className="flex flex-row items-center justify-center w-full min-h-screen bg-gray-100 p-6">


        {/* <div className=" w-1/3 bg-gray-200 rounded-full  mb-4 p-6">
          <div
            className="bg-blue-500 h-4 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div> */}


        <div className='flex flex-col justify-center items-center w-2/3 p-6 m-8 bg-white shadow-lg rounded-lg space-y-4'>
          <form
            className="flex flex-col w-full p-6 bg-white shadow-lg rounded-lg space-y-4"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col space-y-1">
              <label htmlFor="teamName" className="text-gray-700">Team Name</label>
              <input
                type="text"
                id="teamName"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("teamName", { required: "Team Name is required" })}
              />
              <p className="text-red-500 text-sm">{errors.teamName?.message}</p>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="teamLeader" className="text-gray-700">Team Leader</label>
              <input
                type="text"
                id="teamLeader"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("teamLeader", { required: "Leader Name is required" })}
              />
              <p className="text-red-500 text-sm">{errors.teamLeader?.message}</p>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
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
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              <p className="text-red-500 text-sm">{errors.number?.message}</p>
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
      </div>
    </div>
  )
}

export default IForm
import React from 'react'
import { useForm } from 'react-hook-form'

const BForm = () => {


  const form = useForm()
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors } = formState;

  const fields = ["teamName", "email", "number", "teamMember1", "teamMember2", "teamMember1RollNo", "teamMember2RollNo"];
  const formData = watch();



  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://infra-event-form.onrender.com/submit/build-em-all', {
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

      <h1 className="text-3xl font-bold mb-6 text-gray-800 flex justify-center items-center">Build-Em-All</h1>

      <div className="flex flex-row items-center justify-center w-full min-h-screen bg-gray-100 p-6">





        <div className='flex flex-col justify-center items-center w-2/3  m-8 bg-white shadow-lg rounded-lg space-y-4'>
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
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none  "
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
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index}>
                <div className="flex flex-col space-y-1">
                  <label htmlFor={`teamMember${index + 2}`} className="text-gray-700">
                    Team Member {index + 1}
                  </label>
                  <input
                    type="text"
                    id={`teamMember${index + 1}`}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register(`teamMember${index + 1}`, { required: `Member ${index + 1} Name is required` })}
                  />
                  <p className="text-red-500 text-sm">{errors[`teamMember${index + 1}`]?.message}</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor={`teamMember${index + 1}RollNo`} className="text-gray-700">
                    Team Member {index + 1} Roll No
                  </label>
                  <input
                    type="number"
                    id={`teamMember${index + 1}RollNo`}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    {...register(`teamMember${index + 1}RollNo`, { required: `Roll No is required` })}
                  />
                  <p className="text-red-500  text-sm">{errors[`teamMember${index + 1}RollNo`]?.message}</p>
                </div>
              </div>
            ))}

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

export default BForm
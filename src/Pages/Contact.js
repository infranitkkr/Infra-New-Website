import React from 'react'
import FadeContent from '../Animations/FadeContent';
import AnimatedContent from '../Animations/AnimatedContent'
import Particle from '../Animations/Particle';
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';



export default function Contact() {

    const form = useForm()
    const { register, handleSubmit, formState, reset, watch } = form;
    const { errors } = formState;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });



    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/sendMail', formData)
            .then(response => {
                alert('Message sent successfully!');
                reset();
            })
            .catch(error => {
                console.error('There was an error sending the message!', error);
            });
    };

    return (
        <div className='flex flex-col items-center mt-4  '>
            <div className='flex justify-start items-start p-3 border-b-2'>
                <h1 className='text-4xl font-bold w-screen pl-16'>
                    Contact Us
                </h1>
            </div>
            <div className='sm:flex sm:flex-row flex-col gap-4 w-full '>
                <div className='sm:flex-col justify-start items-center sm:w-1/2 w-full px-8 pt-4  mx-4 mt-4 shadow-lg rounded-2xl'>
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
                        <h1 className=' sm:text-6xl text-5xl font-extrabold'>
                            Get In Touch
                        </h1>
                        <p className='sm:text-lg text-base mb-4 mt-1 px-2'>
                            After brainstorming about insights, get the power to create something real. Bring your ideas to life and share your vision with concrete elements.
                        </p>
                    </FadeContent>

                    <AnimatedContent>

                        <form className='flex flex-col w-full  rounded-xl p-8'
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className='flex flex-col space-y-1 w-full'>
                                <input
                                    type='text'
                                    id='name'
                                    className='rounded-full w-full h-12 pl-4 border-gray-500 border-1 bg-gray-50'
                                    placeholder='Name*'
                                    {...register('name', { required: "Name is required" })}
                                />
                                <p className="text-red-500 text-sm pl-4">{errors.name?.message}</p>
                            </div>
                            <div className='flex sm:flex-col flex-row justify-between gap-4 my-4 '>
                                <div className='flex flex-col space-y-1 w-1/2'>
                                    <input
                                        type='email'
                                        id='email'
                                        className='rounded-full h-12 pl-4 w-full border-gray-500 border-1 bg-gray-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                                        placeholder='Email*'
                                        {...register('phoneNumber', { required: "Email is required" })}
                                    />
                                    <p className="text-red-500 text-sm pl-4">{errors.phoneNumber?.message}</p>
                                </div>
                                <div className='flex flex-col space-y-1 w-1/2'>
                                    <input
                                        type='number'
                                        id='phoneNumber'
                                        className='rounded-full h-12 pl-4 w-full border-gray-500 border-1 bg-gray-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                                        placeholder='Phone Number*'
                                        {...register('phoneNumber', { required: "Phone Number is required" })}
                                    />
                                    <p className="text-red-500 text-sm pl-4">{errors.phoneNumber?.message}</p>
                                </div>
                            </div>
                            <div className='h-60'>
                                <textarea
                                    id='message'
                                    className='h-full border-gray-500 border-1 rounded-3xl bg-gray-50 w-full pl-4 pt-3 align-text-top resize-none'
                                    placeholder='Your Message Here*'
                                    {...register('message', { required: "Message is required" })}
                                />
                                <p className="text-red-500 text-sm pl-4">{errors.message?.message}</p>
                            </div>
                            <div className='mt-8 flex flex-col'>
                                <p className='text-gray-600'>Your email address will not be published. Required fields are marked*</p>
                                <button
                                    type='submit'
                                    className="mt-2 py-2 px-4 bg-green-600 w-1/3 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </AnimatedContent>

                </div>

                <div className='flex justify-center items-center sm:w-1/2 w-full h-[90vh] bg-gray-100 sm:m-4 rounded-3xl'>

                    <iframe
                        title={"NIT-KKR"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13828.675043139203!2d76.80626880664013!3d29.94582404957092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f51bab18cb5%3A0x96200205143e35f6!2sNIT%2C%20Thanesar%2C%20Haryana%20136119!5e0!3m2!1sen!2sin!4v1710228156244!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        className="w-full sm:h-[90vh] h-full rounded-3xl"
                    />
                </div>
            </div>
            <div className="relative w-full h-screen flex justify-center items-center bg-black">
    {/* Particle Background */}
    <div className="absolute inset-0">
        <Particle
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
        />
    </div>

    {/* Foreground Content */}
    <div className="relative z-10 text-white text-center p-8 bg-opacity-50 rounded-lg">
        <h1 className="text-4xl font-bold">Social Media</h1>
        <p className="mt-2 text-lg">Unlock the full potential of social media</p>
        <p className="mt-2 text-sm">
            After brainstorming about insights, get the power to create something real. Bring your ideas.
        </p>
    </div>
</div>


            {/* <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-20 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Contact Us</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Cheers! Choose your way to contact us.</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div className="flex justify-center items-center mx-auto gap-x-8 mt-6">
                            <a target={'_blank'} href='https://www.facebook.com/InfraSociety'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </a>
                            <a target={'_blank'} href='https://www.instagram.com/infrastructure.nitkkr/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                            </a>
                            <a target={'_blank'} href='https://www.linkedin.com/company/infrastructure-society-nit-kkr/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </a>
                            <a target={'_blank'} onClick={handleEmailClick} className="hover:cursor-pointer" type=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                            </a>
                            <a target={'_blank'} href='tel: +918235777578' type='' className='sm:hidden'>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1008 15.0272L15.6446 15.5437V15.5437L15.1008 15.0272ZM15.5562 14.5477L15.0124 14.0312V14.0312L15.5562 14.5477ZM17.9729 14.2123L17.5987 14.8623H17.5987L17.9729 14.2123ZM19.8834 15.312L19.5092 15.962L19.8834 15.312ZM20.4217 18.7584L20.9655 19.275L20.9655 19.2749L20.4217 18.7584ZM19.0012 20.254L18.4574 19.7375L19.0012 20.254ZM17.6763 20.9631L17.75 21.7095L17.6763 20.9631ZM7.8154 16.4752L8.3592 15.9587L7.8154 16.4752ZM3.75185 6.92574C3.72965 6.51212 3.37635 6.19481 2.96273 6.21701C2.54911 6.23921 2.23181 6.59252 2.25401 7.00613L3.75185 6.92574ZM9.19075 8.80507L9.73454 9.32159L9.19075 8.80507ZM9.47756 8.50311L10.0214 9.01963L9.47756 8.50311ZM9.63428 5.6931L10.2467 5.26012L9.63428 5.6931ZM8.3733 3.90961L7.7609 4.3426V4.3426L8.3733 3.90961ZM4.7177 3.09213C4.43244 3.39246 4.44465 3.86717 4.74498 4.15244C5.04531 4.4377 5.52002 4.42549 5.80529 4.12516L4.7177 3.09213ZM11.0632 13.0559L11.607 12.5394L11.0632 13.0559ZM10.6641 19.8123C11.0148 20.0327 11.4778 19.9271 11.6982 19.5764C11.9186 19.2257 11.8129 18.7627 11.4622 18.5423L10.6641 19.8123ZM15.113 20.0584C14.7076 19.9735 14.3101 20.2334 14.2252 20.6388C14.1403 21.0442 14.4001 21.4417 14.8056 21.5266L15.113 20.0584ZM15.6446 15.5437L16.1 15.0642L15.0124 14.0312L14.557 14.5107L15.6446 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4574 19.7375L19.545 20.7705L20.9655 19.275L19.8779 18.2419ZM8.3592 15.9587C4.48307 11.8778 3.83289 8.43556 3.75185 6.92574L2.25401 7.00613C2.35326 8.85536 3.13844 12.6403 7.27161 16.9917L8.3592 15.9587ZM9.73454 9.32159L10.0214 9.01963L8.93377 7.9866L8.64695 8.28856L9.73454 9.32159ZM10.2467 5.26012L8.98569 3.47663L7.7609 4.3426L9.02189 6.12608L10.2467 5.26012ZM9.19075 8.80507C8.64695 8.28856 8.64626 8.28929 8.64556 8.29002C8.64533 8.29028 8.64463 8.29102 8.64415 8.29152C8.6432 8.29254 8.64223 8.29357 8.64125 8.29463C8.63928 8.29675 8.63724 8.29896 8.63515 8.30127C8.63095 8.30588 8.6265 8.31087 8.62182 8.31625C8.61247 8.32701 8.60219 8.33931 8.5912 8.3532C8.56922 8.38098 8.54435 8.41511 8.51826 8.45588C8.46595 8.53764 8.40921 8.64531 8.36117 8.78033C8.26346 9.0549 8.21022 9.4185 8.27675 9.87257C8.40746 10.7647 8.99202 11.9644 10.5194 13.5724L11.607 12.5394C10.1793 11.0363 9.82765 10.1106 9.7609 9.65511C9.72871 9.43536 9.76142 9.31957 9.77436 9.28321C9.78163 9.26277 9.78639 9.25709 9.78174 9.26437C9.77948 9.26789 9.77498 9.27451 9.76742 9.28407C9.76363 9.28885 9.75908 9.29437 9.75364 9.30063C9.75092 9.30375 9.74798 9.30706 9.7448 9.31056C9.74321 9.31231 9.74156 9.3141 9.73985 9.31594C9.739 9.31686 9.73813 9.31779 9.73724 9.31873C9.7368 9.3192 9.73612 9.31992 9.7359 9.32015C9.73522 9.32087 9.73454 9.32159 9.19075 8.80507ZM10.5194 13.5724C12.0422 15.1757 13.1924 15.806 14.0699 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4023 15.7387 15.4824 15.6819C15.5223 15.6535 15.5556 15.6266 15.5825 15.6031C15.5959 15.5913 15.6078 15.5803 15.6181 15.5703C15.6233 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6368 15.5518 15.6388 15.5497C15.6398 15.5487 15.6408 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6432 15.5452C15.6439 15.5444 15.6446 15.5437 15.1008 15.0272C14.557 14.5107 14.5577 14.51 14.5583 14.5093C14.5586 14.509 14.5592 14.5083 14.5597 14.5078C14.5606 14.5069 14.5615 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5675 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.5831 14.4846 14.5885 14.4796 14.5933 14.4754C14.6029 14.467 14.61 14.4616 14.6146 14.4584C14.6239 14.4517 14.623 14.454 14.6102 14.459C14.5909 14.4666 14.5001 14.4987 14.3103 14.4679C13.9078 14.4025 13.0391 14.0472 11.607 12.5394L10.5194 13.5724ZM8.98569 3.47663C7.9721 2.04305 5.94388 1.80119 4.7177 3.09213L5.80529 4.12516C6.32812 3.57471 7.24855 3.61795 7.7609 4.3426L8.98569 3.47663ZM18.4574 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.75 21.7095C18.497 21.6357 19.1016 21.2373 19.545 20.7705L18.4574 19.7375ZM10.0214 9.01963C10.9889 8.00095 11.0574 6.40678 10.2467 5.26012L9.02189 6.12608C9.44404 6.72315 9.3793 7.51753 8.93377 7.9866L10.0214 9.01963ZM19.5092 15.962C20.3301 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2705 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8862 13.1113 15.0124 14.0312L16.1 15.0642ZM11.4622 18.5423C10.4785 17.9241 9.43149 17.0876 8.3592 15.9587L7.27161 16.9917C8.42564 18.2067 9.56897 19.1241 10.6641 19.8123L11.4622 18.5423ZM17.6026 20.2167C17.0561 20.2707 16.1912 20.2842 15.113 20.0584L14.8056 21.5266C16.0541 21.788 17.0742 21.7762 17.75 21.7095L17.6026 20.2167Z" fill="#1C274C"/>
                                </svg>
                            </a>
                        </div>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-500">E-Mail: infrastructure@nitkkr.ac.in</p>
                            <p className="text-gray-500 hidden sm:block">Mob: +918235777578</p>
                            <p className="leading-normal my-5 font-bold">Infrastructure Society
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}



        </div>
    )
}
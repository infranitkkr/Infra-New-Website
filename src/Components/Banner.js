import React from "react";

export default function Banner() {
  return (
    <div>
      {/* !--- CTA Banner ---! */}

      {/* <section class="w-full bg-slate-900">
            <div class="container px-4 mx-auto">
                <div class="grid grid-cols-1 py-4 sm:py-1 lg:grid-cols-3">
                    <div class="flex flex-row text-center justify-center text-white my-auto ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white my-auto mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <h1 class="font-bold text-2xl sm:text-3xl">We are inducting freshers!</h1>
                    </div>
                    <div class="text-center text-white my-auto">
                        <h2 class="sm:text-xl text-sm">Together we can create something big.</h2>
                    </div>
                    <div class="py-2 mx-auto lg:py-7">
                        <a href="https://forms.gle/nFUYSZ55xHSUTpaB6" style={{ textDecoration: 'none' }} >
                            <button class="bg-yellow-400 hover:bg-transparent hover:text-white border-2 border-yellow-400 py-2 px-4 flex my-auto py-auto">
                                <svg className='my-1 hover:text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                                <h2 className='hover:text-white my-auto py-auto text-center align-middle text-xl font-bold mx-4'>Join us!</h2>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section> */}

      {/* !--- CTA Banner ---! */}

      {/* !--- Scrolling Banner ---! */}

      {/* <div class="flex items-center bg-blue text-white text-sm font-bold px-4 py-3" role="alert">
                <svg class="w-4 h-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                <marquee class="text-lg">Something happened that you should know about.</marquee>
            </div> */}

      {/* !--- Scrolling Banner ---! */}

      {/* !--- Alert/Notification ---! */}

      <div class="w-full text-white bg-slate-900">
        <div class="container flex items-center justify-center px-6 py-4 mx-auto">
          <div class="flex">
            <svg
              viewBox="0 0 40 40"
              class="w-16 h-16 sm:w-6 sm:h-6 fill-current"
            >
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path>
            </svg>

            <p class="mx-3">
              New update on Call for Proposals/Applications for IITR@175
              Partnerships and Fellowships
            </p>
          </div>
          <a href="/explore">
            <button class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
              {/* <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 12l-11-8v6h-13v4h13v6z" />
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* !--- Alert/Notification ---! */}
    </div>
  );
}

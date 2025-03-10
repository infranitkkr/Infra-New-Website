import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-8 border-t-2 mt-10 border-gray-100">
            <div className="flex flex-col items-center justify-center">
                <div className="flex">
                <img
                                className=" h-12 sm:h-[75px] w-auto "
                                src={require('../images/logo3.png')}
                                alt=""
                            />
                             <img
                                className=" h-12 sm:h-[75px] w-auto"
                                src={require('../images/logo4.png')}
                                alt=""
                            />
                </div>  
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800"><Link target={'_blank'} to="/our-allies#developers">Developers</Link></p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800"><a target={'_blank'} href="https://forms.gle/WJcFN8gLYw7ALs7H9">Suggest for site</a></p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800"><Link target={'_blank'} to="/contact-us">Contact us</Link></p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 hidden md:block"><Link target={'_blank'} to="/">Home</Link></p>
                </div>
                {/* <div className="flex items-center gap-x-8 mt-6">
                    <a target={'_blank'} href='https://www.facebook.com/InfraSociety'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></svg>
                    </a>
                    <a target={'_blank'} href='https://www.instagram.com/infrastructure.nitkkr/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                    </a>
                    <a target={'_blank'} href='https://www.linkedin.com/company/infrastructure-society-nit-kkr/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                </div> */}
                <div className="flex items-center mt-12">
                    <p className="text-base text-right leading-4 text-gray-800">
                        <span className="font-semibold text-base md:text-md">Infrastructure Society</span>
                    </p>
                    <div className="border-l border-gray-800 pl-2 ml-2">
                        <p className="text-base leading-4 text-gray-800 md:text-md" >Inc. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;


import React from "react";
function IndexPage() {
    return (
        <div className="bg-gray-900 overflow-y-hidden justify-centerW">
            <div className="mx-auto container py-12 px-4">
                <div className="w-full flex justify-center">
                    <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-gray-100 to-gray-400 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16 rounded-2xl content-center">
                                <h1 role="heading" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl text-black font-black leading-6 lg:leading-10  text-center ">Motive</h1>
                        <div className=" w-full  md:pb-0 flex-col md:block flex text-center md:pt-0 pt-4">
                            <div>
                                <p className="font-normal text-base leading-6 text-gray-800 mt-4">Carving the statues of imperfection out of scrap; making imperfection - the heavenly relish to eyes, the invincible cornerstone, jaw-dropper to onlookers ... through the unfaltering cycle of revamping sand to stone & stone to sand ... to call into existence a marvel world from theories of tome.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default IndexPage;

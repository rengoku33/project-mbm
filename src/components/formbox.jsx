import React, { Fragment } from 'react';

const FormBox = () => {
    return (
        <Fragment>
            <h1 className="text-4xl text-gray-600 flex justify-center font-bold mt-44">We're here for you!</h1>
            <span className="flex justify-center pt-1 text-xl">Got a question or need some help?</span>
            <div className="flex justify-center items-center pt-5 bg-white">
                <div className="border-2 border-orange-500 p-8 rounded-lg bg-white w-[80%]">
                    {/* Form */}
                    <form className="grid grid-cols-2 gap-4 px-36 pt-6">
                        {/* Name */}
                        <div className='px-3 mt-4'>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border border-gray-300 py-2 px-4 h-16 bg-gray-100"
                            />
                        </div>
                        {/* Location */}
                        <div className='px-3 mt-4'>
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full border border-gray-300 py-2 px-4 h-16 bg-gray-100"
                            />
                        </div>
                        {/* Phone */}
                        <div className='px-3 mt-4'>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full border border-gray-300 rounded-md py-2 px-4 h-16 bg-gray-100"
                            />
                        </div>
                        {/* Email */}
                        <div className='px-3 mt-4'>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-md py-2 px-4 h-16 bg-gray-100"
                            />
                        </div>
                        {/* Questions/Comments */}
                        <div className="col-span-2 px-3 mt-4">
                            <textarea
                                placeholder="Questions/Comments"
                                className="w-full border border-gray-300 rounded-md py-2 px-4 bg-gray-100"
                                rows="4"
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <div className="col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="bg-orange-500 text-white py-4 px-36 rounded-md hover:bg-orange-600 flex text-2xl font-semibold"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>

    );
};

export default FormBox;

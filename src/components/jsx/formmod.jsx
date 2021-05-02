import '../CSS/vermod.css';
import React, { useState } from 'react';

export default function Forml(props) {
  

  

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <div className="btmod pt-8">
          <button
            className="btnmod rounded-full bg-transparent lg:py-2  px-2 border text-center ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            I'm in.
          </button>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-auto md:overflow-x-hidden overflow-y-auto  mt-4  fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"></div>
                  {/*body*/}
                  <div className="relative imgcar p-6 flex-auto">
                    <div className="flex items-center h-screen w-full bg-teal-lighter">
                      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                        <div className="block w-full text-center text-grey-darkest mb-6">
                          <h1>Sign Up</h1>
                        </div>
                        <form
                          className="mb-4 md:flex md:flex-wrap md:justify-between"
                          data-netlify="true"
                          method="post"
                          netlify
                        >
                          <div className="field-group flex flex-col mb-4 md:w-1/2">
                            <label
                              className="field-label uppercase font-bold text-lg text-grey-darkest mb-2"
                              for="first_name"
                            >
                              First Name
                            </label>
                            <input
                              className="field border py-2 px-3 text-grey-darkest md:mr-2"
                              type="text"
                              name="first_name"
                              id="first_name"
                            />
                          </div>
                          <div className="field-group flex flex-col mb-4 md:w-1/2">
                            <label
                              className="field-label uppercase font-bold text-lg text-grey-darkest mb-2  md:ml-2"
                              for="last_name"
                            >
                              Last Name
                            </label>
                            <input
                              className="field border py-2 px-3 text-grey-darkest md:ml-2"
                              type="text"
                              name="last_name"
                              id="last_name"
                            />
                          </div>
                          <div className="field-group flex flex-col mb-4 md:w-full">
                            <label
                              className="field-label uppercase font-bold text-lg text-grey-darkest"
                              for="email"
                            >
                              Email
                            </label>
                            <input
                              className="field border py-2 px-3 text-grey-darkest"
                              type="email"
                              name="email"
                              id="email"
                            />
                          </div>
                          <div className="field-group flex flex-col  md:w-full">
                            <label className="field-label uppercase font-bold text-lg text-grey-darkest">
                              Topic of discussion
                            </label>
                            <input
                              className="field border py-2 px-3 text-grey-darkest"
                              name="discuss"
                              id="discuss"
                            />
                          </div>
                          <div className="flex items-center justify-center p-6 ">
                            <button
                              className="btnmod rounded-full px-2 ease-linear transition-all duration-150"
                              type="submit"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
}

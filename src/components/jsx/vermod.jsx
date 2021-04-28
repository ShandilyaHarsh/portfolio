import "../CSS/vermod.css"
import React from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
        
        <div className="btmod pt-8 ">
      <button
        className="btnmod rounded-full bg-transparent lg:py-2  px-2 border text-center ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        View Certificate
      </button>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <img src={props.im} alt="certificate"></img>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 ">
                  <button
                    className="btnmod rounded-full px-2 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
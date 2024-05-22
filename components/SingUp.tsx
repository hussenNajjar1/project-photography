import React from 'react';

const SingUp = () => {
  return (
    <div>
      <div className="py-16 lg:section lg:mt-40 " id="contact">
        <div className="container mx-auto flex justify-center">
          <div className="flex justify-end  flex-col lg:w-[500px] ">
            {/* text */}
            <div className="flex-1 flex flex-col justify-center items-center">
              
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              SingUp<br />
              </h2>
            </div>
            {/* form */}
            <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start form">
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder=" Email"
                name="Email"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="password"
                name="password"
                placeholder="Password "
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="password"
                name=" chack password"
                placeholder="Password "
              />
              <button className="btn btn-lg mr-6  lg:ml-36  " type="submit">SingUp </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingUp;

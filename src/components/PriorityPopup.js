import React, { useState } from "react";

const PriorityPopup = ({ priority, title, description, officeTimings, location, email }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="absolute top-[360px] right-10 w-[450px] bg-white shadow-lg border-l border-gray-300 p-6 overflow-y-auto z-50">
        
        {/* Top Badge */}
        <div className="absolute left-3 top-3 font-lato bg-[#2164E8] text-white text-sm font-bold px-3 pt-3 h-10 rounded-lg z-10">
          {priority}ST PRIORITY
        </div>
  
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
  
        {/* Map Section */}
        <div className="relative">
          <img
            src={location} // Replace with actual map URL
            alt="Map"
            className="w-full h-60 rounded-lg object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-[#5E7188] py-2 px-3 rounded-3xl w-52 shadow-md text-white">
            <p className="font-semibold text-lg text-[#FFFCFC] text-left pl-2">OFFICE TIMINGS</p>
            <div className="flex justify-left items-center mt-1 bg-white p-3 rounded-xl">
              <img src="/clock.png" alt="clock" />
              <p className="ml-2 text-[#5E7188] font-medium text-md">{officeTimings}</p>
            </div>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="mt-4 text-left">
          <div className="flex justify-between items-center mt-2">
            <h2 className="text-2xl font-bold text-[#2A3F54]">{title}</h2>
            <button className="flex bg-white border border-gray-300 shadow-lg px-4 py-2 rounded-lg hover:bg-blue-50 transition">
              <img src="/mail.png" alt="mail" /><span className="ml-2 text-blue-600 font-semibold">View Mail Address</span>
            </button>
          </div>
          <p className="text-[#787878] mt-2">{description}</p>
        </div>
      </div>
    )
  );
}  

export default PriorityPopup;

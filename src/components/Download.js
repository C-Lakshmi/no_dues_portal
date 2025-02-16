export default function Download({cost}) {
    return (
      <div className=" p-6 rounded-lg mx-auto mt-10 ml-28 mr-20">
        {/* Header Section */}
      <div className="flex justify-between items-center mb-3">
        <div className="text-[38px] font-semibold">
          ₹ {cost} <span className="text-[21px] ml-1 w-[138px] font-montserrat">TOTAL DUES</span>
        </div>
        <span className="bg-[#6995EC] text-white h-[39px] w-[127px] pt-2 rounded-md">
          ALL CLEARED
        </span>
      </div>

      {/* Blue Line */}
      <div className=" mb-4">
        <div className="h-9 bg-blue-200  w-full"></div>
      </div>
  
        <div className="bg-white p-4 shadow-sm flex justify-between items-center h-[146px] rounded-3xl mt-10">
          <div className="text-gray-700 font-lato font-medium text-[24px] ml-10">Download Your No Dues Certificate</div>
          <button className="bg-blue-600 text-white rounded-md flex items-center gap-2 px-4 py-2 hover:bg-blue-700">
            <img src="/file_save.png" alt="save"/>
            <span className="text-[20px] font-lato font-semi-bold">Download Certificate</span>
          </button>
        </div>
      </div>
    );
  }
  
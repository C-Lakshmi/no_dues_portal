const ProgressBar = ({ sections, amt }) => {
    return (
        <div>
        {/* Header Section */}
        <div className="flex justify-between items-center mb-3">
        <div className="text-[38px] font-semibold">
          ₹ {amt} <span className="text-[21px] ml-1 w-[138px] font-montserrat">TOTAL DUES</span>
        </div>
        </div>
      <div className="w-full flex h-9 rounded-lg overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            className="h-full"
            style={{
              width: `${section.percentage}%`,
              backgroundColor: section.color,
            }}
          ></div>
        ))}
      </div>
      </div>
    );
  };
  
  // Example Usage
  const Line = ({cost}) => {
    const sections = [
      { color: "#2364AA", percentage: 20 }, // Hostel Affairs (Dark Blue)
      { color: "#3DA5D9", percentage: 25 }, // Students Affairs (Blue)
      { color: "#89E0FE", percentage: 30 }, // Computer Centre (Light Blue)
      { color: "#2A3F54", percentage: 25 }, // Mechanical Workshop (Teal)
    ];
  
    return (
      <div className="ml-14 mt-16 w-[1080px] mb-9">
        <ProgressBar sections={sections} amt={cost} />
  
        {/* Legend */}
        <div className="flex space-x-4 mt-3 text-sm text-gray-700">
          {sections.map((section, index) => (
            <div key={index} className="flex items-center">
              <span
                className="w-3 h-3 rounded-full inline-block mr-2"
                style={{ backgroundColor: section.color }}
              ></span>
              {["Hostel Affairs", "Students Affairs", "Computer Centre", "Mechanical Workshop"][index]}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Line;
  
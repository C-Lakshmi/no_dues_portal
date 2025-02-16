import Navbar  from '../../components/Navbar';
import Card from '../../components/Card';
import Download from '../../components/Download';
import "@fontsource/montserrat";
import "@fontsource/lato";
function Nodues() {
  return (
    <div className="Nodues">
      <div className='bg-[#EEF1F4]'>
      <Navbar/>
      <Download/>
      <div className='ml-28 mr-28 mt-2 '>
      <Card number={1} title={"Hostel Affairs"} location={"Academic Complex, 3rd Floor"} time={"2:00pm to 6:00pm"} IsLast={false} nodues={0}/>
      <Card number={2} title={"Mechanical Workshop"} location={"Mechanical Workshop, Near Core-5"} time={"2:00pm to 6:00pm"} IsLast={false} nodues={0}/>
      <Card number={3} title={"Mechanical Workshop"} location={"Mechanical Workshop, Near Core-5"} time={"2:00pm to 6:00pm"} IsLast={true} nodues={0}/>
      </div>
      </div>
    </div>
  );
}

export default Nodues;

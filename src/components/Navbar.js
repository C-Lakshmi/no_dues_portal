const Navbar = () => {
    return (
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center h-[112px]">
        <div className="flex items-center space-x-3 h-[48px] ml-2">
          <img src="/iitg_logo.jpg" alt="Logo" className="w-12" />
          <h1 className="text-[23px] font-semibold ">No Dues Portal</h1>
        </div>
        <div className="text-blue-600 font-medium cursor-pointer text-[18px] mr-2">Kane Mona ▼</div>
      </nav>
    );
  };
export default Navbar;  
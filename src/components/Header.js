const Header = () => {
  return (
    <div className="h-32 flex bg-green-500 items-center justify-end pr-6">
      <div className="flex bg-blue-700 justify-between w-2/5">
        <nav className=" w-3/4 bg-red-500 ">
          <ul className="flex  text-black justify-evenly items-end h-16 font-semibold pb-2">
            <li>TRIPS</li>
            <li>RECENTLY VIEWED</li>
            <li>BOOKINGS</li>
          </ul>
        </nav>
        <div className="">
          <img
            src="/cardib.jpg"
            alt="image"
            className="rounded-full w-16 h-16 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

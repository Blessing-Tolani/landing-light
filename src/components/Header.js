const Header = () => {
  return (
    <div className="h-32 flex  items-center justify-end pr-6">
      <div className="flex  justify-between w-2/5">
        <nav className=" w-4/5  ">
          <ul className="flex text-sm text-black justify-evenly items-end h-16 font-semibold pb-3">
            <li>TRIPS</li>
            <li>RECENTLY VIEWED</li>
            <li>BOOKINGS</li>
          </ul>
        </nav>
        <div className="">
          <img
            src="/cardib.jpg"
            alt="image"
            className="rounded-full w-14 h-14 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

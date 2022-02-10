const Header = () => {
  return (
    <div className="h-24 sm:h-32 flex w-full items-center sm:justify-end pl-3 pr-3">
      <div className="flex  justify-between w-full bg-blue-900 sm:w-4/5  xl:w-2/5">
        <nav className=" bg-red-900 w-3/4 md:w-4/5  ">
          <ul className="flex text-xs sm:text-sm text-black justify-evenly items-end h-16 font-semibold pb-5 sm:pb-3">
            <li>TRIPS</li>
            <li>RECENTLY VIEWED</li>
            <li>BOOKINGS</li>
          </ul>
        </nav>
        <div>
          <img
            src="/cardib.jpg"
            alt="image"
            className="rounded-full w-12 h-12 sm:w-14 sm:h-14 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

import ChipSvg from "../../../public/logos/ChipSvg";
import WifiSvg from "../../../public/logos/WifiSvg";

const MasterCard = () => {
  return (
    <div className="mt-2 font-semibold w-324 sm:w-525 xl:w-96 h-56 sm:h-72 xl:h-60 pt-2 rounded-sm bg-gradient-to-tr from-cardRed via-mixed to-cardPurple text-white">
      <p className=" pt-3 pb-2 sm:pt-4 sm:pb-3 xl:pt-3 xl:pb-2 pl-8 text-xs sm:text-sm ">
        CARD NUMBER
      </p>
      <p className="pl-8 text-sm sm:text-base">
        4 3 2 4 &nbsp; 5 4 3 3 &nbsp; 9 3 8 2&nbsp; 1 0 3 0
      </p>
      <div className="flex items-center pl-3">
        <div className="w-5 h-4  rotate-90 mt-5 sm:mt-8 xl:mt-6">
          <WifiSvg />
        </div>
        <div className="relative  w-30 h-30 mb-4 ml-1">
          <div className="w-11 h-10 rounded-full bg-orange-300 absolute top-0 mt-0.5"></div>
          <div className="absolute top-0 w-11">
            {/* Hello how are you */}
            <ChipSvg />
          </div>
        </div>
      </div>

      <p className="pt-6 pl-8 text-xs sm:text-sm">EXPIRATION DATE</p>
      <p className=" pt-2 pb-1 sm:py-3  xl:pt-2 xl:pb-1 pl-8 text-sm sm:text-base">
        0 3 / 2 4
      </p>
      <div className="flex  items-center h-10 justify-between pr-6 pl-8 pb-4">
        <p className="">John Doe</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          width="70"
          id="svg895"
          version="1.1"
          viewBox="-96 -98.908 832 593.448"
        >
          <defs id="defs879" style={{ fill: "#f79e1b" }}></defs>
          <path
            id="rect887"
            display="inline"
            fill="#ff5f00"
            stroke-width="5.494"
            d="M224.833 42.298h190.416v311.005H224.833z"
          />
          <path
            id="path889"
            d="M244.446 197.828a197.448 197.448 0 0175.54-155.475 197.777 197.777 0 100 311.004 197.448 197.448 0 01-75.54-155.53z"
            fill="#eb001b"
            stroke-width="5.494"
          />
          <path
            id="path891"
            d="M621.101 320.394v-6.372h2.747v-1.319h-6.537v1.319h2.582v6.373zm12.691 0v-7.69h-1.978l-2.307 5.493-2.308-5.494h-1.977v7.691h1.428v-5.823l2.143 5h1.483l2.143-5v5.823z"
            class="e"
            fill="#f79e1b"
            stroke-width="5.494"
          />
          <path
            id="path893"
            d="M640 197.828a197.777 197.777 0 01-320.015 155.474 197.777 197.777 0 000-311.004A197.777 197.777 0 01640 197.773z"
            class="e"
            fill="#f79e1b"
            stroke-width="5.494"
          />
        </svg>
      </div>
    </div>
  );
};

export default MasterCard;

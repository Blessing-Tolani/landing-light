import DiscoverSvg from "../../../public/logos/DiscoverSvg";
import VisaSvg from "../../../public/logos/VisaSvg";

const PaymentHeader = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row w-full justify-between">
        <h2 className="font-semibold text-base md:text-xl">
          Payment Infomation
        </h2>
        <div className="flex items-center mt-4 sm:mt-0">
          <div className="flex w-40 justify-start">
            <div className=" bg-blue-900 w-10 h-8 flex items-center ">
              <VisaSvg />
            </div>
            <div className="flex bg-gray-200 items-center h-8 px-1 ml-7">
              <DiscoverSvg />
            </div>
          </div>
          <div className="flex  w-40  justify-evenly">
            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
            <div className="">
              <img
                src="/logos/Paypal.png"
                alt="Paypal logo"
                className=" w-20 h-6 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 sm:pt-2 pb-5">
        <p className="text-gray-300">Choose your method of payment</p>
      </div>
    </div>
  );
};

export default PaymentHeader;

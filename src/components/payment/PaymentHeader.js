import DiscoverSvg from "../../../public/logos/DiscoverSvg";
import VisaSvg from "../../../public/logos/VisaSvg";

const PaymentHeader = () => {
  return (
    <div>
      <div className="flex w-full justify-between bg-yellow-900">
        <h2 className="font-semibold text-xl">Payment Infomation</h2>
        <div className="flex items-center">
          <div className="flex w-44 bg-green-900 justify-start">
            <div className=" bg-blue-900 w-12 h-10 text-center ">
              <VisaSvg />
            </div>
            <div className="flex bg-gray-200 items-center h-10 px-1 ml-7">
              <DiscoverSvg />
            </div>
          </div>
          <div className="flex bg-red-800 w-60 justify-evenly">
            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
            <div className="">
              <img
                src="/logos/Paypal.png"
                alt="Paypal logo"
                className=" w-24 h-6 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 pb-5">
        <p className="text-gray-300">Choose your method of payment</p>
      </div>
    </div>
  );
};

export default PaymentHeader;

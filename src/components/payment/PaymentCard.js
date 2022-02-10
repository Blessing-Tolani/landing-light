import MasterCard from "./MasterCard";

const PaymentCard = () => {
  return (
    <div className="flex justify-between">
      <MasterCard />

      <div>
        <form className="">
          <div className="flex flex-col sm:flex-row ">
            <div className="">
              <label htmlFor="card_number" className="text-sm ">
                Credit card number
              </label>
              <br />
              <input
                name="card_number"
                type="number"
                placeholder="4324 &nbsp; 5433 &nbsp;9382 &nbsp;1030"
                className="text-sm placeholder:text-black bg-inputBg  focus:shadow-sm p-1 pl-5 border border-inputBorder rounded w-80 h-10  mt-2"
              />
            </div>
            <div className=" sm:ml-5">
              <label htmlFor="expiration_date" className="text-sm ">
                Expiration date
              </label>
              <br />
              <input
                name="expiration_date"
                placeholder="03/24"
                type="text"
                className="h-10 placeholder:text-black bg-inputBg text-sm  focus:shadow-sm p-1 pl-5 border border-inputBorder rounded w-80  mt-2"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="pt-3">
              <label htmlFor="security_code" className="text-sm ">
                Security code
              </label>
              <br />
              <input
                name="security_code"
                type="number"
                placeholder="420"
                className="h-10 text-sm placeholder:text-black bg-inputBg focus:shadow-sm p-1 pl-5 border border-inputBorder rounded w-80 mt-2"
              />
            </div>

            <div className="pt-3 sm:ml-5">
              <label htmlFor="postal_code" className=" text-sm ">
                Postal Code
              </label>
              <br />
              <input
                type="number"
                placeholder="10119"
                className="h-10 bg-inputBg placeholder:text-black text-sm focus:shadow-sm p-1 pl-5 border border-inputBorder rounded w-80 mt-2"
                name="postal_code"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="save_card"
              className=" block relative pl-5 mb-3 cursor-pointer text-sm select-none"
            >
              Use this card for next time purchase
              <input
                type="radio"
                checked
                name="save_card"
                className="absolute cursor-pointer opacity-0"
              />
              <span className="checkmark absolute mt-0.5 top-0 left-0 h-4 w-4 bg-buttonColor rounded-full"></span>
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className=" hover:bg-blue-400 bg-buttonColor flex justify-center font-semibold text-sm text-white py-3.5 w-657 rounded"
            >
              Add card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentCard;

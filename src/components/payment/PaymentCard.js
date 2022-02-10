import MasterCard from "./MasterCard";

const PaymentCard = () => {
  return (
    <div className="flex">
      <MasterCard />

      <div>
        <form className="bg-red-700">
          <div className="flex flex-col sm:flex-row ">
            <div className="">
              <label htmlFor="card_number" className="text-xs ">
                Credit card number
              </label>
              <br />
              <input
                name="card_number"
                type="number"
                className="bg-inputBg  focus:shadow-sm p-1 border border-inputBorder rounded w-64 h-10 sm:w-64 mt-2"
              />
            </div>
            <div className=" sm:ml-4">
              <label htmlFor="expiration_date" className="text-xs ">
                Expiration date
              </label>
              <br />
              <input
                name="expiration_date"
                placeholder="03/24"
                type="text"
                className="h-10 bg-inputBg text-xs  focus:shadow-sm p-1 border border-inputBorder rounded w-64 sm:w-64 mt-2"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="pt-2">
              <label htmlFor="security_code" className="text-xs ">
                Security code
              </label>
              <br />
              <input
                name="security_code"
                type="number"
                placeholder="420"
                className="h-10 text-xs bg-inputBg focus:shadow-sm p-1 border border-inputBorder rounded w-64 sm:w-64 mt-2"
              />
            </div>

            <div className="pt-2 sm:ml-4">
              <label htmlFor="postal_code" className=" text-xs ">
                Postal Code
              </label>
              <br />
              <input
                type="number"
                placeholder="10119"
                className="h-10 bg-inputBg text-xs focus:shadow-sm p-1 border border-inputBorder rounded w-64 sm:w-64 mt-2"
                name="postal_code"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="save_card"
              className=" block relative pl-5 mb-3 cursor-pointer text-xs select-none"
            >
              Use this card for next time purchase
              <input
                type="radio"
                checked
                name="save_card"
                className="absolute cursor-pointer opacity-0"
              />
              <span className="checkmark absolute top-0 left-0 h-4 w-4 bg-buttonColor rounded-full"></span>
            </label>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className=" bg-buttonColor flex justify-center font-semibold text-xs text-white py-3.5 w-526 rounded"
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

const AmountToBePaid = () => {
  return (
    <div>
      <div className="font-semibold pt-6 pb-10 text-sm">
        <div className=" flex justify-between">
          <p>Subtotal</p>
          <p>&#8358;2,497.00</p>
        </div>
        <div className="flex justify-between py-3">
          <p>Estimated TAX</p>
          <p>&#8358;119.64</p>
        </div>
        <div className=" flex justify-between">
          <p>
            Promotional Code:<span className="text-gray-300"> Z4KXLM9A</span>
          </p>
          <p>&#8358;-60.00</p>
        </div>
      </div>
      <div className="border-t border-inputBorder  flex justify-between pt-6 pb-16">
        <button className=" hover:bg-blue-400 bg-buttonColor flex justify-center font-semibold  text-sm text-white py-3 w-56 rounded cursor-pointer">
          Complete Payment
        </button>
        <p className="font-extrabold">
          TOTAL: <span className="font-bold">&#8358;</span>2556.64{" "}
        </p>
      </div>
    </div>
  );
};

export default AmountToBePaid;

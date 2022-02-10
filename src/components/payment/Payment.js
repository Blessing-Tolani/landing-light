import AmountToBePaid from "./AmountToBePaid";
import PaymentCard from "./PaymentCard";
import PaymentHeader from "./PaymentHeader";

const Payment = () => {
  return (
    <div className="pr-2 pl-8 lg:pr-12 lg:pl-14 ">
      <div className="border-y border-inputBorder pt-6 pb-4">
        <PaymentHeader />
        <PaymentCard />
      </div>
      <div>
        <AmountToBePaid />
      </div>
    </div>
  );
};

export default Payment;

import PaymentCard from "./PaymentCard";
import PaymentHeader from "./PaymentHeader";

const Payment = () => {
  return (
    <div className="pr-8 pl-10">
      <PaymentHeader />
      <PaymentCard />
    </div>
  );
};

export default Payment;

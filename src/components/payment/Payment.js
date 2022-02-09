import PaymentCard from "./PaymentCard";
import PaymentHeader from "./PaymentHeader";

const Payment = () => {
  return (
    <div className="px-8">
      <PaymentHeader />
      <PaymentCard />
    </div>
  );
};

export default Payment;

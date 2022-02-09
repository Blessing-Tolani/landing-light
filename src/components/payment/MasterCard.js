const MasterCard = () => {
  return (
    <div className="w-96 h-72 bg-red-300 text-white">
      <p className="my-4">CARD NUMBER</p>
      <p>
        4 3 2 4 <span className="mx-1">5 4 3 3 </span> 9 3 8 2{" "}
        <span className="ml-1">1 0 3 0</span>
      </p>
      <p className="my-4">EXPIRATION DATE</p>
      <p>0 3 / 2 4</p>
      <p className="my-4">John Doe</p>
    </div>
  );
};

export default MasterCard;

import Header from "../../components/Header";

const Overview = () => {
  return (
    <>
      <Header header="Overview" />
      <div className="bg-pink-800 h-auto fixed top-[30%] left-[20%] w-[15rem] p-2 border-1 border-gray-50 m-1">
        <p className="text-gray-100 text-sm">
          Four girls, three days, one island escape. From July 18th to 20th,
          we’re heading to Quan Lạn—a quiet gem off Quảng Ninh’s coast—for a
          beach-filled getaway. We’ve booked a cozy stay at a local hotel,
          just steps away from the sea. The plan? Chill mornings by the waves,
          seafood feasts at local markets. With just our swimsuits, snacks, and spontaneity,
          we're ready to soak in every salty breeze and golden sunset this
          little island has to offer.
        </p>
        <p className="text-xs text-green-600 text-end">- ChatGPT</p>
      </div>
    </>
  );
};
export default Overview;

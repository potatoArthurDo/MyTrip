import Header from "../../components/Header";

const Overview = () => {
  return (
    <>
      <Header header="Overview" />
      <div className="bg-pink-800 h-auto absolute top-[30%] left-[20%] w-[15rem] p-2 border-1 border-gray-50 m-1">
        <p className="text-gray-100 text-sm">
          Four girls, three days, one island escape. From July 18th to 20th,
          we’re heading to Quan Lạn—a quiet gem off Quảng Ninh’s coast—for a
          beach-filled getaway. We’ve booked a cozy stay at a local hotel, just
          steps away from the sea. The plan? Chill mornings by the waves,
          seafood feasts at local markets. With just our swimsuits, snacks, and
          spontaneity, we're ready to soak in every salty breeze and golden
          sunset this little island has to offer.
        </p>
        <p className="text-xs text-green-600 text-end">- ChatGPT</p>
      </div>

      <div className="bg-pink-800 h-auto absolute top-[85%] left-[20%] w-[15rem] p-2 border-1 border-gray-50 m-1">
        {/* Trip Route Overview */}
        <div className="bg-pink-100 m-2 text-pink-800 p-4 shadow ">
          <h3 className="text-xl font-semibold mb-4">🗺️ Trip Route Overview</h3>
          <ul className="list-none space-y-4 text-sm md:text-base">
            {/* Departure */}
            <li>
              <p className="font-semibold text-pink-700">
                🚖 Step 1: Depart from Hanoi
              </p>
              <div className="ml-4 text-gray-700">
                <p>
                  📍 <span className="font-medium">Location:</span> Hanoi
                  Architecture University
                </p>
                <p>
                  🕛 <span className="font-medium">Time:</span> Midnight (exact
                  time TBA)
                </p>
                <p>
                  🚕 <span className="font-medium">Transport:</span> Taxi
                  (~100,000đ or more depending on driver & time)
                  <br />
                  (optional since we have other choice to go with our bike and
                  left it there - not recommended lol)
                </p>
                <p>
                  📝 <span className="font-medium">Note:</span> Make sure to
                  leave early in case of delays.
                </p>
              </div>
            </li>

            {/* Bus/Limousine */}
            <li>
              <p className="font-semibold text-pink-700">
                🚌 Step 2: Ride to Van Don
              </p>
              <div className="ml-4 text-gray-700">
                <p>
                  📍 <span className="font-medium">Destination:</span> Ao Tien
                  Harbor, Van Don, Quang Ninh
                </p>
                <p>
                  🚍 <span className="font-medium">Transport:</span>{" "}
                  Long-distance Bus / Limousine
                </p>
                <p>
                  💸 <span className="font-medium">Cost:</span>{" "}
                  ~200,000–260,000đ / person
                </p>
                <p>
                  ⏱️ <span className="font-medium">Duration:</span> Estimated
                  4–5 hours
                </p>
              </div>
            </li>

            {/* Transfer to hotel */}
            <li>
              <p className="font-semibold text-pink-700">
                🏨 Step 3: Transfer to Hotel
              </p>
              <div className="ml-4 text-gray-700">
                <p>
                  🚖 <span className="font-medium">Transport:</span> Possibly
                  taxi or hotel shuttle
                </p>
                <p>
                  📍 <span className="font-medium">Hotel:</span>{" "}
                  <span className="italic text-gray-500">To be added</span>
                </p>
                <p>
                  📝 <span className="font-medium">Note:</span> Coordinate with
                  others in case group ride is possible.
                </p>
              </div>
            </li>
            {/* Exploring the Island */}
            <li>
              <p className="font-semibold text-pink-700">
                🌴 Step 4: Exploring the Island
              </p>
              <div className="ml-4 text-gray-700">
                <p>
                  🗺️ <span className="font-medium">Activities:</span>{" "}
                  Sightseeing, beach hopping, visiting local spots, or just
                  relaxing by the sea
                </p>
                <p>
                  🛵 <span className="font-medium">Transport:</span> Renting
                  motorbikes, using local taxis, or walking
                </p>
                <p>
                  💸 <span className="font-medium">Budget:</span> Depends on
                  activities (~100,000–300,000đ+)
                </p>
                <p>
                  📝 <span className="font-medium">Note:</span> Consider group
                  plans for shared costs. Don’t forget sunscreen and water!
                </p>
              </div>
            </li>
            
            {/* Return route */}
            <li>
              <p className="font-semibold text-pink-700">
                🔁 Step 5: Return Home
              </p>
              <div className="ml-4 text-gray-700">
                <p>
                  🛣️ <span className="font-medium">Route:</span> Hotel → Ao Tien
                  Harbor → Hanoi
                </p>
                <p>
                  🚌 <span className="font-medium">Bus/Limousine:</span>{" "}
                  ~200,000–260,000đ
                </p>
                <p>
                  🚖 <span className="font-medium">Taxi to home:</span> ~50,000đ
                  or more
                </p>
                <p>
                  📝 <span className="font-medium">Note:</span> Try to leave
                  early enough to avoid traffic when returning to Hanoi.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Overview;

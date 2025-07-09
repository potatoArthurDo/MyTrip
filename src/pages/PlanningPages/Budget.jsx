import Header from "../../components/Header";
import PlanningTitle from "../../components/PlanningComponents/PlanningTitle";

const Budget = () => {
  return (
    <>
      <Header header="Budget" />
      <div className="bg-pink-100 h-auto absolute top-[30%] left-[10%] w-[18rem] border-1 border-gray-50 m-1 z-10">
        <PlanningTitle title={"3-Day Beach Trip Budget Breakdown"} />
        {/* <!-- Accommodation --> */}
        <div className="bg-white m-2 text-pink-800">
          <h3 class="text-xl font-semibold mb-2">🏨 Accommodation</h3>
          <ul class="list-none space-y-1">
            <li>
              💰 Hotel combo:{" "}
              <span class="font-medium text-gray-700">1,050,000đ / person</span>
            </li>
          </ul>
        </div>

        {/* <!-- Transportation --> */}
        <div className="bg-white m-2 text-pink-800">
          <h3 className="text-xl font-semibold mb-2">🚕 Transportation</h3>
          <ul className="list-none space-y-1">
            <li>
              🚖 Taxi to bus station (late night):{" "}
              <span className="font-medium text-gray-700">
                ~100,000đ or more
              </span>
            </li>
            <li>
              🚌 Bus / Limousine to beach:{" "}
              <span className="font-medium text-gray-700">
                ~200,000–260,000đ
              </span>
            </li>
            <li>
              🔁 Return trip (same as above):{" "}
              <span className="font-medium text-gray-700">
                ~200,000–260,000đ
              </span>
            </li>
            <li>
              🚕 Taxi from bus station (arrival back home):{" "}
              <span className="font-medium text-gray-700">
                ~50,000đ or more
              </span>
            </li>
          </ul>
        </div>

        {/* <!-- Food & Drinks --> */}
        <div className="bg-white m-2 text-pink-800">
          <h3 class="text-xl font-semibold mb-2">🍽️ Food & Drinks</h3>
          <ul class="list-none space-y-1">
            <li>
              🥢 Day 1 Lunch:{" "}
              <span class="font-medium text-gray-700">~100,000đ</span>
            </li>
            <li>
              🦞 Day 1 Dinner (Seafood):{" "}
              <span class="font-medium text-gray-700">~300,000–400,000đ</span>
            </li>
            <li>
              🥐 Day 2 Breakfast: <span class="italic text-gray-500">TBD</span>
            </li>
            <li>
              🍜 Day 2 Lunch: <span class="italic text-gray-500">TBD</span>
            </li>
            <li>
              🍲 Day 2 Dinner: <span class="italic text-gray-500">TBD</span>
            </li>
            <li>
              🍞 Day 3 Breakfast: <span class="italic text-gray-500">TBD</span>
            </li>
            <li>
              🍱 Day 3 Lunch: <span class="italic text-gray-500">TBD</span>
            </li>
          </ul>
        </div>

        {/* <!-- Extras --> */}
        <div className="bg-white m-2 text-pink-800">
          <h3 class="text-xl font-semibold mb-2">🎁 Extras & Misc</h3>
          <ul class="list-none space-y-1">
            <li>
              🛍️ Souvenirs, snacks, or drinks:{" "}
              <span class="font-medium text-gray-700">
                Variable (~200,000đ+ suggested)
              </span>
            </li>
            <li>
              💡 Emergency / Flex budget:{" "}
              <span class="font-medium text-gray-700">Optional</span>
            </li>
          </ul>
        </div>

        {/* <!-- Total Estimation --> */}
        <div className="border-t pt-4 bg-white m-2 text-pink-800">
          <h3 className="text-xl font-bold text-green-600">
            🧮 Estimated Total (Basic):
          </h3>
          <p className="text-lg font-semibold text-gray-800">
            ~2,200,000đ – 2,500,000đ+ / person (depending on transport, food,
            and extras)
          </p>
          <p className="text-sm text-gray-500">
            *Final total may vary based on your food choices, transportation
            type, and shopping habits.
          </p>
        </div>
      </div>
    </>
  );
};
export default Budget;

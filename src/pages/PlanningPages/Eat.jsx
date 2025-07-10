import Header from "../../components/Header";
import PlanningTitle from "../../components/PlanningComponents/PlanningTitle";

const Eat = () => {
  return (
    <>
      <Header header="Eat" />
      <div className="bg-pink-100 h-auto absolute top-[30%] left-[10%] lg:left-[20%] w-[18rem] border-1 border-gray-50 m-1 z-10">
        <PlanningTitle title={"18/7"} />
        <div className="min-w-full flex flex-col items-center border my-2 border-gray-300 text-pink-800 text-sm">
          <table>
            <tr>
              <th class="p-2 border">Meal</th>
              <th class="p-2 border">Food</th>
              <th class="p-2 border text-green-800 font-bold">Price</th>
            </tr>
            <tr>
              <td class="p-2 border">Beakfast</td>
              <td class="p-2 border"></td>
              <td class="p-2 border text-green-800 font-bold"></td>
            </tr>
            <tr>
              <td class="p-2 border">Lunch</td>
              <td class="p-2 border">Bún hái sản</td>
              <td class="p-2 border text-green-800 font-bold">60.000đ</td>
            </tr>
            <tr>
              <td class="p-2 border">Dinner</td>
              <td class="p-2 border">Seafood at Hotel</td>
              <td class="p-2 border text-green-800 font-bold">300.000đ</td>
            </tr>
            <tr>
              <td class="p-2 border">Others</td>
              <td class="p-2 border">Snacks and Drinks</td>
              <td class="p-2 border text-green-800 font-bold"></td>
            </tr>
          </table>
        </div>

        <PlanningTitle title={"19/7"} />
        <div className="min-w-full flex flex-col items-center border my-2 border-gray-300 text-pink-800 text-sm">
          <table>
            <tr>
              <th class="p-2 border">Meal</th>
              <th class="p-2 border">Food</th>
              <th class="p-2 border text-green-800 font-bold">Price</th>
            </tr>
            <tr>
              <td class="p-2 border">Beakfast</td>
              <td class="p-2 border"></td>
              <td class="p-2 border text-green-800 font-bold"></td>
            </tr>
            <tr>
              <td class="p-2 border">Lunch</td>
              <td class="p-2 border"></td>
              <td class="p-2 border text-green-800 font-bold"></td>
            </tr>
            <tr>
              <td class="p-2 border">Dinner</td>
              <td class="p-2 border">Seafood at Hotel</td>
              <td class="p-2 border text-green-800 font-bold">180.000đ</td>
            </tr>
            <tr>
              <td class="p-2 border">Others</td>
              <td class="p-2 border">Snacks and Drinks</td>
              <td class="p-2 border text-green-800 font-bold"></td>
            </tr>
          </table>
        </div>

        <PlanningTitle title={"20/7"} />
        <div className="min-w-full flex flex-col items-center border my-2 border-gray-300 text-pink-800 text-sm">
          <table>
            <tr>
              <th class="p-2 border">Meal</th>
              <th class="p-2 border">Food</th>
              <th class="p-2 border text-green-800 font-bold">Price</th>
            </tr>
            <tr>
              <td class="p-2 border">Beakfast</td>
              <td class="p-2 border"></td>
              <td class="p-2 border text-green-800 font-bold"></td>
            </tr>
            <tr>
              <td class="p-2 border">Lunch</td>
              <td class="p-2 border"></td>
              <td class="p-2 border text-green-800 font-bold"></td>
            </tr>
            <tr>
              <td class="p-2 border">Others</td>
              <td class="p-2 border">Snacks and Drinks</td>
              <td class="p-2 border text-green-800 font-bold"></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
export default Eat;

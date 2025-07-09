import Header from "../../components/Header";
import PlanningTitle from "../../components/PlanningComponents/PlanningTitle";

const Packing = () => {
  return (
    <>
      <Header header="Packing" />
      <div className="bg-pink-100 h-auto absolute top-[30%] left-[10%] lg:left-[20%] w-[18rem] border-1 border-gray-50 m-1 z-10">
        {/* essentials */}
        <PlanningTitle title={"Essentials"} />
        <div className="bg-white m-2.5">
          <ul class="list-none list-inside space-y-1 text-pink-800 font-bold m-1 p-1">
            <li>👕 Clothes (5 outfits + (bring more if needed))</li>
            <li>🩱 Swimsuits (2–3)</li>
            <li>🧦 Underwear & socks</li>
            <li>🏖️ Beach towel or mat</li>
            <li>📱 Phone + charger</li>
            <li>💳 Wallet (ID, cash, cards)</li>
            <li>🧼 Laundry bag / plastic bag</li>
          </ul>
        </div>

        {/* toiletries */}
        <PlanningTitle title={"Toiletries"} />
        <div className="bg-white m-2.5">
          <ul class="list-none list-inside space-y-1 text-pink-800 font-bold m-1 p-1">
            <li>🪥 Toothbrush + toothpaste</li>
            <li>🧼 Face wash / moisturizer</li>
            <li>🧴 Shampoo + conditioner</li>
            <li>🚿 Body wash / soap</li>
            <li>🧂 Deodorant</li>
            <li>🌞 Sunscreen (SPF 50+)</li>
            <li>🪮 Hairbrush or comb</li>
            <li>🧻 Tissues or wet wipes</li>
            
          </ul>
        </div>

        {/* Optional */}
        <PlanningTitle title={"Optional but still quite needed?"} />
        <div className="bg-white m-2.5">
          <ul class="list-none list-inside space-y-1 text-pink-800 font-bold m-1 p-1">
            <li>😴 Sleepwear</li>
            <li>👟 Extra shoes and sandals</li>
            <li>🕶️ Sunglasses</li>
            <li>🔌 Other Electrical Devices</li>
            <li>🔋 PowerBank</li>
          </ul>
        </div>

        {/* Gurls  */}
        <PlanningTitle title={"I'm just a gurl 💅"} />
        <div className="bg-white m-2.5">
          <ul class="list-none list-inside space-y-1 text-pink-800 font-bold m-1 p-1">
            <li>🪞 Mirror</li>
            <li>💋 Lipstick / Lip balm</li>
            <li>🧴 Moisturizer / Primer</li>
            <li>🪮 Comb / Hair styling products</li>
            <li>🧼 Makeup remover</li>
            <li>🧽 Foundation / Concealer</li>
            <li>🎨 Eyeshadow / Eyeliner</li>
            <li>🖌️ Brushes / Applicators</li>
            <li>🌬️ Setting spray / powder</li>
            <li>🧽 Cotton pads or swabs</li>
          </ul>
        </div>

        {/* Female Hygiene  */}
        <PlanningTitle title={"Female Hygiene 🩸"} />
        <div className="bg-white m-2.5">
          <ul class="list-none list-inside space-y-1 text-pink-800 font-bold m-1 p-1">
            <li>🩲 Extra underwear</li>
            <li>🩹 Pads / Tampons / Menstrual cup</li>
            <li>🧴 Intimate wash</li>
            <li>🧻 Pocket tissues or wipes</li>
            <li>🗑️ Disposal bags</li>
            <li>🧘‍♀️ Pain relief (meds / heat patch)</li>
            <li>🛏️ Dark towel or blanket (just in case)</li>
            <li>🧼 Hand sanitizer</li>
          </ul>
        </div>

        {/* Snack and Hydration  */}
        <PlanningTitle title={"Snack and Hydration"} />
        <div className="bg-white m-2.5">
          <ul class="list-none list-inside space-y-1 text-pink-800 font-bold m-1 p-1">
            <li>💧 Water </li>
            <li>🥤 Electrolyte drink / Sports drink</li>
            <li>🍪 Snacks</li>
            <li>🍬 Candy / Gum (for ear popping or cravings)</li>
            <li>🧃 Juice box or canned drinks</li>
          </ul>
        </div>

        {/* Just in case */}
        <PlanningTitle title={"Just in case"} />
        <div className="bg-white m-2.5">
          <ul class="list-none list-inside space-y-1 text-pink-800 font-bold m-1 p-1">
            <li>🩹 Mini first aid kit</li>
            <li>🦟 Bug spray</li>
            <li>⛱️ Umbrella</li>
            <li>🧥 Light jacket </li>
            <li>🧩 Tarot</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Packing;

import Header from "../../components/Header";
import PlanningTitle from "../../components/PlanningComponents/PlanningTitle";
import Showcase from "../../components/PlanningComponents/Showcase";

const Destinations = () => {
  const imageImports = import.meta.glob("../../assets/images/*.{jpg,jpeg}", {
    eager: true,
  });

  const getImage = (filename) => {
    const path = `../../assets/images/${filename}`;
    return imageImports[path]?.default || "";
  };

  const beaches = [
    {
      id: 1,
      name: "Minh Châu",
      image: getImage("minhchau.jpg"),
    },
    {
      id: 2,
      name: "Quan Lạn",
      image: getImage("quanlan.jpg"),
    },
    {
      id: 3,
      name: "Tiên",
      image: getImage("tien.jpg"),
    },
    {
      id: 4,
      name: "Bãi Rùa",
      image: getImage("bairua.jpg"),
    },
    {
      id: 5,
      name: "Sơn Hào",
      image: getImage("sonhao.jpg"),
    },
    {
      id: 6,
      name: "Bãi Ngọc",
      image: getImage("baingoc.jpg"),
    },
    {
      id: 7,
      name: "Robinson",
      image: getImage("robinson.jpg"),
    },
  ];

 const others = [
  {
    id: 1,
    name: "Eo Gió",
    image: getImage("eogio.jpg"),
  },
  {
    id: 2,
    name: "Núi Bò Xi",
    image: getImage("nuiboxi.jpg"),
  },
  {
    id: 3,
    name: "Đồi vô cực",
    image: getImage("doivocuc.jpeg"),
  },
  {
    id: 4,
    name: "Bãi đá tình yêu",
    image: getImage("baidatinhyeu.jpg"),
  },
  {
    id: 6,
    name: "Dòng sông đôi bờ cát trắng",
    image: getImage("dongsongbocattrang.jpg"),
  },
  {
    id: 7,
    name: "Cung đường ven biển",
    image: getImage("cungduongvenbien.jpg"),
  },
];


  return (
    <>
      <Header header="Destinations" />
      <div className="bg-pink-100 h-auto absolute top-[30%] left-[10%] lg:left-[20%] w-[18rem] border-1 border-gray-50 m-1 z-10">
        <PlanningTitle title="Overview" />
        <img
          src={getImage("overview.jpg")}
          alt="overview"
          className="p-1 py-2"
        />

        <PlanningTitle title="Beaches" />
        <Showcase items={beaches} />

        <PlanningTitle title="Others" />
        <Showcase items = {others} />
      </div>
    </>
  );
};
export default Destinations;

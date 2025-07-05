import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PlanningChoice = ({ choice }) => {

  const navigate = useNavigate();
  const [name, setName] = useState("")
  
  useEffect(() => {
    HandleChoiceName();
  }, [choice])
  const HandleChoiceName = () => {
     switch (choice) {
      case "Overview":
        setName("Overview");
        break;
      case "Destination":
        setName("🌍");
        break;
      case "Budget":
        setName("💰");
        break;
      case "Eat":
        setName("🍜");
        break;
      case "Packing":
        setName("🧳");
        break;
      default:
        setName("");
     }
  };
  return (
    <div className="bg-pink-200 w-[7rem] h-[3rem] flex flex-col items-center justify-center rounded-md border-white border-1"
    onClick={() => navigate(`/planning/${choice.toLowerCase()}`)}>
      <h1 className="text-pink-700">{name}</h1>
    </div>
  );
};

export default PlanningChoice;

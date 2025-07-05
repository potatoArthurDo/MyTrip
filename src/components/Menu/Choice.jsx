import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const Choice = ({choice}) => {
    const navigate = useNavigate();
    const [choiceSelected, setChoiceSelected] = useState("");

    const handlaeChoiceClick = (choice) => {
        setChoiceSelected(choice);
    }
  return (
    <div className="bg-pink-700 w-[15rem] h-[3rem] rounded-md flex items-center justify-center cursor-pointer border-white border-1"
    onClick={() => navigate(`/${choice.toLowerCase()}`)}>
      <h1 className="text-white text-center text-xl ">{choice}</h1>
    </div>
  );
};
export default Choice;

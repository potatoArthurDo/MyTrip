import { useNavigate } from "react-router-dom";

const ShowcaseItem = ({ image, title}) => {
    const navigate = useNavigate();
   
    return (
        <div onClick={() => navigate(`/planning/beach/${encodeURIComponent(title)}`)} className="flex flex-col items-center justify-center rounded-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <img src={image} alt="" className="" />
            <h5 className="text-center text-pink-800 ">{title}</h5>
            
        </div>
    )
}
export default ShowcaseItem;
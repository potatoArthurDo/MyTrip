import PlanningChoice from "./PlanningChoice"


const PlanningMenu = () => {
    return (
        <div className="grid grid-cols-2 fixed left-[20%] top-[30%] gap-4 ">
            <PlanningChoice choice = "Overview" />
            <PlanningChoice choice = "Destination" />
            <PlanningChoice choice = "Budget"/>
            <PlanningChoice choice = "Eat"/>
            <PlanningChoice choice = "Packing"/>
        </div>
    )
}

export default PlanningMenu
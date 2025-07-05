import Choice from "./Choice";

const Menu = () => {
    return (
        <div className="fixed left-[20%] bottom-[20%]">
            <div className="flex flex-col gap-4">
                <Choice choice = "Planning" />
                <Choice  choice = "Memories"/>
            </div>
            
        </div>
    )
}
export default Menu;
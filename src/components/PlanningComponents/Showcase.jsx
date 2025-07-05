import ShowcaseItem from "./ShowcaseItem";

const Showcase = ({items}) => {
    return (
        <div className="w-full grid grid-cols-2 gap-1 py-2 px-1">
            {items && items.map((item) => (
                <ShowcaseItem key={item.id}  image={item.image} title={item.name} />
            ))}
            </div>
    )
}
export default Showcase;
import React from "react";

const Header = ({header}) => {
    return (
        <div className="fixed left-[20%] top-[20%]">
            <h1 className="text-pink-300 text-3xl">{header}</h1>
        </div>
    )
}
export default Header
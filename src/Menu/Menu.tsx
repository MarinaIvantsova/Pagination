import clsx from "clsx";
import { useState } from "react";
import { FaHome } from "react-icons/fa";

function Menu() {
  const [small, setSmall] = useState(false);
  const CollapseExpand = small ? ">" : "<";
  return (
    <div className="flex text-white">
      <div
        className={clsx(
          "w-[40px]",
          {
            "lg:w-[200px]": !small,
          },
          "h-screen",
          "p-2",
          "bg-red-600"
        )}
      >
        <button className="hidden lg:block" onClick={() => setSmall(!small)} type="button">
        {CollapseExpand}
        </button>
        <div className="flex">
        <FaHome size={20} className="mr-1"/> 
        <div className="hidden lg:block"> 
          {!small && 'Home'} 
        </div>
        </div>
      </div>
      <div className="flex-grow p-2 bg-blue-600">Content</div>
    </div>
  );
}

export default Menu;

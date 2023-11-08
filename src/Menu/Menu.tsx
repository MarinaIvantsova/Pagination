import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

function Menu() {
  const State = {
    COLLAPSED: 'collapsed',
    EXPANDED: 'expanded'
  }
  
  const [menuState, setMenuState] = useState(State.EXPANDED);
  const [expandCollapse, setExpandCollapse] = useState(true);
  const [textHome, setHome] = useState(true);
  const CollapseExpand = menuState === State.COLLAPSED ? ">" : "<";
  const widerScreenWidth = window.matchMedia("(min-width: 1024px)");

  const handleResize = () => {
    if (widerScreenWidth.matches) {
      setExpandCollapse(true);
      setMenuState(State.EXPANDED); 
      setHome(true)
    } else {
      setExpandCollapse(false);
      setHome(false)
    }
  };

  useEffect(() => {
    handleResize();
    widerScreenWidth.addEventListener("change", handleResize);

    return () => {
      widerScreenWidth.removeEventListener("change", handleResize);
    };
  }, []); 

  return (
    <div className="flex text-white">
      <div
        className={clsx("w-[40px] h-screen p-2 bg-red-600")}
        style={widerScreenWidth.matches && menuState === State.EXPANDED ? { width: "200px" } : {}}
      >
        <button className={expandCollapse ? "block" : "hidden"} onClick={() => setMenuState(prev => prev === State.COLLAPSED ? State.EXPANDED: State.COLLAPSED)} type="button">
          {CollapseExpand}
        </button>
        <div className="flex">
          <FaHome size={20} className="mr-1" />
          <div className={textHome ? "block" : 'hidden'}>
            {menuState === State.EXPANDED && 'Home'}
          </div>
        </div>
      </div>
      <div className="flex-grow p-2 bg-blue-600">Content</div>
    </div>
  );
}

export default Menu;

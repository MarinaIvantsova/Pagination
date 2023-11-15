import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import PostTable from "../PostTable";
import { muiTheme } from "../MUI/MuiTheme";

function Menu() {
  const State = {
    COLLAPSED: 'collapsed',
    EXPANDED: 'expanded'
  }
  
  const [menuState, setMenuState] = useState(State.EXPANDED);
  const [expandCollapse, setExpandCollapse] = useState(true);
  const CollapseExpand = menuState === State.COLLAPSED ? ">" : "<";
  const widerScreenWidth = window.matchMedia(muiTheme.breakpoints.up('sm').replace('@media ', ''));
  const handleResize = () => {
    const { matches } = widerScreenWidth;
  
    setExpandCollapse(matches);
    setMenuState(matches ? State.EXPANDED : State.COLLAPSED);
  };

  useEffect(() => {
    handleResize();
    widerScreenWidth.addEventListener("change", handleResize);

    return () => {
      widerScreenWidth.removeEventListener("change", handleResize);
    };
  }, []); 

  return (
    <div>
    <div className="flex text-white">
      <div
        className={clsx("w-[40px] h-screen p-2 bg-red-600")}
        style={menuState === State.EXPANDED ? { width: "200px" } : {}}
      >
        <button className={expandCollapse ? "block" : "hidden"} onClick={() => setMenuState(prev => prev === State.COLLAPSED ? State.EXPANDED: State.COLLAPSED)} type="button">
          {CollapseExpand}
        </button>
        <div className="flex">
          <FaHome size={20} className="mr-1" />
          <div>
            {menuState === State.EXPANDED && 'Home'}
          </div>
        </div>
      </div>
      <div className="flex-grow p-2 bg-blue-600">
       <PostTable />
      </div>
    </div>
    </div>
  );
}

export default Menu;

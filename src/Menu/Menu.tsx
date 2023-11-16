import clsx from "clsx";
import { useEffect, useState } from "react";
import PostTable from "../PostTable";
import { muiTheme } from "../MUI/MuiTheme";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import HomeIcon from '@mui/icons-material/Home';

function Menu() {

  const State = {
    COLLAPSED: 'collapsed',
    EXPANDED: 'expanded'
  }
  
  const [menuState, setMenuState] = useState(State.EXPANDED);
  const [expandCollapse, setExpandCollapse] = useState(true);
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
    <Box className="flex text-black">
      <Box
        sx={{ bgcolor: 'primary.main' }}
        className={clsx("w-[50px] p-2")}
        style={menuState === State.EXPANDED ? { width: "200px" } : {}}
      >
        <Box className={expandCollapse ? 'block' : 'hidden'}>
        <IconButton   onClick={() => setMenuState(prev => prev === State.COLLAPSED ? State.EXPANDED: State.COLLAPSED)} type="button">
          {menuState === State.COLLAPSED ? (<ArrowForwardIosIcon/>) : ( <ArrowBackIosIcon/>) }
        </IconButton >
        </Box>
        <Box className="flex">
          <HomeIcon className="ml-1"/>
          <Box className="pt-[1px]">
            {menuState === State.EXPANDED && 'Home'}
          </Box>
        </Box>
      </Box>
      <Box className="flex-grow p-2">
       <PostTable />
      </Box>
    </Box>
  );
}

export default Menu;

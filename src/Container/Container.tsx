import { useEffect, useState } from "react";
import PostTable from "../PostTable";
import Box from "@mui/material/Box";
import usePostsData from "../PostTable/usePostsData";
import { Post } from "../Types/dataType";
import Popup from "../Popup";
import Menu from "../Menu";

function Container() {

  const [data, setData] = useState<Post[]>([]); 
  const [open, setOpen] = useState(false);
  const postData = usePostsData();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  useEffect(() => setData(postData), [postData]);


  return (
    <Box className="flex text-black">
      <Menu />
      <Box className="flex-grow p-2">
       <PostTable myData={data} handleOpen={handleOpen}/>
      </Box>
        <Popup posts={usePostsData()} setMyData ={setData} open={open} handleClose={handleClose}/>
    </Box>
  );
}

export default Container;

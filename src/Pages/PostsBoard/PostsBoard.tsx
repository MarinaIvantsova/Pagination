import { useEffect, useState } from 'react'
import PostTable from '../../components/PostTable'
import Box from '@mui/material/Box'
import usePostsData from '../../components/PostTable/usePostsData'
import { Post } from '../../constants/Types/dataType'
import Popup from '../../components/Popup'
import Menu from '../../components/Menu'

function PostsBoard() {
  const [data, setData] = useState<Post[]>([])
  const [open, setOpen] = useState(false)

  const toggleOpenCLose = () => setOpen((prev) => !prev)

  const { posts, fetchPosts }: { posts: Post[]; fetchPosts: () => void } = usePostsData()

  useEffect(() => setData(posts), [posts])

  return (
    <Box className="flex text-black">
      <Menu />
      <Box className="flex-grow p-2">
        <PostTable myData={data} handleOpen={toggleOpenCLose} />
      </Box>
      <Popup posts={posts} setMyData={setData} open={open} handleClose={toggleOpenCLose} />
    </Box>
  )
}

export default PostsBoard

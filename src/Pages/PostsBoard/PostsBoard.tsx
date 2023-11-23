import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import usePostsData from '../../components/Table/usePostsData'
import { Post } from '../../constants/Types/dataType'
import Popup from '../../components/Popup'
import Menu from '../../components/Menu'
import Form from '../../components/Popup/PopupForm'
import Table from '../../components/Table'

function PostsBoard() {
  const [data, setData] = useState<Post[]>([])
  const [open, setOpen] = useState(false)

  const toggleOpenClose = () => setOpen((prev) => !prev)

  const { posts, fetchPosts }: { posts: Post[]; fetchPosts: () => void } = usePostsData()

  useEffect(() => setData(posts), [posts])

  return (
    <Box className="flex text-black">
      <Menu />
      <Box className="flex-grow p-2">
        <Table data={data} handleOpen={toggleOpenClose} />
      </Box>
      <Popup open={open} handleClose={toggleOpenClose}>
        <div>
          <Form posts={posts} setData={setData} handleClose={toggleOpenClose} />
        </div>
      </Popup>
    </Box>
  )
}

export default PostsBoard

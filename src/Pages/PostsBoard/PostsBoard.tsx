import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import usePostsData from '../../components/Table/usePostsData'
import { Post } from '../../constants/Types/dataType'
import Popup from '../../components/Popup'
import Menu from '../../components/Menu'
import PostTable from '../../components/Table/PostTable'
import { Button } from '@mui/material'
import PostForm from '../../Form/PostForm'

function PostsBoard() {
  const [data, setData] = useState<Post[]>([])
  const [open, setOpen] = useState(false)

  const toggleOpenClose = () => setOpen((prev) => !prev)

  const { posts, fetchPosts }: { posts: Post[]; fetchPosts: () => void } = usePostsData()

  useEffect(() => setData(posts), [posts])

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
        <Button color="secondary" onClick={toggleOpenClose} variant="contained">
          Create Post
        </Button>
      </Box>
      <Box className="flex text-black">
        <Menu />
        <Box className="flex-grow p-2">
          <PostTable data={data} />
        </Box>
        <Popup open={open} handleClose={toggleOpenClose}>
          <PostForm setData={setData} handleClose={toggleOpenClose} />
        </Popup>
      </Box>
    </Box>
  )
}

export default PostsBoard

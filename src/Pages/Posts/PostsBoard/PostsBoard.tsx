import { useEffect, useState } from 'react'
import usePostsData from './usePostsData'
import { Post } from '../../../constants/Types/dataType'
import Popup from '../../../components/Popup'
import Menu from '../../../components/Menu'
import PostTable from '../../../views/Posts/PostTable/PostTable'
import { Button, Box } from '@mui/material'
import PostForm from '../../../views/Posts/PostForm/PostForm'

function PostsBoard() {
  const [data, setData] = useState<Post[]>([])
  const [open, setOpen] = useState(false)
  let userId = 1
  let id = 2

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
          <PostForm setData={setData} handleClose={toggleOpenClose} userId={userId} id={id} />
        </Popup>
      </Box>
    </Box>
  )
}

export default PostsBoard

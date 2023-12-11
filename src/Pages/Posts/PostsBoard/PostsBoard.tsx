import { useEffect, useState } from 'react'
import { Post, url } from '../../../constants/Types/dataType'
import Popup from '../../../components/Popup'
import Menu from '../../../components/Menu'
import PostTable from '../../../views/Posts/PostTable/PostTable'
import { Button, Box } from '@mui/material'
import PostForm from '../../../views/Posts/PostForm/PostForm'
import useFetchData from './useFetchData'

function PostsBoard() {
  const [data, setData] = useState<Post[]>([])
  const [open, setOpen] = useState(false)
  const userId = 1

  const toggleOpenClose = () => setOpen((prev) => !prev)

  const { isPending, error, data: posts } = useFetchData(url)

  useEffect(() => setData(posts), [posts])

  const submitHandler = (newPost: Post) => {
    setData((prev) => [...prev, newPost])
  }

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
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          <PostTable data={data} />
        </Box>
        <Popup open={open} handleClose={toggleOpenClose}>
          <PostForm submitHandler={submitHandler} handleClose={toggleOpenClose} userId={userId} />
        </Popup>
      </Box>
    </Box>
  )
}

export default PostsBoard

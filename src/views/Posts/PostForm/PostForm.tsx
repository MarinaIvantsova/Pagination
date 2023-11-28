import React, { useState } from 'react'
import { Input, Box, Button, Typography } from '@mui/material'
import Textarea from '@mui/joy/Textarea'
import { FormProps } from '../../../constants/Types/dataType'
import PopupTitle from '../../../components/Popup/PopupTitle'

const { v4: uuidv4 } = require('uuid')

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const PostForm: React.FC<FormProps> = ({ submitHandler, handleClose, userId }) => {
  const [postState, setPostState] = useState({
    title: '',
    body: '',
    userId,
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target

    setPostState({
      ...postState,
      [name]: value,
    })
  }
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()

    const newPost = {
      ...postState,
      id: uuidv4(),
    }

    submitHandler(newPost)

    handleClose()
  }
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box sx={style}>
          <PopupTitle title="Create a new post" />
          <Typography sx={{ mb: 2 }}>
            Title:
            <Input
              type="text"
              name="title"
              value={postState.title}
              onChange={handleChange}
              style={{ marginLeft: '8px' }}
            />
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Content:
            <Textarea
              name="body"
              value={postState.body}
              onChange={handleChange}
              style={{
                marginTop: '15px',
                width: '100%',
                minHeight: '100px',
              }}
            />
          </Typography>

          <Box textAlign="center">
            <Button variant="contained" type="submit" value="submit">
              Send
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default PostForm

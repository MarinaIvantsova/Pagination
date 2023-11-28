import React, { useEffect, useState } from 'react'
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

let initIdState: number

const PostForm: React.FC<FormProps> = ({ setData, handleClose, userId }) => {
  useEffect(() => {
    initIdState = 1
  }, [])

  const [state, setState] = useState({
    title: '',
    body: '',
    userId,
    id: initIdState,
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target
    setState({
      ...state,
      [name]: value,
    })
  }
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    setData((prev) => [...prev, state])
    setState({
      title: '',
      body: '',
      userId,
      id: uuidv4(),
    })
    handleClose()
  }
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box sx={style}>
          <PopupTitle title="Create a new post" />
          <Typography sx={{ mb: 2 }}>
            Title:
            <Input type="text" name="title" value={state.title} onChange={handleChange} style={{ marginLeft: '8px' }} />
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Content:
            <Textarea
              name="body"
              value={state.body}
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

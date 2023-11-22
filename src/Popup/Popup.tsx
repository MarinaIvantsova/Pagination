import React, { useState } from 'react'
import { FormProps } from '../Types/dataType'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Input, Modal } from '@mui/material'
import Textarea from '@mui/joy/Textarea'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const Popup: React.FC<FormProps> = ({
    posts,
    setMyData,
    open,
    handleClose,
}) => {
    const [state, setState] = useState({
        title: '',
        body: '',
        userId: 1,
        id: posts.length + 1,
    })
    const handleChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = evt.target.value
        setState({
            ...state,
            [evt.target.name]: value,
        })
    }
    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault()
        setMyData((prev) => [...prev, state])
        setState({
            title: '',
            body: '',
            userId: 1,
            id: posts.length + 2,
        })
        handleClose()
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
        >
            <form onSubmit={handleSubmit}>
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ mb: 2 }}
                    >
                        Title
                        <Input
                            type="text"
                            name="title"
                            value={state.title}
                            onChange={handleChange}
                            style={{ marginLeft: '8px' }}
                        />
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        Content
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
                        <Button
                            variant="contained"
                            type="submit"
                            value="submit"
                        >
                            Send
                        </Button>
                    </Box>
                </Box>
            </form>
        </Modal>
    )
}

export default Popup

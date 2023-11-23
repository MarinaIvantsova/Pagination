import { Typography } from '@mui/material'
import React from 'react'

function PopupTitle({ title }: { title: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>
    </div>
  )
}

export default PopupTitle

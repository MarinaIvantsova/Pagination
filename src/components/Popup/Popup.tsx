import React from 'react'

import { Modal } from '@mui/material'

interface PopupProps {
  open: boolean
  children: React.ReactElement
  handleClose: () => void
}

const Popup: React.FC<PopupProps> = ({ open, children, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      {children}
    </Modal>
  )
}

export default Popup

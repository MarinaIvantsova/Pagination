import React from 'react'
import { PopupProps } from '../../constants/Types/dataType'

import { Modal } from '@mui/material'

const Popup: React.FC<PopupProps> = ({ open, children, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
      {children}
    </Modal>
  )
}

export default Popup

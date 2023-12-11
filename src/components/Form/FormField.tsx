import { Typography } from '@mui/material'
import React from 'react'

function FormField({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Typography sx={{ mb: 2 }}>
      {title}
      {children}
    </Typography>
  )
}

export default FormField

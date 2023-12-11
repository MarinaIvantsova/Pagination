import { Box, Typography } from '@mui/material'

function PopupTitle({ title }: { title: string }) {
  return (
    <Box style={{ textAlign: 'center' }}>
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>
    </Box>
  )
}

export default PopupTitle

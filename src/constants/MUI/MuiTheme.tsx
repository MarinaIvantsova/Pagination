import { createTheme } from '@mui/material/styles'

export const muiTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 1024,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})

import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
    return (
        <Box className='max-tablet:h-[40dvh]' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60dvh' }}>
            <CircularProgress disableShrink />
        </Box>
    )
}

export default Loader
import { NightlightRound } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [mode, setMode] = useState(false)
    const themeHandler = () => {
        setMode(prev => !prev)
        document.documentElement.classList.toggle('dark')
    }

    return (
        <Stack className='bg-white dark:bg-dark-dark-blue shadow-shadow w-full'>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} py={'20px'} className='container'>
                <Link to={'/'}>
                    <Typography variant='h5' fontWeight={'bold'} className='dark:text-white max-phone:text-[1.1rem]' >
                        Where in the world?
                    </Typography>
                </Link>
                <Button onClick={themeHandler} startIcon={<NightlightRound className='-rotate-[40deg]' />} className='text-light-very-dark-blue dark:text-white normal-case font-bold bg-transparent'>
                    {mode ? 'Light Mode' : 'Dark Mode'}
                </Button>
            </Stack>
        </Stack>
    )
}

export default Navbar
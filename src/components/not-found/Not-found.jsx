import { Button, Stack } from '@mui/material'
import SearchOffIcon from '@mui/icons-material/SearchOff';

const NotFound = () => {
    return (
        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} height={'60dvh'} className='max-tablet:h-[40dvh]'>
            <SearchOffIcon className='text-[5rem] max-phone:text-[3.5rem]' />
            <Button className='text-[20px] max-phone:text-base text-light-very-dark-blue dark:text-white normal-case'>No exact matches found</Button>
        </Stack>
    )
}

export default NotFound
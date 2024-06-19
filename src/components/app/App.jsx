import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import { Box, Stack, ThemeProvider } from '@mui/material';
import Navbar from '../navbar/Navbar';
import { Main, CountryDetail, Search, SearchBar, FilterByRegion } from '../';
import theme from '../../theme';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}


const App = () => {
    const isCountryDetailPage = useMatch('/details/:fifa');

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {!isCountryDetailPage && (
                <Stack className='container my-9 max-phone:flex-col max-phone:items-start gap-9' direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <SearchBar />
                    <FilterByRegion />
                </Stack>
            )}
            <Box className='container dark:text-white text-light-very-dark-blue'>
                <Routes>
                    <Route path='/region/:name' element={<Main />} />
                    <Route path='/search/:name' element={<Search />} />
                    <Route path='/details/:fifa' element={<CountryDetail />} />
                    <Route path='/' element={<Main />} />
                </Routes>
            </Box>
        </ThemeProvider>
    );
};

export default App;

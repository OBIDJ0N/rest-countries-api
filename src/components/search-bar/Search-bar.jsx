import React, { useState, useCallback } from 'react';
import { IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const onChangeHandler = useCallback(
        _.debounce((newValue) => {
            if (newValue.trim()) {
                navigate(`/search/${newValue}`);
            } else {
                navigate(`/`);
            }
        }, 300),
        []
    );

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChangeHandler(newValue);
    };

    return (
        <Paper className='w-full max-w-[30rem] max-laptop:max-w-96 max-tablet:max-w-[17rem] max-phone:max-w-full py-2 px-7 shadow-shadow flex items-center dark:bg-dark-dark-blue'>
            <IconButton type='submit' className='dark:text-white text-light-dark-gray'>
                <SearchIcon />
            </IconButton>
            <input
                type="text"
                className='border-none outline-none ml-3 bg-transparent dark:text-white dark:placeholder:text-white placeholder:text-light-dark-gray text-light-dark-gray'
                placeholder='Search for a country...'
                value={value}
                onChange={handleChange}
            />
        </Paper>
    );
};

export default SearchBar;

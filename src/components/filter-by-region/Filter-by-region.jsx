import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { btnArray } from '../../constants/index';
import { useNavigate } from 'react-router-dom';

const FilterByRegion = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem] = useState('');

    const navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
        handleClose();
        navigate(`/region/${item}`)
    };


    return (
        <div>
            <Button endIcon={<KeyboardArrowDownIcon />} aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick} className='bg-white dark:bg-dark-dark-blue py-[15.75px] px-6 shadow-shadow flex items-center justify-between text-light-very-dark-blue w-60 max-laptop:w-48 max-tablet:w-44 max-phone:w-60 dark:text-white normal-case' >
                {selectedItem || 'Filter by Region'}
            </Button>
            <Menu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className='mt-1'
                MenuListProps={{
                    'aria-labelledby': 'customized-button',
                }}
                PaperProps={{
                    className: 'w-60 max-laptop:w-48 max-tablet:w-44 max-phone:w-60 dark:bg-dark-dark-blue dark:text-white',
                }}
            >
                {btnArray.map((item, idx) => (
                    <MenuItem key={idx} onClick={() => handleSelect(item.name)}>{item.name}</MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default FilterByRegion;

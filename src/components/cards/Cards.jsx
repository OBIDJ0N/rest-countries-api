import React from 'react';
import { Card, CardContent, CardMedia, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Cards = ({ country }) => {
    return (
        <div className="grid grid-cols-4 max-laptop:grid-cols-3 max-desktop:gap-12 max-tablet:grid-cols-2 max-phone:grid-cols-1 gap-[4.75rem]">
            {country.map((item, idx) => (
                <Link to={`/details/${item?.cca3}`} key={idx}>
                    <Card className='bg-white shadow-shadow h-[22.5rem] dark:bg-dark-dark-blue dark:text-white'>
                        <CardMedia
                            component="img"
                            className='h-40'
                            image={item?.flags?.svg}
                            alt="Flag"
                        />
                        <CardContent className='pt-7 px-6 pb-10'>
                            <Typography variant='' fontWeight={'900'} className='text-[18px]'>
                                {item?.name?.common}
                            </Typography>
                            <List className='p-0'>
                                <ListItem className='p-0'>
                                    <ListItemText>Population: <span className='opacity-75'>{item?.population}</span></ListItemText>
                                </ListItem>
                                <ListItem className='p-0'>
                                    <ListItemText>Region: <span className='opacity-75'>{item?.region}</span></ListItemText>
                                </ListItem>
                                <ListItem className='p-0'>
                                    <ListItemText>Capital: <span className='opacity-75'>{item?.capital}</span></ListItemText>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
}

export default Cards;

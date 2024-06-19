import { Box, Button, Stack, Typography, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useNavigate } from 'react-router-dom';
import { ApiService } from '../../service/api.service';

const CountryDetailCard = ({ country }) => {
  const [borderData, setBorderData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const borders = country.map(item => item.borders)[0];
        if (borders && borders.length > 0) {
          const borderDataPromises = borders.map(border =>
            ApiService.fetching(`alpha/${border}`)
          );
          const allBorderData = await Promise.all(borderDataPromises);
          setBorderData(allBorderData);
        } else {
          console.log('No borders found for the country.');
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [country]);

  const handleBorderClick = (border) => {
    navigate(`/details/${border.cca3}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Button
        startIcon={<KeyboardBackspaceIcon className='w-[25px] h-[25px]' />}
        className='my-[4.75rem] bg-white dark:bg-dark-dark-blue dark:text-white shadow-shadow py-2 px-9 text-light-very-dark-blue normal-case text-base'
        onClick={handleBackClick}
      >
        Back
      </Button>
      {country.map((item, idx) => (
        <Stack key={idx} direction={'row'} alignItems={'center'} justifyContent={'flex-start'} className='gap-[7.5rem] max-laptop:gap-12 max-tablet:flex-col'>
          <Stack width={'50%'} className='max-tablet:w-full shadow-shadow max-laptop:h-[22rem] max-phone:h-auto'>
            <img src={item.flags.png} alt="flag" className='h-[400px] max-laptop:h-[22rem] max-tablet:h-full' />
          </Stack>
          <Stack width={'50%'} className='max-tablet:w-full'>
            <Typography variant='h4' fontWeight={'bold'}>
              {item.name.common}
            </Typography>
            <Stack direction={'row'} justifyContent={'space-between'} gap={'10px'} className='max-phone:flex-col'>
              <List className='mt-4'>
                <ListItem className='p-0'>
                  <Typography className='text-base font-bold'>Native name: <span className='font-normal opacity-85'>{`${Object.values(item.name.nativeName)[0].common}`}</span></Typography>
                </ListItem>
                <ListItem className='p-0 py-2'>
                  <Typography className='text-base font-bold'>Population: <span className='font-normal opacity-85'>{item.population}</span></Typography>
                </ListItem>
                <ListItem className='p-0'>
                  <Typography className='text-base font-bold'>Region: <span className='font-normal opacity-85'>{item.region}</span></Typography>
                </ListItem>
                <ListItem className='p-0 py-2'>
                  <Typography className='text-base font-bold'>Sub Region: <span className='font-normal opacity-85'>{item.subregion}</span></Typography>
                </ListItem>
                <ListItem className='p-0'>
                  <Typography className='text-base font-bold'>Capital: <span className='font-normal opacity-85'>{item.capital}</span></Typography>
                </ListItem>
              </List>
              <List className='mt-4'>
                <ListItem className='p-0'>
                  <Typography className='text-base font-bold'>Top Level Domain: <span className='font-normal opacity-85'>{item.tld[0]}</span></Typography>
                </ListItem>
                <ListItem className='p-0 py-2'>
                  <Typography className='text-base font-bold'>Currencies: <span className='font-normal opacity-85'>{Object.values(item.currencies)[0].name}</span></Typography>
                </ListItem>
                <ListItem className='p-0'>
                  <Typography className='text-base font-bold'>Languages: <span className='font-normal opacity-85'>{Object.values(item.languages).join(', ')}</span></Typography>
                </ListItem>
              </List>
            </Stack>
            <Stack direction={'row'} className='mt-[4.75rem] max-phone:flex-col max-phone:gap-4'>
              <Typography className='mr-4 text-base font-bold mt-[6px]'>Border countries:</Typography>
              <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
                {borderData.map(item => (
                  item.map((border, idx) => (
                    <Button
                      key={idx}
                      className='px-5 border-none text-light-very-dark-blue dark:text-white bg-white shadow-shadow dark:bg-dark-dark-blue opacity-85 normal-case'
                      onClick={() => handleBorderClick(border)}
                    >
                      {border?.name?.common}
                    </Button>
                  ))
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
};

export default CountryDetailCard;

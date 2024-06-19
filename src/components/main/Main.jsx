import React, { useEffect, useMemo, useState } from 'react';
import { Cards, Loader } from '../';
import { Stack } from '@mui/material';
import { ApiService } from '../../service/api.service';
import { useParams } from 'react-router-dom';

const Main = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true)
  const { name } = useParams();

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const data = await ApiService.fetching('all');
        if (name) {
          const filteredData = data.filter(c => c.region === name);
          setCountry(filteredData);
        } else {
          setCountry(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };
    getData();
  }, [name]);
  const memoizedCountry = useMemo(() => country, [country]);

  return (
    <Stack>
      {loading ? (
        <Loader />
      ) : (<Cards country={memoizedCountry} />)}
    </Stack>
  );
};

export default Main;

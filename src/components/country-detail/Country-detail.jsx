import React, { useEffect, useState } from 'react';
import { ApiService } from '../../service/api.service';
import { useParams } from 'react-router-dom';
import CountryDetailCard from '../country-detail-card/Country-detail-card';

const CountryDetail = () => {
  const [country, setCountry] = useState(null); 
  const { fifa } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`alpha/${fifa}`);
        if (data) {
          setCountry(data); 
        }
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [fifa]);

  return (
    country && <CountryDetailCard country={country} />
  );
};

export default CountryDetail;

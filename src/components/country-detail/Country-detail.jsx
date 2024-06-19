import React, { useEffect, useState } from 'react';
import { ApiService } from '../../service/api.service';
import { useParams } from 'react-router-dom';
import CountryDetailCard from '../country-detail-card/Country-detail-card';

const CountryDetail = () => {
  const [country, setCountry] = useState(null); 
  const { cca3 } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`alpha/${cca3}`);
        if (data) {
          setCountry(data); 
        }
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [cca3]);

  return (
    country && <CountryDetailCard country={country} />
  );
};

export default CountryDetail;

import React, { useEffect, useState } from 'react';
import { ApiService } from '../../service/api.service';
import { useParams } from 'react-router-dom';
import CountryDetailCard from '../country-detail-card/Country-detail-card';
import Loader from '../loader/Loader';

const CountryDetail = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true)
  const { cca3 } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`alpha/${cca3}`);
        if (data) {
          setCountry(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };
    getData();
  }, [cca3]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (country && <CountryDetailCard country={country} />)}
    </>
  );
};

export default CountryDetail;

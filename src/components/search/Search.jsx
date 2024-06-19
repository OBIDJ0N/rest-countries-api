import React, { useEffect, useState } from 'react';
import { Cards, Loader, NotFound } from '../';
import { ApiService } from '../../service/api.service';
import { useParams } from 'react-router-dom';

const Search = () => {
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        if (name) {
          const data = await ApiService.fetching(`name/${name}`);
          setFetchData(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };
    getData();
  }, [name]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        fetchData && fetchData.length > 0 ? (
          <Cards country={fetchData} />
        ) : (
          <NotFound />
        )
      )}
    </>
  );
}

export default Search;

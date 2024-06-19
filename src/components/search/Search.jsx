import React, { useEffect, useState } from 'react'
import { Cards } from '../'
import { ApiService } from '../../service/api.service'
import { useParams } from 'react-router-dom'

const Search = () => {
  const [fetchData, setFetchData] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        if (name) {
          const data = await ApiService.fetching(`name/${name}`);
          setFetchData(data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [name])

  return (
    <>
      <Cards country={fetchData} />
    </>
  )
}

export default Search
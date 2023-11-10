'use client'

import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import React, { useEffect, useState } from 'react'

const Page = () => {

  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  //pemanggilan API Public
  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
    const data = await response.json();
    setTopAnime(data);
  }

  useEffect(() => {
    fetchData();
  },[page]);

  // console.log(topAnime);

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`}/>
      <AnimeList api={topAnime}/>
      <Pagination 
      page={page} 
      lastPage={topAnime.pagination?.last_visible_page}
      setPage={setPage}/>
    </>
  )
}

export default Page
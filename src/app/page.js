'use client'

import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header";

const Home = async () => {
  //pemanggilan API Public
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await response.json();

    return (
      <>
        {/* Anime Terpopuler */}
        <section>
          <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/popular"/>
          <AnimeList api={topAnime}/>
        </section>

      </>
    )
}

export default Home
import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header";

const Page = async ({params}) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  //pemanggilan API Public
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

    return (
      <>
        {/* Anime Pencarian */}
        <section>
          <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
          <AnimeList api={searchAnime}/>
        </section>

      </>
    )
}

export default Page
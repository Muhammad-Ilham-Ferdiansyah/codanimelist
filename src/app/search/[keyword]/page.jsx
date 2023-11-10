import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header";

const Page = async ({params}) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  //pemanggilan API Public
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);
  const searchAnime = await response.json();

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
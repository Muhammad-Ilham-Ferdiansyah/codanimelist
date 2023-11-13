import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 pl-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {api.data?.map((anime) => {
            return (
                <div className="bg-slate-900 rounded-xl p-4 hover:bg-slate-800 transition-all" key={anime.mal_id}>
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-white transition-all">
                        <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full rounded-xl h-auto max-h-64 object-cover"/>
                        <h3 className="font-bold md:text-xl text-md py-3">{anime.title}</h3>
                    </Link>
                </div>
                )
            })}
        </div>
    )
}

export default AnimeList
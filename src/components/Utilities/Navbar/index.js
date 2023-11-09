
import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-blue-950">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">CodAnimeList</Link>
                <div className="flex items-center rounded-md px-4 duration-300 cursor-pointer bg-blue-900 text-white">
                <input placeholder="cari anime..." className="bg-transparent focus:outline-none"/>
                </div>
            </div>
        </header>
    ) 
}

export default Navbar

import Link from "next/link"
import InputSearch from "@/components/Utilities/Navbar/InputSearch"

const Navbar = () => {
    return (
        <header className="bg-gradient-to-r from-slate-800 via-slate-950 to-blue-950 border-b border-slate-500">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">CodAnimeList</Link>
                <InputSearch/>
            </div>
        </header>
    ) 
}

export default Navbar
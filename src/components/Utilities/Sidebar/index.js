import Link from "next/link"

const Sidebar = () => {
    return (
        <div className="bg-blue-950">
                <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer">
                    <p className="bg-blue-950 rounded-md font-bold text-xl p-4">CAL</p>
                </span>
             <div className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[250px] overflow-y-auto text-center bg-blue-950">
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">
                        <Link href="/" className="font-bold text-white text-2xl">CodAnimeList</Link>
                    </div>
                    <hr className="my-2 text-gray-600"></hr>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-blue-900 text-white">
                    <input type="text" className="text-[15px] ml-4 w-full bg-transparent focus:outline-none" placeholder="Cari anime..."/>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-900 text-white">
                    <Link href="/" className="font-bold text-white text-md">Beranda</Link>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-900 text-white">
                    <Link href="/" className="font-bold text-white text-md">Rekomendasi</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
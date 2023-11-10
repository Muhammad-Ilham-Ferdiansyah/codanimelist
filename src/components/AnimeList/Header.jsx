import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between p-4">
            <h1 className="text-2xl font-bold relative text-white m-2">{title}</h1>
            {linkHref && linkTitle ? 
                <Link href={linkHref} className="text-md p-2 rounded-lg bg-blue-800 text-white duration-300 cursor-pointer hover:bg-blue-900 hover:text-white m-2">
                    {linkTitle}
                </Link>
                : null
            }
        </div>
    )
}

export default Header
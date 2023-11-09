import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between p-4">
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-teal-500 relative inline-block">
          <h1 className="text-2xl font-bold relative text-white">{title}</h1>
        </span>
        <Link href={linkHref} className="text-md p-2 rounded-lg bg-blue-800 text-white duration-300 cursor-pointer hover:bg-blue-900 hover:text-white">
            {linkTitle}
        </Link>
        </div>
    )
}

export default Header
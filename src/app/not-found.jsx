'use client'

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <div>
                    <FileSearch size={32} className="text-white"/>
                </div>
                <div>
                    <h3 className="text-white text-2xl font-bold">NOT FOUND</h3>
                </div>
                <div>
                    <Link href="/" className="text-white underline">Kembali</Link>
                </div>
            </div>
        </div>
    )
}

export default Page
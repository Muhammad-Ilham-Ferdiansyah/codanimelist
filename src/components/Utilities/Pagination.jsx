const Pagination = ({ page, lastPage, setPage }) => {

    const scrollUp = () => {
        scrollTo({
            behavior: "smooth",
            top:0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1);
        scrollUp();
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1);
        scrollUp();
    }
    
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-white text-2xl">
            { page <= 1 ? null :
            <button onClick={handlePrevPage} className="transition-all hover:font-bold">Prev</button>
            }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null :
            <button onClick={handleNextPage} className="transition-all hover:font-bold">Next</button>
            }
        </div>
    )
}

export default Pagination
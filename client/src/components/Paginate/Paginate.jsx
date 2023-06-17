import { useState } from "react"
import { useSelector } from "react-redux"


const Paginate = ({ totalPages, page, handleChangePage }) => {

    let harcodeo = page + 1
    return (
        <div>

            <button disabled={page === totalPages} onClick={() => { handleChangePage(page + 1) }}>increase</button>
            <button >firstPage</button>
            <p>page{harcodeo}of{totalPages}</p>
            <button onClick={() =>{ handleChangePage(page - 1) }}>decrement</button>
            <button>lastPage</button>
        </div >
    )
}

export default Paginate
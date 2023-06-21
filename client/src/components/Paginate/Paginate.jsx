import { useState } from "react"
import { useSelector } from "react-redux"
import styles from "./Paginate.module.css"


const Paginate = ({ totalPages, page, handleChangePage }) => {

    

    return (
        <div className={styles.party}>

            <button onClick={() => { handleChangePage(1) } }>First</button>
            <button onClick={() => { handleChangePage(page - 1) } } disabled={page===1}>{"<="}</button>
            <span>page {page} of {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => { handleChangePage(page + 1) }}>{"=>"}</button>
            <button onClick={() => { handleChangePage(totalPages) }}>Last</button>
        </div >
    )
}

export default Paginate
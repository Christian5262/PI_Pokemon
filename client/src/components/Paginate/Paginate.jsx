import { useState } from "react"
import { useSelector } from "react-redux"
import styles from "./Paginate.module.css"


const Paginate = ({ totalPages, page, handleChangePage }) => {



    return (
        <div className={styles.party}>

            <button onClick={() => { handleChangePage(1) }}>Primero</button>
            <button onClick={() => { handleChangePage(page - 1) }} disabled={page === 1}>{"<="}</button>
            <span>Pagina {page} de {totalPages + 1}</span>
            <button disabled={page === totalPages + 1} onClick={() => { handleChangePage(page + 1) }}>{"=>"}</button>
            <button onClick={() => { handleChangePage(totalPages + 1) }}>Ultimo</button>
        </div >
    )
}

export default Paginate
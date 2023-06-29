import { useEffect } from "react";
import styles from "./Loader.module.css"


export default function Loader() {

    useEffect(() => {
        return
    })
    return (<div className={styles.h1}>
        <h1>Cargando...</h1>
        <div className={styles.loader}>
        </div>
    </div>)
};
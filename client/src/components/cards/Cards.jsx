import { useSelector } from "react-redux";
import Card from "../card/Card";
import styles from "./Cards.module.css"
import { useLocation } from "react-router-dom";

const Cards = ({ pokemonInPage, page }) => {


    const pagina = useSelector(state => state.currentPage)

    let num = 0
    for(let i = 0; i < pokemonInPage.length; i++){
        num = pokemonInPage[i].find(l => l.id===Number(pagina))
    }
    


    return (
        <div>
            {
                pokemonInPage[page]?.map(poke => {
                    return (
                        <div key={poke.id} className={styles.contains}>
                            <Card
                                key={poke.id}
                                id={poke.id}
                                name={poke?.name}
                                imagen={poke?.imagen}
                                type={poke?.type}
                                page={page}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cards;
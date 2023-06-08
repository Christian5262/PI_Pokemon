import Card from "../card/Card";
import styles from "./Cards.module.css"

const Cards = () => {

    const pokemon = [
        {
            id: 1,
            name: "Bulbasur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            health: 86
        },
        {
            id: 2,
            name: "Charmander",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            health: 90
        },
        {
            id: 3,
            name: "Squirtle",
            image : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
            health: 76
        }
        , {
            id: 4,
            name: "Pikachu",
            image : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
            health: 96
        }
    ]

    return (
        <div>
            {
                pokemon.map(poke => {
                    return (
                        <div className={styles.contains}>
                            <Card
                                key={poke.id}
                                id={poke.id}
                                name={poke.name}
                                image={poke.image}
                                health={poke.health}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cards;
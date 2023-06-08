const regexName = /[a - zA - Z] + [a - zA - Z] * /



export const validate = (input, error, setError) => {
    if (!regexName.test(input.name)) {
        setError({ ...error, name: "Por favor, ingrese un nombre correcto" })
    }
    else setError({ ...error, name: "" })
    if (input.health > 100 || input.health < 0) {
        setError({ ...error, health: "Ingresa la salud del pokemon de 0 a 100" })
    }
    else setError({ ...error, health: "" })
    if (input.height > 100 || input.height < 0) {
        setError({ ...error, height: "Ingresa la salud del pokemon de 0 a 100" })
    }
    else setError({ ...error, height: "" })
}



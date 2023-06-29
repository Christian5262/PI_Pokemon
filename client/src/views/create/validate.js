const regexName = /^[a-zA-Z_ ]*$/
const regexImage = /(https?:\/\/.*\.(?:png|jpg|svg))/i


const validate = (input) => {
    let error = {}
    if (!regexName.test(input.name)) {
        error.name = "Por favor, ingrese un nombre correcto"
    }
    if (input.name.length >= 10) {
        error.name = "Por favor, ingrese un nombre entre 0 a 10 caracteres"
    }
    if (!regexImage.test(input.image) && input.image.length > 0) {
        error.image = "Solo imagenes de formato jpg, gif , png y svg"
    }
    if (+input.attack > 3000 || input.attack < 0 || input.attack[0]==="0") {
        error.attack = "Los numeros de puntos de ataque es de 1 a 3000"
    }
    if (+input.defense > 3000 || input.defense < 0 || input.defense[0]==="0") {
        error.defense = "Los numeros de puntos de defensa es de 1 a 3000"
    }
    if (+input.speed > 1500 || input.speed < 0 || input.speed[0]==="0") {
        error.speed = "Los numeros de puntos de velocidad es de 1 a 1500"
    }
    if (+input.height > 75 || input.height < 0 || input.height[0]==="0") {
        error.height = "Altura valida de 1 a 75m"
    }
    if (+input.weight > 1000 || input.weight < 0 || input.weight[0]==="0") {
        error.weight = "Peso valido de 1 a 1000 kg"
    }

    return error
}

export default validate


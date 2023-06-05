const { Router } = require('express');
const routerPokemon = require('./pokemonRouter');
const routerType = require('./typesRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/", routerPokemon)
router.use("/", routerType)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

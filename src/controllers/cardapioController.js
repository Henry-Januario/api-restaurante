const cardapioController = (app) => {

    app.get('/cardapio', async (req, res) => {
        try {
            const todosCardapio = await CardapioModel.pegaCardapio()
            res.json({
                "cardapio": todosCardapio,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
   
}


app.get('/cardapio/codigo/:codigo', async (req, res) => {
    const codigo = req.params.codigo
    try {
        const codigo = await CodigoModel.pegaUmCardapioCodigo(codigo)
        res.json({
            "cardapio": codigo,
            "erro": false
        })
    } catch (error) {
        res.json({
            "msg": error.message,
            "erro": true
        })
    }
})

app.post('/cardapio', async (req, res) => {
    const body = req.body
    try {
        const novoPrato = criaPrato(body.prato, body.codigo)
        await CardapioModel.inserePrato(novoPrato)
        res.json({
            "msg": "Prato inserido com sucesso",
            "Prato": novoPrato,
            "erro": false
        })

    } catch (error) {
        res.json({
            "msg": error.message,
            "erro": true
        })
    }
})








export default cardapioController
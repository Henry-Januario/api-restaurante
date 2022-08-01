import ClientesModel from "../models/ClientesModel.js";
import Validacoes from "../services/ClientesValidacoes.js";

const clientesController = (app) => {

    app.get('/clientes', async (req, res) => {
        try {
            const todosClientes = await ClientesModel.pegaCliente()
            res.status(201).json({
                "clientes": todosClientes,
                "erro": false
            })
        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.get('/clientes/contato/:contato', async (req, res) => {
        const contato = req.params.contato
        try {
            const cliente = await Validacoes._validaGet(contato, ClientesModel.pegaUmClienteContato)
            res.status(201).json({
                "cliente": cliente,
                "msg": `o contato ${contato} esta no banco de dados`,
                "erro": false
            })
        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "error": true
            })
        }
    })

    app.post('/clientes', async (req, res) => {
        const cliente = req.body
        try {
            const insereCliente = await Validacoes._validaPostClientes(cliente, ClientesModel.insereCliente)
            res.status(201).json({
                "msg": "Cliente inserido com sucesso",
                "nome": insereCliente,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/clientes/contato/:contato', async (req, res) => {
        const cliente = req.params.contato
        try {
            const deletaCliente = await Validacoes._ValidaDeleta(cliente, ClientesModel.deletaCliente)

            res.status(200).json({
                "msg": "Cliente deletado com sucesso",
                "cliente" : deletaCliente,
                "erro": false
            })
        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/clientes/id/:id', async (req, res) => {
        const cliente = req.params.id
        const body = req.body
        try {
            const novoBody = await Validacoes._ValidaReqBody(body)
            const atualizaCliente = await Validacoes._ValidaAtualiza(cliente, ClientesModel.atualizaCliente, novoBody )
            res.status(200).json({
                "msg": "Cliente atualizado com sucesso",
                "nome": atualizaCliente,
                "erro": false
            })

        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}


export default clientesController
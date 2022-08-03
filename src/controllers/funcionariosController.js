import funcionariosModel from "../models/funcionariosModel.js";
import FuncionariosValidacoes from "../services/FuncionariosValidacoes.js";

const funcionariosController = (app) => {

    app.get('/funcionarios', async (req, res) => {
        try {
            const todosFuncionarios = await funcionariosModel.pegaFuncionario()
            res.status(201).json({
                "funcionarios": todosFuncionarios,
                "erro": false
            })
        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.get('/funcionarios/contato/:contato', async (req, res) => {
        const contato = req.params.contato
        try {
            const funcionarios = await FuncionariosValidacoes._validaGetFuncionarios(contato, funcionariosModel.pegaUmFuncionarioContato)
            res.status(201).json({
                "funcionarios": funcionarios,
                "msg": `o funcionário ${contato} esta no banco de dados`,
                "erro": false
            })
        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.post('/funcionarios', async (req, res) => {
        const body = req.body
        try {
            const insereFuncionario = await FuncionariosValidacoes._validaPostFuncionarios(body, funcionariosModel.insereFuncionario)
            res.status(201).json({
                "msg": "Funcionário inserido com sucesso",
                "funcionarios": insereFuncionario,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/funcionarios/contato/:contato', async (req, res) => {
        const contato = req.params.contato
        try {
            const deletaFuncionarios = await FuncionariosValidacoes._ValidaDeletaFuncionarios(contato, funcionariosModel.deletaFuncionario)

            res.status(200).json({
                "msg": "Funcionário deletado com sucesso",
                "Funcionários": deletaFuncionarios,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/funcionarios/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novoBody = await FuncionariosValidacoes._ValidaReqBodyFuncionarios(body)
            const funcionariosValidados = await FuncionariosValidacoes._AtualizaFuncionarios(id, funcionariosModel.atualizaFuncionario, novoBody)
            res.status(200).json({
                "msg": "Funcionários atualizado com sucesso",
                "funcionariosValidados": funcionariosValidados,
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


export default funcionariosController


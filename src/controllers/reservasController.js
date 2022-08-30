import reservasModel from "../models/reservasModels.js";
import ReservasValidacoes from "../services/ReservasValidacoes.js";

const reservasController = (app) => {

    app.get('/reservas', async (req, res) => {
        try {
            const reservas = await reservasModel.verReservas()
            res.status(200).json(
                {
                    "reservas": reservas,
                    "erro": false
                }
            )
        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }

    })

    app.get('/reservas/idReserva/:idReserva', async (req, res) => {
        const idReserva = req.params.idReserva

        try {
            const reserva = await ReservasValidacoes._validaGetReservas(idReserva, reservasModel.verUmaReserva)
            res.status(200).json(
                {
                    "reserva": reserva,
                    "msg": `A reserva ${idReserva} foi agendada`,
                    "erro": false
                }
            )
        } catch (error) {
            res.status(400).json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    })

    app.get('/reservas/email/:email', async (req, res) => {
        const email = req.params.email

        try {
            const reserva = await ReservasValidacoes._validaGetReservas(email, reservasModel.verUmaReservaEmail)
            res.status(200).json(
                {
                    "reserva": reserva,
                    "msg": `A reserva ${email} foi agendada`,
                    "erro": false
                }
            )
        } catch (error) {
            res.status(400).json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    })

    app.get('/reservas/data/:data', async (req, res) => {
        const data = req.params.data

        try {
            const reserva = await ReservasValidacoes._validaGetReservas(data, reservasModel.verUmaReservaData)
            res.status(200).json(
                {
                    "reserva": reserva,
                    "erro": false
                }
            )
        } catch (error) {
            res.status(400).json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    })


    app.post('/reservas', async (req, res) => {
        const body = req.body
        try {
            const validaBody = await ReservasValidacoes._ValidaReqBodyReservas(body)
            const agendarReserva = await reservasModel.agendarReserva(validaBody)

            res.status(201).json(
                {
                    "msg": "Reserva agendada com sucesso!",
                    "reserva": agendarReserva,
                    "erro": false
                })
        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }

    })

    app.delete('/reservas/idReserva/:idReserva', async (req, res) => {
        const idReserva = req.params.idReserva
        try {
            const deletaReserva = await ReservasValidacoes._ValidaDeletaReserva(idReserva, reservasModel.deletaReserva)

            res.status(200).json({
                "msg": "Reserva deletada com sucesso",
                "Reserva": deletaReserva,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/reservas/email/:email', async (req, res) => {
        const email = req.params.email
        try {
            const deletaReservaEmail = await ReservasValidacoes._ValidaDeletaReserva(email, reservasModel.deletaReservaEmail)

            res.status(200).json({
                "msg": "Reserva deletada com sucesso",
                "Reserva": deletaReservaEmail,
                "erro": false
            })

        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.put('/reservas/idReserva/:idReserva', async (req, res) => {
        const idReserva = req.params.idReserva
        const body = req.body
        try {
            const novoBody = await ReservasValidacoes._ValidaReqBodyReservas(body)
            const validarReserva = await ReservasValidacoes._validaGetReservas(idReserva, reservasModel.verUmaReserva)
            const atualizaReserva = await ReservasValidacoes._ReservaAtualiza(validarReserva.idReserva, reservasModel.atualizaReserva, novoBody)
            res.status(202).json({
                "msg": "Reserva atualizada com sucesso",
                "nome": atualizaReserva,
                "erro": false
            })
    
        } catch (error) {
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}

export default reservasController
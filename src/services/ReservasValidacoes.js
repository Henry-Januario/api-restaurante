import reservasDAO from "../DAO/reservasDAO.js" 


const ReservasValidacoes = {
    _validaGetReservas : async (idReserva, callback)=>{
        const reservas = await callback(idReserva)
        console.log(reservas);
        if(reservas.length == 0){
            throw new Error (`Aviso: ${idReserva} não encontrado!`)
        }else{
            return reservas
        }
    },

    _ReservaAtualiza : async (idReserva, callback, reservaValidada)=>{
        const reservas = await callback(idReserva, reservaValidada)
            if(reservas === undefined){
                throw new Error("Não conseguimos atualizar essa informação no banco de dados")
            }else{
                return reservas
            }
        
    },

    _ValidaReqBodyReservas : async (body)=>{
        if(body.nomeCliente && body.data && body.hora && body.lugares && body.email){
            return body
        }else{
            throw new Error ("Não foi possivel atualizar a reserva!")
        }
    },

    _ValidaDeletaReserva : async (idReserva, callback)=>{
        const reservas = await reservasDAO.verUmaReserva(idReserva)
        if(reservas == undefined){
            throw new Error(`Aviso: ${idReserva} não existente`)
        }else{
            await callback(idReserva)
            return reservas
        }
    }
}

export default ReservasValidacoes
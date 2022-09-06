import db from "../database/db-sqlite.js"

const reservasDAO = {
    verReservas : () =>{
        const VER_RESERVAS = `
        SELECT * FROM RESERVAS
        `
        return new Promise((resolve, reject)=>{
            db.all(VER_RESERVAS, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

     verUmaReserva : (idReserva) =>{
        const VER_UMA_RESERVA = `
        SELECT * FROM RESERVAS
        WHERE idReserva = ?`

        return new Promise((resolve, reject)=>{
            db.get(VER_UMA_RESERVA, idReserva, (error, row)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(row)
                }

            })
        })
    },

    verUmaReservaEmail : (email) =>{
        const VER_UMA_RESERVA = `
        SELECT * FROM RESERVAS
        WHERE email = ?`

        return new Promise((resolve, reject)=>{
            db.all(VER_UMA_RESERVA, email, (error, row)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(row)
                }

            })
        })
    },


    verUmaReservaData : (data) =>{
        const VER_UMA_RESERVA = `
        SELECT * FROM RESERVAS
        WHERE data = ?`

        return new Promise((resolve, reject)=>{
            db.all(VER_UMA_RESERVA, data, (error, row)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(row)
                }

            })
        })
    },


    agendarReserva : (reserva) =>{
        const AGENDA_RESERVA = `
        INSERT INTO RESERVAS (nomeCliente, data, hora, lugares, email)
        VALUES (?,?,?,?,?)
        `
        return new Promise((resolve, reject)=>{
            db.run(AGENDA_RESERVA,
                reserva.nomeCliente, reserva.data, reserva.hora, reserva.lugares, reserva.email,
                (error)=>{
                    if(error){
                        reject(error)
                    }else
                        resolve({
                            success:"Reserva agendada."
                        })
                }
            )
        })
    },


    deletaReserva : (idReserva) =>{
        const DELETA_RESERVA = `
        DELETE FROM RESERVAS
        WHERE idReserva = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(DELETA_RESERVA, idReserva, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    deletaReservaEmail : (email) =>{
        const DELETA_RESERVA = `
        DELETE FROM RESERVAS
        WHERE email = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(DELETA_RESERVA, email, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizaReserva : (idReserva, reservaAtualizada)=>{
        const ATUALIZA_RESERVA = `
        UPDATE RESERVAS
        SET nomeCliente = ?, data = ?, hora = ?, lugares = ?, email = ?
        WHERE idReserva = ?
        `
        return new Promise((resolve, reject)=>{
            db.run(ATUALIZA_RESERVA,
                reservaAtualizada.nomeCliente, reservaAtualizada.data, reservaAtualizada.hora, reservaAtualizada.lugares, reservaAtualizada.email,
                idReserva,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(reservaAtualizada)
                }
            )
        })  
    }

}



export default reservasDAO

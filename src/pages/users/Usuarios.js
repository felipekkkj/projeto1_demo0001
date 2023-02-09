import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export function Usuarios() {

    const [usuarios, setUsuarios] = useState([])

    const listarUsuarios = () => {
        // Requisição a API Rest
        
        axios.get("http://localhost:3333/usuarios")
            .then(Response => {
                setUsuarios(Response.data);
            })
    }

    useEffect(() => {
        listarUsuarios()
    }, [])


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm text-center">
                    <h1>Usuários</h1>
                </div>

                <div className="col-12 text-center">
                    <Link className="btn btn-primary" to="/users/new">
                        Novo usuário
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>E-mail</td>
                            </tr>
                        </thead>

                        <tbody>
                            {usuarios.map(item => (
                                <tr key={item.id}>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    )
}
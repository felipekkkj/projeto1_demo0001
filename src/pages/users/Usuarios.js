import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import styledComponents from "styled-components";

export function Usuarios() {

    const navigate = useNavigate()

    const [usuarios, setUsuarios] = useState([])

    const [userDelete, setUserDelete] = useState({})

    const listarUsuarios = () => {
        // Requisição a API Rest
        
        axios.get("http://localhost:3333/usuarios")
            .then(Response => {
                setUsuarios(Response.data);
            })
            .catch(erro => {
                toast.error("Nenhum usuário encontrado!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
            })
    }

    const excluirUsuario = useCallback(async() => {
        await axios.delete(`http://localhost:3333/usuarios/${userDelete.id}`)
        .then(() => {
            toast.success("Usuário deletado com sucesso!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
            listarUsuarios()
        })
        .catch(erro => toast.error(erro))
    }, [userDelete])

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

            <Container className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Nome</td>
                                <td>E-mail</td>
                                <td>Ações</td>
                            </tr>
                        </thead>

                        <tbody>
                            {usuarios.map(item => (
                                <tr className="linha" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                    <td>
                                    <button className="btn btn-info me-2"
                                     onClick={() => navigate(`/users/${item.id}`)}>
                                        Editar
                                    </button>
                                        <button className="btn btn-danger" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#deletarModal"
                                        onClick={() => setUserDelete(item)}>Deletar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>

        {/* Começo modal deletar */}
        <div className="modal fade" id="deletarModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Deletar Usuário</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Você quer mesmo deletar o usuário {userDelete.nome}?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary"
                    onClick={() => excluirUsuario()} data-bs-dismiss="modal">Sim</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                </div>
            </div>
        </div>
    </div>
        {/* Fim modal deletar */}

        </div> 
    )
}

export const Container = styledComponents.div `

    .linha {
        :hover {
            background-color: #ececec;
            color: black !important;
            cursor: pointer;
        }
    }

`
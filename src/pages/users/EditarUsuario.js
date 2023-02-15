import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";
import InputLabel from '../../components/unform/input-label'
import * as Yup from 'yup'
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export function EditarUsuario() {

    const FormRef = useRef(null)

    const params = useParams()
    
    const [usuario, setUsuario] = useState()

    const buscarUsuario = async (id) => {
        await axios.get(`http://localhost:3333/usuarios/${id}`)
            .then(response => setUsuario(response.data))
                .catch(erro => toast.error("Usuário não encontrado!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    }))
             }

    const Submit = async (data) => {
    
        try {
            FormRef.current.setErrors({})
            
            const schema = Yup.object().shape({
                nome: Yup.string()
                .required("Nome é obrigatório"),

                email: Yup.string()
                .required("E-mail é obrigatório")
                .email("E-mail inválido")
            })

            await schema.validate(data, { abortEarly: false })

                await axios.put(`http://localhost:3333/usuarios/${usuario.id}`, data)
                .then(response => {
                    toast.success("Usuário atualizado com sucesso!", {
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
                .catch(erro => {
                    toast.error("Erro ao atualizar o usuário!", {
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

        } catch (error) {
            if(error instanceof Yup.ValidationError) {
                const messages = {}

                error.inner.forEach(erro => {
                    messages[erro.path] = erro.message
                })

                FormRef.current.setErrors(messages)
            }

        }
    }

    useEffect(() => {
        const { id } = params

        if(id) buscarUsuario(id)
    }, [])

    return (
        <div className="container">
            <div className="col text-center">
                <h1>Editando {usuario?.nome}</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <Form ref={FormRef} onSubmit={Submit} initialData={usuario}>
                        <div className="col">
                            <InputLabel name="nome" label="Nome" />
                        </div>
                        
                        <div className="col mt-3">
                            <InputLabel name="email" label="E-mail" />
                        </div>

                        <div className="row mt-3">
                            <div className="col text-center">
                                <button className="btn btn-primary" type="submit">
                                    Atualizar
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
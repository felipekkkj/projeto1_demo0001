import { Form } from "@unform/web";
import { useRef } from "react";
import InputLabel from '../../components/unform/input-label'
import * as Yup from 'yup'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function NovoUsuario() {

    const FormRef = useRef(null)

    const navigate = useNavigate()
    
    const Submit = async (data) => {
    
        try {
            FormRef.current.setErrors({})
            
            const schema = Yup.object().shape({
                nome: Yup.string()
                .required("Nome é obrigatório"),

                email: Yup.string()
                .required("E-mail é obrigatório")
                .email("E-mail inválido"),

                password: Yup.string()
                .required("Senha é obrigatório")
                .min(6, "Sua senha precisa ter no mínimo 6 dígitos")
                .max(16, "Sua senha pode ter no máximo 16 dígitos")

            })

            await schema.validate(data, { abortEarly: false })

                await axios.post("http://localhost:3333/usuarios", data)
                .then(response => {
                    toast.success("Usuário salvo com sucesso!", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })
                    navigate(`/usuarios/${response.data.id}`)
                })
                .catch(erro => {
                    toast.error("Usuário não foi salvo na base da dados!", {
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

    return (
        <div className="container">
            <div className="col text-center">
                <h1>Novo usuário</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <Form ref={FormRef} onSubmit={Submit}>
                        <div className="col">
                            <InputLabel name="nome" label="Nome" />
                        </div>
                        
                        <div className="col mt-3">
                            <InputLabel name="email" label="E-mail" />
                        </div>

                        {/* type="password" tampa a senha */}
                        <div className="col mt-3">
                            <InputLabel name="password" label="Senha" />
                        </div>

                        <div className="row mt-3">
                            <div className="col text-center">
                                <button className="btn btn-primary" type="submit">
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
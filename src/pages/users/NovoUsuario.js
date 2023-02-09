import { Form } from "@unform/web";
import { useRef } from "react";
import InputLabel from '../../components/unform/input-label'

export function NovoUsuario() {

    const FormRef = useRef(null)
    const Submit = (data) => {
        console.log(data);
    }

    return (
        <div className="container">
            <div className="col text-center">
                <h1>Novo usuário</h1>
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <Form ref={FormRef} onSubmit={Submit}>
                        <div className="col mt-3">
                            <InputLabel name="nome" label="Nome" />
                        </div>
                        
                        <div className="col mt-3">
                            <InputLabel name="email" label="E-mail" />
                        </div>

                        <div className="col mt-3">
                            <InputLabel name="password" label="Senha" />
                        </div>

                        <div className="row">
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
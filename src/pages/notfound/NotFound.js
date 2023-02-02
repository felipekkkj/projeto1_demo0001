import { Link } from "react-router-dom";
import styledComponents from "styled-components";

export function NotFound() {
    return(
        <Container className="container">
            <div className="row justify-content-center">
                <div className="col-sm col-md-10">
                    <h1>Página não encontrada</h1>

                    <div className="col-sm col-md-6 d-grid">
                        <Link to="/" className="btn btn-primary">
                            Voltar para página inicial
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}


export const Container = styledComponents.div`
    background-color: red;
`
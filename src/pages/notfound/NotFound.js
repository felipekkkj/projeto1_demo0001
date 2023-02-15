import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import error_404 from '../../assets/error_404.png';

export function NotFound() {

    return(
        <Container className="container">
            <div className="row justify-content-center">
                <div className="col-sm col-md-6 card text-center mb-5">
                    <img src={error_404} alt="background_404" />

                    <h1>Página não encontrada</h1>

                    <div className="row justify-content-center">
                        <div className="col-sm md-6 d-grid">
                        <Link to="/" className="btn btncolor">
                            Voltar para página inicial
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}


export const Container = styledComponents.div`
    margin-top: 50px;

    .card {
        padding: 20px;
        background-color: #e8efef;
        img {
            max-width: 800px
        }
    }

    .btncolor {
        color: white;
        background-color: #00534f;
        :hover {
            background-color: #196460;
        }
    }
`
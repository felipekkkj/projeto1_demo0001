import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { NotFound } from "./pages/notfound/NotFound";
import { EditarUsuario } from "./pages/users/EditarUsuario";
import { NovoUsuario } from "./pages/users/NovoUsuario";
import { Usuarios } from "./pages/users/Usuarios";

export function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/users" element={<Usuarios />} />

            <Route path="/*" element={<NotFound />} />

            <Route path="/users/new" element={<NovoUsuario />} />

            <Route path="/users/:id" element={<EditarUsuario />} />

        </Routes>
    )
}
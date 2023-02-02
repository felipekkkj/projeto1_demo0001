import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { NotFound } from "./pages/notfound/NotFound";
import { Usuarios } from "./pages/users/Usuarios";

export function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/users" element={<Usuarios />} />

            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}
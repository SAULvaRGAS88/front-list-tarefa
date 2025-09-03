import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaLogin } from "./paginas/login/PaginaLogin";
import { PaginaHome } from "./paginas/home/PaginaHome";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="/home/:idUsuario" element={<PaginaHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

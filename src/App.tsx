import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaLogin } from "./paginas/login/PaginaLogin";
import { PaginaHome } from "./paginas/home/PaginaHome";
import { SnackbarProvider } from "./servicos/context/SnackbarContext";
import { PaginaNotFound } from "./paginas/notFound/PaginaNotFound";

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaLogin />} />
          <Route path="/home/:idUsuario" element={<PaginaHome />} />
          <Route path="*" element={<PaginaNotFound />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  )
}

export default App

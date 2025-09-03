import { useNavigate } from "react-router-dom"


export const PaginaHome = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Pagina Home</div>
            <button
            onClick={() => {
                navigate('/')
            }}
            >Login</button>
        </>
    )
}
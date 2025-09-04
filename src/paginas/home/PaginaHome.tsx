import { useEffect, useState } from "react"
import {
    Header,
    HomeContainer,
    HomeTitle,
    Logo
} from "./ModalBoasVindasStyles"
import { ModalBoasVindas } from "./ModalBoasVindas"
import logo from "../../../public/logo.svg"
import { conexaoApi } from "../../servicos/api/ConexaoApi"
import { useNavigate, useParams } from "react-router-dom"
import { PainelTarefas } from "./tarefas/PainelTarefas"

export const PaginaHome = () => {

    //navegação
    const navigate = useNavigate()
    const { idUsuario } = useParams()

    // Estados do componente
    const [open, setOpen] = useState(false)
    const [tasks, setTasks] = useState([])

    /**Se o usuário não estiver logado, redireciona para a página de login */
    useEffect(() => {
        const usuario = getUser()
        if (idUsuario !== usuario.id) {
            navigate('/not-found')
        }
    }, [navigate, idUsuario])

    /**Função para fechar o modal de boas vindas */
    const handleClose = () => {
        setOpen(false)
    }

    /**Medoto para obter o nome do usuário logado do localStorage */
    const getUser = () => {
        const user = localStorage.getItem('usuario')
        return user ? JSON.parse(user) : null
    }

    /**Medoto para tarefas do usuário logado */
    const getTasks = async () => {
        const res = await conexaoApi.get(`/usuarios/${getUser().id}`)
        setTasks(res.data.data.tarefas)
    }

    // Efeito para abrir o modal de boas vindas quando o componente for montado
    useEffect(() => {
        setOpen(true)
        getTasks()
    }, [])

    return (
        <HomeContainer>
            {/* header */}
            <Header>
                <Logo>
                    <img src={logo} alt="Logo" />
                </Logo>
                <HomeTitle
                    variant="h5"
                    style={{ textAlign: 'center', marginLeft: '10px', marginBottom: '0px' }}
                >Bem-vindo(a) {getUser().nome}!</HomeTitle>
            </Header>

            {/* conteudo */}
            <PainelTarefas data={tasks} />

            {/* modal de boas vindas */}
            <ModalBoasVindas open={open} onClose={handleClose} />
        </HomeContainer>
    )
}
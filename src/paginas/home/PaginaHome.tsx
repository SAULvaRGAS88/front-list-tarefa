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
import { useWindowSize } from "../../hooks/UseWindowSize"
import { FontSizeResponsivoApp } from "../../componentes/styles/FontSizeResponsivoApp"
import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import MenuLateral from "./menuLateral/MenuLateral"

export const PaginaHome = () => {

    //navegação
    const navigate = useNavigate()
    const { idUsuario } = useParams()

    // Estados do componente
    const [open, setOpen] = useState(false)
    const [tasks, setTasks] = useState([])

    //estado do componente
    const [openMenu, setOpenMenu] = useState(false)

    // hook para o tamanho da tela
    const { width } = useWindowSize();

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

    /**Função para fechar o menu lateral */
    const handleCloseMenu = () => {
        setOpenMenu(false)
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

    /**Função para abrir o menu de opções */
    const handleOpenMenu = () => {
        setOpenMenu(true)
    }

    return (
        <HomeContainer>
            {/* header */}
            <Header isMobile={width < 768}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Logo>
                        <img src={logo} alt="Logo" />
                    </Logo>
                    <HomeTitle
                        sx={{
                            fontSize: FontSizeResponsivoApp.fontSize,

                        }}
                        style={{ textAlign: 'center', marginLeft: '10px', marginBottom: '0px' }}
                    >Bem-vindo(a) {getUser().nome}!</HomeTitle>
                </div>


                {/* menu de opções */}
                <IconButton onClick={handleOpenMenu}>
                    {/* Add a cor padrao ao icone do menu */}
                    <MenuIcon fontSize="large" style={{ color: ' #667eea ' }} />
                </IconButton>
            </Header>

            {/* conteudo */}
            <PainelTarefas
                data={tasks}
            />

            {/* modal de boas vindas */}
            <ModalBoasVindas open={open} onClose={handleClose} />

            {/* menu lateral */}
            <MenuLateral open={openMenu} onClose={handleCloseMenu} />
        </HomeContainer>
    )
}
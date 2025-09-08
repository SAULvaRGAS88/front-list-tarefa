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
import { LoadApp } from "../../componentes/loadApp/LoadApp"
import { useSnackbar } from "../../servicos/context/SnackbarContext"
import { useWindowSize } from "../../hooks/UseWindowSize"
import { FontSizeResponsivoApp } from "../../componentes/styles/FontSizeResponsivoApp"
import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import MenuLateral from "./menuLateral/MenuLateral"
import WarningIcon from '@mui/icons-material/Warning';
import { PaginaNotFound } from "../notFound/PaginaNotFound";
import {
    ModalConfirmacaoContainer,
    ModalConfirmacaoCard,
    ModalConfirmacaoIcon,
    ModalConfirmacaoTitle,
    ModalConfirmacaoMessage,
    ModalConfirmacaoActions,
    ModalConfirmacaoButton
} from "./tarefas/PainelTarefasStyles";

export const PaginaHome = () => {
    const { showSnackbar } = useSnackbar();

    //navegação
    const navigate = useNavigate()
    const { idUsuario } = useParams()

    // Estados do componente
    const [open, setOpen] = useState(false)
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showModalConfirmacao, setShowModalConfirmacao] = useState(false)
    const [taskToDelete, setTaskToDelete] = useState<any>(null)
    const [isDeleting, setIsDeleting] = useState(false)

    //estado do componente
    const [openMenu, setOpenMenu] = useState(false)

    // hook para o tamanho da tela
    const { width } = useWindowSize();

    /**Se o usuário não estiver logado, redireciona para a página de login */
    useEffect(() => {
        const usuario = getUser()
        if (!usuario || !usuario.id || !usuario.nome || idUsuario !== usuario.id) {
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

    /** Função para solicitar exclusão de tarefa */
    const handleDeleteTask = (taskId: string) => {
        const task = tasks.find((t: any) => t.id === taskId);
        if (task) {
            setTaskToDelete(task);
            setShowModalConfirmacao(true);
        }
    };

    /** Função para confirmar exclusão */
    const handleConfirmarExclusao = async () => {
        if (!taskToDelete) return;

        setIsDeleting(true);
        setIsLoading(true);

        try {
            const response = await conexaoApi.delete(`/tarefas/${taskToDelete.id}`);

            if (response.status === 200) {
                showSnackbar('Tarefa deletada com sucesso!', 'success');
                setShowModalConfirmacao(false);
                setTaskToDelete(null);

                await getTasks();
            } else {
                showSnackbar('Erro ao deletar tarefa. Tente novamente.', 'error');
            }
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
            showSnackbar('Erro ao deletar tarefa. Tente novamente.', 'error');
        } finally {
            setIsDeleting(false);
            setIsLoading(false);
        }
    };

    /** Função para cancelar exclusão */
    const handleCancelarExclusao = () => {
        setShowModalConfirmacao(false);
        setTaskToDelete(null);
    };

    // Efeito para abrir o modal de boas vindas quando o componente for montado
    useEffect(() => {
        setOpen(true)
        getTasks()
    }, [])

    /**Função para abrir o menu de opções */
    const handleOpenMenu = () => {
        setOpenMenu(true)
    }

    // Verificar se o usuário está logado antes de renderizar
    const usuario = getUser()
    if (!usuario || !usuario.id || !usuario.nome || idUsuario !== usuario.id) {
        return <PaginaNotFound />
    }

    return (
        <HomeContainer>

            {/* header */}
            <Header $isMobile={width < 768}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Logo>
                        <img src={logo} alt="Logo" />
                    </Logo>
                    <HomeTitle
                        sx={{
                            fontSize: FontSizeResponsivoApp.fontSize,

                        }}
                        style={{ textAlign: 'center', marginLeft: '10px', marginBottom: '0px' }}
                    >Bem-vindo(a) {getUser()?.nome}!</HomeTitle>
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
                onTaskUpdated={getTasks}
                onLoadingChange={setIsLoading}
                onDeleteTask={handleDeleteTask}
            />

            {/* modal de boas vindas */}
            <ModalBoasVindas open={open} onClose={handleClose} tasks={tasks} />

            {/* menu lateral */}
            <MenuLateral open={openMenu} onClose={handleCloseMenu} />

            {/* Loading centralizado */}
            <LoadApp open={isLoading} />

            {/* Modal de confirmação de exclusão */}
            {showModalConfirmacao && (
                <ModalConfirmacaoContainer>
                    <ModalConfirmacaoCard>
                        <ModalConfirmacaoIcon>
                            <WarningIcon />
                        </ModalConfirmacaoIcon>

                        <ModalConfirmacaoTitle>
                            Excluir Tarefa
                        </ModalConfirmacaoTitle>

                        <ModalConfirmacaoMessage>
                            Tem certeza que deseja excluir a tarefa <strong>"{taskToDelete?.nome}"</strong>?
                            Esta ação não pode ser desfeita.
                        </ModalConfirmacaoMessage>

                        <ModalConfirmacaoActions>
                            <ModalConfirmacaoButton
                                $variant="cancel"
                                onClick={handleCancelarExclusao}
                                disabled={isDeleting}
                            >
                                Cancelar
                            </ModalConfirmacaoButton>

                            <ModalConfirmacaoButton
                                $variant="delete"
                                onClick={handleConfirmarExclusao}
                                disabled={isDeleting}
                            >
                                {isDeleting ? 'Excluindo...' : 'Excluir'}
                            </ModalConfirmacaoButton>
                        </ModalConfirmacaoActions>
                    </ModalConfirmacaoCard>
                </ModalConfirmacaoContainer>
            )}
        </HomeContainer>
    )
}
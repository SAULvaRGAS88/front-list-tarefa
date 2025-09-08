import { useState } from "react"
import { Card, CircularProgress } from "@mui/material"
import { useParams } from "react-router-dom"
import { ModalCastroContainer } from "../../login/PaginaLoginStyles"
import {
    ModalTitle, ModalSubtitle, FormContainer, StyledTextField, StyledButton, ActionsContainer, CoresContainer, CorButton, CoresLabel
} from "./ModalCriacaoAtividadeStyles"
import { useSnackbar } from "../../../servicos/context/SnackbarContext"
import { conexaoApi } from "../../../servicos/api/ConexaoApi"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const ModalCriacaoAtividade = ({ open, onClose, onTaskCreated, onLoadingChange }: { open: boolean, onClose: () => void, onTaskCreated?: () => void, onLoadingChange?: (loading: boolean) => void }) => {

    /**Hook para obter parâmetros da URL*/
    const { idUsuario } = useParams()

    /**Estados do componente*/
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [cor, setCor] = useState('#667eea')
    const [loading, setLoading] = useState(false)
    const [erros, setErros] = useState<{ [key: string]: string }>({})
    const [favoritar, setFavoritar] = useState(false)

    /**Hook para usar o snackbar*/
    const { showSnackbar } = useSnackbar()

    /**Cores disponíveis*/
    const coresDisponiveis = [
        '#667eea', '#764ba2', '#f093fb', '#f5576c',
        '#4facfe', '#00f2fe', '#43e97b', '#38f9d7',
        '#ffecd2', '#fcb69f', '#a8edea', '#fed6e3',
        '#ff9a9e', '#fecfef',
    ]

    /**Função para validar campos*/
    const validarCampos = () => {
        const novosErros: { [key: string]: string } = {}

        if (!nome || !nome.trim()) {
            novosErros.nome = 'Nome é obrigatório'
        } else if (nome.trim().length < 2) {
            novosErros.nome = 'Nome deve ter pelo menos 2 caracteres'
        }

        if (!descricao || !descricao.trim()) {
            novosErros.descricao = 'Descrição é obrigatória'
        } else if (descricao.trim().length < 5) {
            novosErros.descricao = 'Descrição deve ter pelo menos 5 caracteres'
        }

        setErros(novosErros)
        return Object.keys(novosErros).length === 0
    }

    /**Função para limpar formulário*/
    const limparFormulario = () => {
        setNome('')
        setDescricao('')
        setCor('#667eea')
        setFavoritar(false)
        setErros({})
    }

    /**Função para obter o id do usuário logado*/
    const getUser = () => {
        const user = localStorage.getItem('usuario')
        return user ? JSON.parse(user) : null
    }

    /**Função para criar atividade*/
    const handleCriarAtividade = async () => {
        if (!validarCampos()) return

        const usuario = getUser()
        if (!usuario || !usuario.id || !usuario.nome || idUsuario !== usuario.id) {
            showSnackbar('Usuário não encontrado ou sem permissão. Faça login novamente.', 'error')
            return
        }

        if (!nome || !descricao || !cor) {
            showSnackbar('Todos os campos são obrigatórios.', 'error')
            return
        }

        setLoading(true)
        if (onLoadingChange) {
            onLoadingChange(true)
        }
        try {
            const tarefa = {
                nome: nome.trim(),
                descricao: descricao.trim(),
                cor: cor,
                status: true,
                favorita: favoritar ? "true" : "false",
                usuario_id: parseInt(usuario.id)
            }


            /**Chamar a API para criar atividade*/
            await conexaoApi.post('/tarefas', tarefa);

            showSnackbar('Tarefa criada com sucesso!', 'success')
            limparFormulario()
            onClose()

            if (onTaskCreated) {
                onTaskCreated()
            }
        } catch (error: any) {

            let errorMessage = 'Erro ao criar tarefa. Tente novamente.'

            if (error.response?.status === 401) {
                errorMessage = 'Sessão expirada. Faça login novamente.'
            } else if (error.response?.status === 403) {
                errorMessage = 'Sem permissão para criar tarefas.'
            } else if (error.response?.status === 400) {
                const errorData = error.response?.data
                if (errorData?.message) {
                    errorMessage = errorData.message
                } else if (errorData?.errors) {
                    const validationErrors = Object.values(errorData.errors).join(', ')
                    errorMessage = `Erro de validação: ${validationErrors}`
                } else {
                    errorMessage = 'Dados inválidos. Verifique os campos.'
                }
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message
            } else if (error.message) {
                errorMessage = error.message
            }

            showSnackbar(errorMessage, 'error')
        } finally {
            setLoading(false)
            if (onLoadingChange) {
                onLoadingChange(false)
            }
        }
    }

    /**Função para fechar modal e limpar formulário*/
    const handleClose = () => {
        limparFormulario()
        onClose()
    }

    /**Função para evitar fechamento acidental do modal*/
    const handleModalClose = (_event: any, reason: string) => {
        if (reason === 'backdropClick' && loading) {
            return
        }
        handleClose()
    }

    return (
        <ModalCastroContainer
            open={open}
            onClose={handleModalClose}
        >
            <Card style={{ width: '90%', maxWidth: '500px', padding: '2rem' }}>
                <ModalTitle variant="h4">
                    ➕ Nova Tarefa
                </ModalTitle>

                <ModalSubtitle variant="body1">
                    Preencha os campos abaixo para criar uma nova tarefa
                </ModalSubtitle>

                {loading && (
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
                        <CircularProgress size={40} />
                    </div>
                )}

                <FormContainer>
                    <StyledTextField
                        required
                        id="nome"
                        label="Nome da Tarefa"
                        type="text"
                        variant="outlined"
                        fullWidth
                        value={nome}
                        onChange={(e: any) => setNome(e.target.value)}
                        disabled={loading}
                        error={!!erros.nome}
                        helperText={erros.nome}
                    />

                    <StyledTextField
                        required
                        id="descricao"
                        label="Descrição"
                        type="text"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        value={descricao}
                        onChange={(e: any) => setDescricao(e.target.value)}
                        disabled={loading}
                        error={!!erros.descricao}
                        helperText={erros.descricao}
                    />

                    <div>
                        <CoresLabel variant="body2">
                            Escolha uma cor para a tarefa:
                        </CoresLabel>
                        <CoresContainer>
                            {coresDisponiveis.map((corDisponivel) => (
                                <CorButton
                                    key={corDisponivel}
                                    $cor={corDisponivel}
                                    $selected={corDisponivel === cor}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setCor(corDisponivel)
                                    }}
                                    disabled={loading}
                                    title={corDisponivel}
                                />
                            ))}
                        </CoresContainer>
                    </div>

                    <div>
                        <CoresLabel variant="body2">
                            Favoritar tarefa?
                        </CoresLabel>
                        <CoresContainer>
                            <CorButton
                                $cor={cor}
                                $selected={favoritar}
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setFavoritar(!favoritar)
                                }}
                                disabled={loading}
                                title={favoritar ? 'Favoritar' : 'Desfavoritar'}
                            >
                                {favoritar ? <StarIcon htmlColor='#ffd700' /> : <StarBorderIcon htmlColor='#ccc' />}
                            </CorButton>
                        </CoresContainer>
                    </div>

                    <ActionsContainer>
                        <StyledButton
                            variant="contained"
                            type="button"
                            fullWidth
                            onClick={handleCriarAtividade}
                            disabled={!nome || !descricao || loading}
                        >
                            {loading ? 'Criando...' : 'Criar Tarefa'}
                        </StyledButton>

                        <StyledButton
                            variant="outlined"
                            type="button"
                            fullWidth
                            onClick={handleClose}
                            disabled={loading}
                            style={{
                                background: 'transparent',
                                border: '2px solid #667eea',
                                color: '#667eea'
                            }}
                        >
                            Cancelar
                        </StyledButton>
                    </ActionsContainer>
                </FormContainer>
            </Card>
        </ModalCastroContainer>
    )
}       
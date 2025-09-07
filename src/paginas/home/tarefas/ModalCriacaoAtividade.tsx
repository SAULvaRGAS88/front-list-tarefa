import { useState } from "react"
import { Card, CircularProgress } from "@mui/material"
import { ModalCastroContainer } from "../../login/PaginaLoginStyles"
import { 
    ModalTitle, 
    ModalSubtitle, 
    FormContainer, 
    StyledTextField, 
    StyledButton, 
    ActionsContainer,
    CoresContainer,
    CorButton,
    CoresLabel
} from "./ModalCriacaoAtividadeStyles"
import { useSnackbar } from "../../../servicos/context/SnackbarContext"
import { conexaoApi } from "../../../servicos/api/ConexaoApi"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

    export const ModalCriacaoAtividade = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    // Estados do componente
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [cor, setCor] = useState('#667eea') // Definir cor padrão
    const [loading, setLoading] = useState(false)
    const [erros, setErros] = useState<{[key: string]: string}>({})
    const [favoritar, setFavoritar] = useState(false)

    // Hook para usar o snackbar
    const { showSnackbar } = useSnackbar()

    // Cores disponíveis
    const coresDisponiveis = [
        '#667eea', '#764ba2', '#f093fb', '#f5576c',
        '#4facfe', '#00f2fe', '#43e97b', '#38f9d7',
        '#ffecd2', '#fcb69f', '#a8edea', '#fed6e3',
        '#ff9a9e', '#fecfef', 
    ]

    // Função para validar campos
    const validarCampos = () => {
        const novosErros: {[key: string]: string} = {}

        if (!nome.trim()) {
            novosErros.nome = 'Nome é obrigatório'
        }

        if (!descricao.trim()) {
            novosErros.descricao = 'Descrição é obrigatória'
        }

        setErros(novosErros)
        return Object.keys(novosErros).length === 0
    }

    // Função para limpar formulário
    const limparFormulario = () => {
        setNome('')
        setDescricao('')
        setCor('#667eea')
        setFavoritar(false)
        setErros({})
    }

    // Função para obter o id do usuário logado
    const getUser = () => {
        const user = localStorage.getItem('usuario')
        return user ? JSON.parse(user) : null
    }

    // Função para criar atividade
    const handleCriarAtividade = async () => {
        if (!validarCampos()) return

        setLoading(true)
        try {
            //obj para enviar para a api
            const tarefa = {
                nome: nome,
                descricao: descricao,
                cor: cor,
                status: true,
                favorita: favoritar || false,
                usuario_id: getUser().id
            }
            
            // Chamar a API para criar atividade
            const res = await conexaoApi.post('/tarefas', tarefa);
            
            console.log('Tarefa criada:', res.data)
            showSnackbar('Tarefa criada com sucesso!', 'success')
            limparFormulario()
            onClose()
        } catch (error: any) {
            console.error('Erro ao criar tarefa:', error)
            const errorMessage = error.response?.data?.message || 'Erro ao criar tarefa. Tente novamente.'
            showSnackbar(errorMessage, 'error')
        } finally {
            setLoading(false)
        }
    }

    // Função para fechar modal e limpar formulário
    const handleClose = () => {
        limparFormulario()
        onClose()
    }

    // Função para cancelar (apenas fecha, sem limpar)
    const handleCancel = () => {
        onClose()
    }

    return (
        <ModalCastroContainer
            open={open}
            onClose={handleCancel}
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
                                    onClick={() => setCor(corDisponivel)}
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
                                onClick={() => setFavoritar(!favoritar)} 
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
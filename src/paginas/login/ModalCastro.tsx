import { useState } from "react"
import { CircularProgress } from "@mui/material"
import { Card, FormContainer, ModalCastroContainer, StyledButton, StyledTextField, LoadingContainer, WelcomeText, TituloCadastro } from "./PaginaLoginStyles"
import { conexaoApi } from "../../servicos/api/ConexaoApi"
import { useSnackbar } from "../../servicos/context/SnackbarContext"

export const ModalCastro = ({ open, onClose }: { open: boolean, onClose: () => void }) => {

    /**Estado do componente*/
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirmacao, setEmailConfirmacao] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('')
    const [loading, setLoading] = useState(false)
    const [erros, setErros] = useState<{[key: string]: string}>({})

    // Hook snackbar context
    const { showSnackbar } = useSnackbar()

    /**Função para validar campos*/
    const validarCampos = () => {
        const novosErros: {[key: string]: string} = {}

        if (!nome.trim()) {
            novosErros.nome = 'Nome é obrigatório'
        }

        if (!email.trim()) {
            novosErros.email = 'Email é obrigatório'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            novosErros.email = 'Email inválido'
        }

        if (!emailConfirmacao.trim()) {
            novosErros.emailConfirmacao = 'Confirmação de email é obrigatória'
        } else if (email !== emailConfirmacao) {
            novosErros.emailConfirmacao = 'Emails não coincidem'
        }

        if (!senha) {
            novosErros.senha = 'Senha é obrigatória'
        } else if (senha.length < 6) {
            novosErros.senha = 'Senha deve ter pelo menos 6 caracteres'
        }

        if (!senhaConfirmacao) {
            novosErros.senhaConfirmacao = 'Confirmação de senha é obrigatória'
        } else if (senha !== senhaConfirmacao) {
            novosErros.senhaConfirmacao = 'Senhas não coincidem'
        }

        setErros(novosErros)
        return Object.keys(novosErros).length === 0
    }

    /**Função para limpar formulário*/
    const limparFormulario = () => {
        setNome('')
        setEmail('')
        setEmailConfirmacao('')
        setSenha('')
        setSenhaConfirmacao('')
        setErros({})
    }

    /**Função de cadastro*/
    const handleCadastro = async () => {
        if (!validarCampos()) return

        setLoading(true)
        try {
            // Chamar a API de cadastro
            const res = await conexaoApi.post('/usuarios', { nome, email, senha });
            const usuario = res.data.data;

            console.log('Cadastro realizado:', { usuario })
            showSnackbar('Cadastro realizado com sucesso!', 'success')
            limparFormulario()
            onClose()
        } catch (error: any) {
            console.error('Erro no cadastro:', error)
            const errorMessage = error.response?.data?.message || 'Erro ao realizar cadastro. Tente novamente.'
            showSnackbar(errorMessage, 'error')
        } finally {
            setLoading(false)
        }
    }

    /**Função para fechar modal e limpar formulário*/
    const handleClose = () => {
        limparFormulario()
        onClose()
    }

    return (
        <ModalCastroContainer
            open={open}
            onClose={handleClose}
        >
            <Card style={{ width: '80%' }}>
                <TituloCadastro>
                    📝 Cadastro
                </TituloCadastro>
                
                <WelcomeText>
                    Preencha os campos abaixo para criar sua conta
                </WelcomeText>

                {loading && (
                    <LoadingContainer>
                        <CircularProgress size={40} />
                    </LoadingContainer>
                )}

                <FormContainer>
                    <StyledTextField
                        required
                        id="nome"
                        label="Nome"
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
                        id="email"
                        label="E-mail"
                        type="email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        disabled={loading}
                        error={!!erros.email}
                        helperText={erros.email}
                    />

                    <StyledTextField
                        required
                        id="emailConfirmacao"
                        label="Confirme o e-mail"
                        type="email"
                        variant="outlined"
                        fullWidth
                        value={emailConfirmacao}
                        onChange={(e: any) => setEmailConfirmacao(e.target.value)}
                        disabled={loading}
                        error={!!erros.emailConfirmacao}
                        helperText={erros.emailConfirmacao}
                    />

                    <StyledTextField
                        required
                        id="senha"
                        label="Senha"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={senha}
                        onChange={(e: any) => setSenha(e.target.value)}
                        disabled={loading}
                        error={!!erros.senha}
                        helperText={erros.senha}
                    />

                    <StyledTextField
                        required
                        id="senhaConfirmacao"
                        label="Confirme a senha"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={senhaConfirmacao}
                        onChange={(e: any) => setSenhaConfirmacao(e.target.value)}
                        disabled={loading}
                        error={!!erros.senhaConfirmacao}
                        helperText={erros.senhaConfirmacao}
                    />

                    <StyledButton
                        variant="contained"
                        type="button"
                        fullWidth
                        onClick={handleCadastro}
                        disabled={!nome || !email || !emailConfirmacao || !senha || !senhaConfirmacao || loading}
                    >
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
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
                            color: '#667eea',
                            marginTop: '0.5rem'
                        }}
                    >
                        Cancelar
                    </StyledButton>
                </FormContainer>
            </Card>
        </ModalCastroContainer>
    )
}
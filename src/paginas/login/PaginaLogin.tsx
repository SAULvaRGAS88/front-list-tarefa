
import { useState } from "react"
import { conexaoApi } from "../../servicos/api/ConexaoApi"
import { useNavigate } from "react-router-dom"
import { LoginContainer, Card, Logo, FormContainer, StyledTextField, StyledButton, WelcomeText, } from "./PaginaLoginStyles"
import { ModalCastro } from "./ModalCastro"
import { useSnackbar } from "../../servicos/context/SnackbarContext"
import { LoadApp } from "../../componentes/loadApp/LoadApp"


export const PaginaLogin = () => {

    //estado do componente
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [openLoadApp, setOpenLoadApp] = useState(false)

    //funções para abrir e fechar o modal
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    //navegação
    const navigate = useNavigate()

    //hook snackbar context
    const { showSnackbar } = useSnackbar()

    /**Função de autenticação de login */
    const handleLogin = async (email: string, senha: string) => {
        if (!email || !senha) return alert('Preencha email e senha');

        setLoading(true);
        setOpenLoadApp(true);
        try {
            const res = await conexaoApi.post('/usuarios/login', { email, senha });
            const usuario = res.data.data;

            if (!usuario) throw new Error('Usuário não retornado');

            const usuarioObj = { nome: usuario.nome, id: usuario.id };
            localStorage.setItem('usuario', JSON.stringify(usuarioObj));
            showSnackbar('Login realizado com sucesso!', 'success', 2000);
            navigate(`/home/${usuario.id}`);
        } catch (err: any) {
            console.error('Erro no login', err.response?.data || err.message);
            localStorage.removeItem('usuario');
            showSnackbar('Login falhou, verifique seus dados', 'error', 2000);
        } finally {
            setLoading(false);
            setOpenLoadApp(false);
        }
    };

    /**Função de submit do form*/
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(email, senha);
    };

    return (
        <LoginContainer>
            <Card>
                <Logo>📋 Lista de Tarefas</Logo>
                <WelcomeText>
                    Faça login para acessar suas tarefas
                </WelcomeText>

                <FormContainer onSubmit={handleSubmit}>
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
                    />

                    <StyledButton
                        variant="contained"
                        type="submit"
                        fullWidth
                        disabled={!email || !senha || loading}
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </StyledButton>

                    {/**Botão para cadastro*/}
                    <StyledButton
                        variant="contained"
                        type="button"
                        fullWidth
                        onClick={handleOpen}
                    >
                        Cadastre-se
                    </StyledButton>
                </FormContainer>
            </Card>

            {/**Modal para cadastro*/}
            <ModalCastro open={open} onClose={handleClose} onLoadingChange={setOpenLoadApp} />

            {/* loadApp */}
            <LoadApp open={openLoadApp} />
        </LoginContainer>
    )
}
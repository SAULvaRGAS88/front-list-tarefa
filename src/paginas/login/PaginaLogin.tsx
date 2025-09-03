
import { useState } from "react"
import { CircularProgress } from "@mui/material"
import { conexaoApi } from "../../servicos/api/ConexaoApi"
import { useNavigate } from "react-router-dom"
import { LoginContainer, LoginCard, Logo, FormContainer, StyledTextField, StyledButton, LoadingContainer, WelcomeText, } from "./PaginaLoginStyles"


export const PaginaLogin = () => {

    //estado do componente
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loading, setLoading] = useState(false)

    //navegação
    const navigate = useNavigate()

    /**Função de autenticação de login */
    const handleLogin = async (email: string, senha: string) => {
        if (!email || !senha) return alert('Preencha email e senha');
    
        setLoading(true);
        try {
            const res = await conexaoApi.post('/usuarios/login', { email, senha });
            const usuario = res.data.data;
    
            if (!usuario) throw new Error('Usuário não retornado');
    
            const usuarioObj = { nome: usuario.nome, id: usuario.id };
            localStorage.setItem('usuario', JSON.stringify(usuarioObj));
    
            navigate(`/home/${usuario.id}`);
        } catch (err: any) {
            console.error('Erro no login', err.response?.data || err.message);
            localStorage.removeItem('usuario');
            alert('Login falhou, verifique seus dados');
        } finally {
            setLoading(false);
        }
    };

    /**Função de submit do form*/
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(email, senha);
    };

    return (
        <LoginContainer>
            <LoginCard>
                <Logo>📋 Lista de Tarefas</Logo>
                <WelcomeText>
                    Faça login para acessar suas tarefas
                </WelcomeText>
                
                {loading && (
                    <LoadingContainer>
                        <CircularProgress size={40} />
                    </LoadingContainer>
                )}
                
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
                </FormContainer>
            </LoginCard>
        </LoginContainer>
    )
}
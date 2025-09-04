import { useNavigate } from "react-router-dom"
import { 
    NotFoundContainer, 
    NotFoundCard, 
    NotFoundIcon, 
    NotFoundTitle, 
    NotFoundSubtitle, 
    StyledButton, 
    ActionsContainer,
    ErrorCode
} from "./PaginaNotFoundStyles"

export const PaginaNotFound = () => {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <NotFoundContainer>
            <NotFoundCard>
                <NotFoundIcon>😕</NotFoundIcon>
                
                <ErrorCode>404</ErrorCode>
                
                <NotFoundTitle variant="h3">
                    Página não encontrada
                </NotFoundTitle>
                
                <NotFoundSubtitle variant="body1">
                    Ops! Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
                </NotFoundSubtitle>
                
                <ActionsContainer>
                    <StyledButton
                        variant="contained"
                        onClick={handleGoHome}
                        fullWidth
                    >
                        🏠 Ir para o Início
                    </StyledButton>
                    
                    <StyledButton
                        variant="outlined"
                        onClick={handleGoBack}
                        fullWidth
                        style={{
                            background: 'transparent',
                            border: '2px solid #667eea',
                            color: '#667eea'
                        }}
                    >
                        ⬅️ Voltar
                    </StyledButton>
                </ActionsContainer>
            </NotFoundCard>
        </NotFoundContainer>
    )
}
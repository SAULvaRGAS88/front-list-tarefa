import { 
    HomeTitle, 
    HomeSubtitle, 
    StyledButton, 
    ModalActionsContainer,
    StatsContainer,
    StatCard,
    StatNumber,
    StatLabel,
    ModalCard
} from './ModalBoasVindasStyles'
import { Card, ModalCastroContainer } from '../login/PaginaLoginStyles'

export const ModalBoasVindas = ({ open, onClose, tasks }: { open: boolean, onClose: () => void, tasks: any }) => {

    /** Função para contar o numero de tarefas do dia */
    const countTasksToday = () => {
        return tasks.filter((task: any) => task?.created_at.split('T')[0] === new Date().toISOString().split('T')[0]).length || 0
    }

    return (
        <ModalCastroContainer   
            open={open}
            onClose={onClose}
        >
            <ModalCard>
                <Card style={{ width: '100%', maxWidth: '100%' }}>
                    <HomeTitle variant="h4">
                        🎉 Bem-vindo ao Sistema de Gestão de Tarefas
                    </HomeTitle>
                    
                    <HomeSubtitle variant="body1">
                        Este sistema foi desenvolvido para ajudar você a gerenciar suas tarefas de forma eficiente e organizada.
                    </HomeSubtitle>

                    <HomeSubtitle variant="body1">
                        Você pode adicionar, editar e excluir tarefas, além de visualizar seus detalhes, status e fazer filtros por categoria e favoritar.
                    </HomeSubtitle>

                    {/* Estatísticas */}
                    <StatsContainer>
                        <StatCard>
                            <StatNumber>{countTasksToday()}</StatNumber>
                            <StatLabel>Tarefas para Hoje</StatLabel>
                        </StatCard>
                        
                    </StatsContainer>

                    <HomeSubtitle variant="body2" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                        💡 Dica: Use os filtros e favoritos para organizar melhor suas tarefas!
                    </HomeSubtitle>

                    <ModalActionsContainer>
                        <StyledButton
                            variant="contained"
                            onClick={onClose}
                            fullWidth
                        >
                            Começar a Usar
                        </StyledButton>
                    </ModalActionsContainer>
                </Card>
            </ModalCard>
        </ModalCastroContainer>
    )
}

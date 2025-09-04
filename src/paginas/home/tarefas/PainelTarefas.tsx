import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { 
    PainelContainer,
    PainelTitle,
    PainelCard,
    TarefasContainer,
    TarefaItem,
    TarefaHeader,
    TarefaNome,
    TarefaMeta,
    TarefaStatus,
    TarefaDescricao,
    TarefaInfo,
    TarefaData,
    TarefaCor,
    FavoritoIcon,
    EmptyContainer,
    EmptyIcon
} from './PainelTarefasStyles';

export const PainelTarefas = ({ data }: { data: any }) => {
    console.log(data)

    if (data[0] === null) {
        return (
            <PainelContainer>
                <PainelTitle variant="h4">
                     Painel de Tarefas
                </PainelTitle>
                <PainelCard>
                    <EmptyContainer>
                        <EmptyIcon>📝</EmptyIcon>
                        <p>Nenhuma tarefa encontrada</p>
                        <p>Crie sua primeira tarefa para começar!</p>
                    </EmptyContainer>
                </PainelCard>
            </PainelContainer>
        )
    }

    return (
        <PainelContainer>
            <PainelTitle variant="h4">
                 Painel de Tarefas
            </PainelTitle>
            
            <PainelCard>
                <TarefasContainer>
                    { data && data.map((task: any) => (
                        <TarefaItem key={task?.id}>
                            <TarefaHeader>
                                <TarefaNome variant="h6">
                                    {task?.nome}
                                </TarefaNome>
                                
                                <TarefaMeta>
                                    <TarefaStatus status={task?.status}>
                                        {task?.status ? 'Pendente' : 'Concluída'}
                                    </TarefaStatus>
                                    
                                    <FavoritoIcon>
                                        {task?.favorita ? 
                                            <StarIcon style={{ color: '#ffd700', fontSize: '1.2rem' }} /> : 
                                            <StarBorderIcon style={{ color: '#ccc', fontSize: '1.2rem' }} />
                                        }
                                    </FavoritoIcon>
                                </TarefaMeta>
                            </TarefaHeader>
                            
                            <TarefaDescricao variant="body2">
                                {task?.descricao}
                            </TarefaDescricao>
                            
                            <TarefaInfo>
                                <TarefaData>
                                    <span>📅 Criado em: {task?.created_at.split('T')[0].split('-').reverse().join('/')}</span>
                                    <span>🕐 às {task?.created_at.split('T')[1].split('.')[0]}</span>
                                </TarefaData>
                                
                                <TarefaCor cor={task?.cor} title={`Cor: ${task?.cor}`} />
                            </TarefaInfo>
                        </TarefaItem>
                    ))}
                </TarefasContainer>
            </PainelCard>
        </PainelContainer>
    )
}
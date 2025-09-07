import { useState, useEffect, useRef } from 'react';
import {
    ColorContainer,
    FavoritoIcon,
    TarefaCor,
    TarefaData,
    TarefaHeader,
    TarefaItem,
    TarefaNome,
    TarefaStatus,
    TarefaDescricao,
    TarefaMeta,
    TarefaInfo,
    ActionsContainer,
    TarefaInfoContainer,
    DataCorContainer,
    PaletaCoresContainer,
    PaletaHeader,
    PaletaTitle,
    PaletaCloseButton,
    CoresGrid,
    CorPaletaItem
} from "./PainelTarefasStyles";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import { conexaoApi } from '../../../servicos/api/ConexaoApi';

export const CardTarefa = ({ task, formatarNomeCores, coresDisponiveis, isLastItem }: { task: any, formatarNomeCores: any, coresDisponiveis: any, isLastItem?: boolean }) => {

    // Estados para edição
    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState(task?.nome || '');
    const [editedDescricao, setEditedDescricao] = useState(task?.descricao || '');

    // Estados para controlar mudanças pendentes
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [pendingStatus, setPendingStatus] = useState(task?.status);
    const [pendingFavorita, setPendingFavorita] = useState(task?.favorita);
    const [pendingCor, setPendingCor] = useState(task?.cor);
    const [mostraPaletaCores, setMostraPaletaCores] = useState(false);
    const paletaRef = useRef<HTMLDivElement>(null);

    // useEffect para verificar mudanças quando os estados mudam
    useEffect(() => {
        checkForChanges();
    }, [pendingStatus, pendingFavorita, pendingCor, isEditing, editedNome, editedDescricao]);

    // useEffect para fechar a paleta quando clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (paletaRef.current && !paletaRef.current.contains(event.target as Node)) {
                setMostraPaletaCores(false);
            }
        };

        if (mostraPaletaCores) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mostraPaletaCores]);

    /**Função genrica para atualizar a tarefa */
    const handleAtualizarTarefaBanco = async (objeto: any) => {
        console.log('MANDANDO PARA O BANCO:', objeto)
        const res = await conexaoApi.put(`/tarefas/${objeto.id}`, objeto)
        console.log('RES:', res)
    }

    /** Função para verificar se há mudanças pendentes */
    const checkForChanges = () => {
        const hasStatusChange = pendingStatus !== task?.status;
        const hasFavoritaChange = pendingFavorita !== task?.favorita;
        const hasCorChange = pendingCor !== task?.cor;
        const hasTextChanges = isEditing && (editedNome !== task?.nome || editedDescricao !== task?.descricao);

        setHasUnsavedChanges(hasStatusChange || hasFavoritaChange || hasCorChange || hasTextChanges);
    };

    /** Função para mudar o status da tarefa */
    const handleStatus = (id: string) => {
        const newStatus = !pendingStatus;
        setPendingStatus(newStatus);
        // Não salva automaticamente, apenas marca como pendente
    }

    /** Função para mudar o status de favorita da tarefa */
    const handleFavorita = (id: string) => {
        const newFavorita = !pendingFavorita;
        setPendingFavorita(newFavorita);
        // Não salva automaticamente, apenas marca como pendente
    }

    /** Função para mudar a cor da tarefa */
    const handleCor = (id: string, cor: string) => {
        setPendingCor(cor);
    }

    /** Função para editar a tarefa */
    const handleEditar = (id: string) => {
        setIsEditing(true);
    }

    /** Função para salvar todas as mudanças */
    const handleSalvarTodasMudancas = () => {
        const mudancas: any = {
            id: task?.id,
            nome: isEditing ? editedNome : task?.nome,
            descricao: isEditing ? editedDescricao : task?.descricao,
            status: pendingStatus,
            favorita: pendingFavorita,
            cor: pendingCor,
            created_at: task?.created_at,
            usuario_id: task?.usuario_id
        };

        handleAtualizarTarefaBanco(mudancas);

        // Reset dos estados
        setHasUnsavedChanges(false);
        setIsEditing(false);
        setEditedNome(task?.nome || '');
        setEditedDescricao(task?.descricao || '');
    }

    /** Função para salvar as edições de texto */
    const handleSalvar = () => {
        handleSalvarTodasMudancas();
    }

    /** Função para cancelar a edição */
    const handleCancelar = () => {
        setEditedNome(task?.nome || '');
        setEditedDescricao(task?.descricao || '');
        setIsEditing(false);
    }

    /** Função para deletar a tarefa */
    const handleDeletar = async (id: string) => {
        try {
            const confirmacao = window.confirm('Tem certeza que deseja deletar esta tarefa? Esta ação não pode ser desfeita.');
            
            if (confirmacao) {
                try {
                    const response = await conexaoApi.delete(`/tarefas/${id}`);

                    if (response.status === 200) {
                        console.log('Tarefa deletada com sucesso!');
                        // Aqui você pode adicionar uma atualização do estado
                        // Ex: setTarefas(tarefas.filter(t => t.id !== id));
                    } else {
                        console.log('Erro ao deletar tarefa! Status:', response.status);
                        window.alert('Não foi possível deletar a tarefa. Tente novamente.');
                    }
                } catch (error) {
                    console.error('Erro ao deletar tarefa:', error);
                    window.alert('Não foi possível deletar a tarefa. Tente novamente.');
                }
            }
        } catch (error) {
            console.error('Erro ao exibir confirmação:', error);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <TarefaItem color={pendingCor}>
                <TarefaHeader>
                    <TarefaNome
                        variant="outlined"
                        fullWidth
                        value={isEditing ? editedNome : task?.nome}
                        onChange={(e) => setEditedNome(e.target.value)}
                        disabled={!isEditing}
                        placeholder="Nome da tarefa"
                    />

                    <TarefaMeta>
                        <TarefaStatus
                            $status={pendingStatus}
                            onClick={() => handleStatus(task?.id)}
                        >
                            {pendingStatus ? 'Pendente' : 'Concluída'}
                        </TarefaStatus>

                        <FavoritoIcon onClick={() => handleFavorita(task?.id)}>
                            {pendingFavorita ?
                                <StarIcon style={{ color: '#ffd700' }} /> :
                                <StarBorderIcon style={{ color: '#ccc' }} />
                            }
                        </FavoritoIcon>
                    </TarefaMeta>
                </TarefaHeader>

                <TarefaDescricao
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    value={isEditing ? editedDescricao : task?.descricao}
                    onChange={(e) => setEditedDescricao(e.target.value)}
                    disabled={!isEditing}
                    placeholder="Descrição da tarefa"
                />

                <TarefaInfo>
                    <TarefaInfoContainer>
                        <DataCorContainer>
                            <TarefaData>
                                <span>📅 {task?.created_at.split('T')[0].split('-').reverse().join('/')}</span>
                                <span>🕐 {task?.created_at.split('T')[1].split('.')[0]}</span>
                            </TarefaData>

                            <ColorContainer onClick={() => setMostraPaletaCores(!mostraPaletaCores)} title={`Cor: ${formatarNomeCores(pendingCor)}`}>
                                <TarefaCor $cor={pendingCor} />
                                <ColorLensIcon />
                            </ColorContainer>
                        </DataCorContainer>

                        <ActionsContainer>
                            {isEditing ? (
                                <>
                                    <SaveIcon onClick={handleSalvar} data-icon="save" />
                                    <CancelIcon onClick={handleCancelar} data-icon="cancel" />
                                </>
                            ) : (
                                <>
                                    {hasUnsavedChanges && (
                                        <SaveIcon
                                            onClick={handleSalvarTodasMudancas}
                                            data-icon="save"
                                        />
                                    )}
                                    <EditSquareIcon onClick={() => handleEditar(task?.id)} />
                                    <DeleteIcon onClick={() => handleDeletar(task?.id)} />
                                </>
                            )}
                        </ActionsContainer>
                    </TarefaInfoContainer>
                </TarefaInfo>
            </TarefaItem>

            {/* Paleta de cores */}
            {mostraPaletaCores && (
                <PaletaCoresContainer
                    ref={paletaRef}
                    $position={isLastItem ? 'top' : 'bottom'}
                >
                    <PaletaHeader>
                        <PaletaTitle>Escolher Cor</PaletaTitle>
                        <PaletaCloseButton onClick={() => setMostraPaletaCores(false)}>
                            <CloseIcon />
                        </PaletaCloseButton>
                    </PaletaHeader>

                    <CoresGrid>
                        {coresDisponiveis.map((cor: any) => (
                            <CorPaletaItem
                                key={cor}
                                $cor={cor}
                                $selected={pendingCor === cor}
                                onClick={() => {
                                    handleCor(task?.id, cor);
                                    setMostraPaletaCores(false);
                                }}
                                title={`Cor: ${formatarNomeCores(cor)}`}
                            />
                        ))}
                    </CoresGrid>
                </PaletaCoresContainer>
            )}
        </div>
    )
}
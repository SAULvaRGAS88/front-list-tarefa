import { useState, useMemo } from 'react';
import {
    PainelContainer,
    PainelTitle,
    PainelCard,
    TarefasContainer,
    EmptyContainer,
    EmptyIcon,
    SearchContainer,
    SearchField,
    SearchButton,
    FiltersContainer,
    FilterButton,
    SearchResultMessage,
    AdicionarIcon,
    ColorFilterContainer,
    ColorFilterLabel,
    ColorOptionsContainer,
    ColorFilterButton,
    SectionContainer,
    SectionTitle,
    FavoritasContainer,
    TarefasNormaisContainer
} from './PainelTarefasStyles';
import SearchIcon from '@mui/icons-material/Search';
import { ModalCriacaoAtividade } from './ModalCriacaoAtividade';
import { CardTarefa } from './CardTarefa';

export const PainelTarefas = ({ data }: { data: any }) => {
    // Estados para busca e filtros
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'completed'>('all');
    const [filterToday, setFilterToday] = useState<'all' | 'today'>('all');
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [showColorPalette, setShowColorPalette] = useState(false);

    //estado do componente
    const [openModalCriacao, setOpenModalCriacao] = useState(false)

    // Cores disponíveis (mesmas do modal de criação)
    const coresDisponiveis = [
        '#667eea', '#764ba2', '#f093fb', '#f5576c',
        '#4facfe', '#00f2fe', '#43e97b', '#38f9d7',
        '#ffecd2', '#fcb69f', '#a8edea', '#fed6e3',
        '#ff9a9e', '#fecfef',
    ];

    // switch para formatar o nome das cores para pt-BR
    const formatarNomeCores = (cor: string) => {
        switch (cor) {
            case '#667eea':
                return 'Azul Indigo';
            case '#764ba2':
                return 'Roxo Violeta';
            case '#f093fb':
                return 'Rosa Claro';
            case '#f5576c':
                return 'Vermelho Rosado';
            case '#4facfe':
                return 'Azul Claro';
            case '#00f2fe':
                return 'Ciano';
            case '#43e97b':
                return 'Verde Esmeralda';
            case '#38f9d7':
                return 'Turquesa Claro';
            case '#ffecd2':
                return 'Pêssego Claro';
            case '#fcb69f':
                return 'Laranja Suave';
            case '#a8edea':
                return 'Turquesa Pastel';
            case '#fed6e3':
                return 'Rosa Pastel';
            case '#ff9a9e':
                return 'Rosa Coral';
            case '#fecfef':
                return 'Rosa Bebê';
            default:
                return cor;
        }
    };

    /**Função para abrir o modal de criação de atividade */
    const handleOpenModalCriacao = () => setOpenModalCriacao(true)
    /**Função para fechar o modal de criação de atividade */
    const handleCloseModalCriacao = () => setOpenModalCriacao(false)

    // Função para verificar se a tarefa foi criada hoje
    const isToday = (createdAt: string) => {
        const today = new Date().toISOString().split('T')[0];
        const taskDate = createdAt.split('T')[0];
        return today === taskDate;
    }

    // Função para filtrar e buscar tarefas
    const filteredTasks = useMemo(() => {
        if (!data || data.length === 0) return [];

        return data.filter((task: any) => {
            // Filtro por busca (nome ou descrição)
            const matchesSearch = !searchTerm ||
                task?.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task?.descricao?.toLowerCase().includes(searchTerm.toLowerCase());

            // Filtro por status
            const matchesStatus = filterStatus === 'all' ||
                (filterStatus === 'pending' && task?.status === true) ||
                (filterStatus === 'completed' && task?.status === false);

            // Filtro por data (hoje)
            const matchesToday = filterToday === 'all' ||
                (filterToday === 'today' && isToday(task?.created_at));

            // Filtro por cor
            const matchesColor = !selectedColor || task?.cor === selectedColor;

            return matchesSearch && matchesStatus && matchesToday && matchesColor;
        });
    }, [data, searchTerm, filterStatus, filterToday, selectedColor]);

    // Separar tarefas favoritas das normais
    const { tarefasFavoritas, tarefasNormais } = useMemo(() => {
        const favoritas = filteredTasks.filter((task: any) => task?.favorita === true);
        const normais = filteredTasks.filter((task: any) => task?.favorita === false);

        return {
            tarefasFavoritas: favoritas,
            tarefasNormais: normais
        };
    }, [filteredTasks]);

    // Função para lidar com seleção de cor
    const handleColorSelect = (cor: string) => {
        setSelectedColor(selectedColor === cor ? '' : cor);
        setShowColorPalette(false);
    }

    // Função para obter o nome da cor selecionada
    const getSelectedColorName = () => {
        if (!selectedColor) return 'Cores';
        return `Cor: ${formatarNomeCores(selectedColor)}`;
    }

    if (!data || data.length === 0 || (data.length === 1 && data[0] === null)) {
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
            <PainelTitle variant="h4" color="white">
                Painel de Tarefas
            </PainelTitle>

            {/* Container de busca */}
            <SearchContainer>
                <SearchField
                    placeholder="Digite para buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <SearchButton>
                    <SearchIcon />
                </SearchButton>

                <SearchButton onClick={handleOpenModalCriacao}>
                    <AdicionarIcon />
                </SearchButton>
            </SearchContainer>

            {/* Container de filtros */}
            <FiltersContainer>
                <FilterButton
                    $active={filterStatus === 'all'}
                    onClick={() => setFilterStatus('all')}
                >
                    Todas
                </FilterButton>
                <FilterButton
                    $active={filterStatus === 'pending'}
                    onClick={() => setFilterStatus('pending')}
                >
                    Pendentes
                </FilterButton>
                <FilterButton
                    $active={filterStatus === 'completed'}
                    onClick={() => setFilterStatus('completed')}
                >
                    Concluídas
                </FilterButton>
                <FilterButton
                    $active={filterToday === 'today'}
                    onClick={() => setFilterToday(filterToday === 'today' ? 'all' : 'today')}
                >
                    📅 Hoje
                </FilterButton>
                <FilterButton
                    $active={!!selectedColor}
                    onClick={() => setShowColorPalette(!showColorPalette)}
                >
                    🎨 {getSelectedColorName()}
                </FilterButton>
            </FiltersContainer>

            {/* Filtro por cores - aparece apenas quando clicado */}
            {showColorPalette && (
                <ColorFilterContainer>
                    <ColorFilterLabel variant="body2">
                        Escolha uma cor:
                    </ColorFilterLabel>
                    <ColorOptionsContainer>
                        <ColorFilterButton
                            $cor="transparent"
                            $selected={!selectedColor}
                            onClick={() => handleColorSelect('')}
                            title="Todas as cores"
                        >
                            ✕
                        </ColorFilterButton>
                        {coresDisponiveis.map((cor) => (
                            <ColorFilterButton
                                key={cor}
                                $cor={cor}
                                $selected={selectedColor === cor}
                                onClick={() => handleColorSelect(cor)}
                                title={cor}
                            />
                        ))}
                    </ColorOptionsContainer>
                </ColorFilterContainer>
            )}

            {/* Mensagem de resultado da busca */}
            {searchTerm && (
                <SearchResultMessage>
                    {filteredTasks.length > 0
                        ? `Encontradas ${filteredTasks.length} tarefa(s) para "${searchTerm}"`
                        : `Nenhuma tarefa encontrada para "${searchTerm}"`
                    }
                </SearchResultMessage>
            )}

            {/* Seção de Tarefas Favoritas */}
            {tarefasFavoritas.length > 0 && (
                <SectionContainer>
                    <SectionTitle variant="h6">
                        ⭐ Tarefas Favoritas ({tarefasFavoritas.length})
                    </SectionTitle>
                    <FavoritasContainer>
                        <TarefasContainer>
                            {tarefasFavoritas.map((task: any, index: number) => (
                                <CardTarefa 
                                    key={task?.id} 
                                    task={task} 
                                    formatarNomeCores={formatarNomeCores} 
                                    coresDisponiveis={coresDisponiveis}
                                    isLastItem={index === tarefasFavoritas.length - 1}
                                />
                            ))}
                        </TarefasContainer>
                    </FavoritasContainer>
                </SectionContainer>
            )}

            {/* Seção de Tarefas Normais */}
            {tarefasNormais.length > 0 && (
                <SectionContainer>
                    <SectionTitle variant="h6">
                        📝 Outras Tarefas ({tarefasNormais.length})
                    </SectionTitle>
                    <TarefasNormaisContainer>
                        <TarefasContainer>
                            {tarefasNormais.map((task: any, index: number) => (
                                <CardTarefa 
                                    key={task?.id} 
                                    task={task} 
                                    formatarNomeCores={formatarNomeCores}
                                    coresDisponiveis={coresDisponiveis}
                                    isLastItem={index === tarefasNormais.length - 1}
                                />
                            ))}
                        </TarefasContainer>
                    </TarefasNormaisContainer>
                </SectionContainer>
            )}

            {/* Mensagem quando não há tarefas */}
            {filteredTasks.length === 0 && (
                <PainelCard>
                    <EmptyContainer>
                        <EmptyIcon>🔍</EmptyIcon>
                        <p>Nenhuma tarefa encontrada com os filtros aplicados</p>
                        <p>Tente ajustar sua busca ou filtros</p>
                    </EmptyContainer>
                </PainelCard>
            )}

            {/* modal de criação de atividade */}
            <ModalCriacaoAtividade open={openModalCriacao} onClose={handleCloseModalCriacao} />
        </PainelContainer>
    )
}
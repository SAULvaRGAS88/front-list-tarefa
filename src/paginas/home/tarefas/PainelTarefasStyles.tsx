import styled from "styled-components"
import { Typography, Card, TextField, IconButton, Button } from "@mui/material"
import NoteAddIcon from '@mui/icons-material/NoteAdd';

// Container principal
export const PainelContainer = styled.div`
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`

// Título do painel
export const PainelTitle = styled(Typography)`
  && {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
    background: linear-gradient(135deg,rgb(255, 255, 255) 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    
    @media (min-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }
`

// Container de busca
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    padding: 0.75rem;
  }
`

// Campo de busca
export const SearchField = styled(TextField)`
  && {
    flex: 1;
    
    .MuiOutlinedInput-root {
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.8);
      
      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: #667eea;
      }
      
      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #667eea;
        border-width: 2px;
      }
    }
    
    .MuiInputLabel-root {
      color: #666;
      
      &.Mui-focused {
        color: #667eea;
      }
    }
  }
`

// Botão de busca
export const SearchButton = styled(IconButton)`
  && {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 8px;
    padding: 0.5rem;
    
    &:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
      transform: scale(1.05);
    }
  }
`

// Container de filtros
export const FiltersContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`

// Botão de filtro
export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background: ${props => props.$active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.$active ? 'white' : '#666'};
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`

// Container de seleção de cores
export const ColorFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

// Label para filtro de cores
export const ColorFilterLabel = styled(Typography)`
  && {
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
    margin-right: 0.5rem;
  }
`

// Container de cores
export const ColorOptionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

// Botão de cor para filtro
export const ColorFilterButton = styled.button<{ $cor: string; $selected: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid ${props => props.$selected ? '#333' : 'transparent'};
  background-color: ${props => props.$cor};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`

// Card principal
export const PainelCard = styled(Card)`
  && {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    
    @media (min-width: 768px) {
      border-radius: 20px;
      padding: 1.5rem;
    }
  }
`

// Container das tarefas - usando grid
export const TarefasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`

// Item de tarefa - menor e mais compacto
export const TarefaItem = styled.div<{ color: string }>`
  background: linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%);
  border-radius: 12px;
  padding: 0.75rem;
  border-left: 7px solid ${props => props.color || '#667eea'};
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (min-width: 768px) {
    border-radius: 15px;
    padding: 1rem;
    min-height: 140px;
  }
`

// Cabeçalho da tarefa - mais compacto
export const TarefaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0.75rem;
  }
`

// Nome da tarefa - menor
export const TarefaNome = styled(TextField)`
  && {
    flex: 1;
    
    .MuiOutlinedInput-root {
      font-size: 0.9rem;
      font-weight: 600;
      color: #333;
      line-height: 1.3;
      padding: 0;
      
      @media (min-width: 768px) {
        font-size: 1rem;
      }
      
      fieldset {
        border: none;
      }
      
      &:hover fieldset {
        border: none;
      }
      
      &.Mui-focused fieldset {
        border: 1px solid #667eea;
        border-radius: 4px;
      }
    }
    
    .MuiInputBase-input {
      padding: 0;
      font-size: 0.9rem;
      font-weight: 600;
      color: #333;
      
      @media (min-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`

// Container do status e favorito - mais compacto
export const TarefaMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
`

// Status da tarefa - menor
export const TarefaStatus = styled.span<{ $status: boolean }>`
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => props.$status ? '#ff6b6b' : '#51cf66'};
  color: white;
  cursor: pointer;
  
  @media (min-width: 768px) {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }
`

// Descrição da tarefa - menor e truncada
export const TarefaDescricao = styled(TextField)`
  && {
    flex: 1;
    margin-bottom: 0.5rem;
    
    @media (min-width: 768px) {
      margin-bottom: 0.75rem;
    }
    
    .MuiOutlinedInput-root {
      color: #666;
      font-size: 0.8rem;
      line-height: 1.4;
      padding: 0;
      
      @media (min-width: 768px) {
        font-size: 0.85rem;
      }
      
      fieldset {
        border: none;
      }
      
      &:hover fieldset {
        border: none;
      }
      
      &.Mui-focused fieldset {
        border: 1px solid #667eea;
        border-radius: 4px;
      }
    }
    
    .MuiInputBase-input {
      padding: 0;
      color: #666;
      font-size: 0.8rem;
      line-height: 1.4;
      
      @media (min-width: 768px) {
        font-size: 0.85rem;
      }
    }
  }
`

// Informações da tarefa - mais compactas
export const TarefaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  color: #888;
  margin-top: auto;
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`

// Data de criação - mais compacta
export const TarefaData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0.25rem;
  }
`

// Cor da tarefa - menor
export const TarefaCor = styled.div<{ $cor: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => props.$cor || '#667eea'};
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`

// Ícone de favorito - menor
export const FavoritoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  .MuiSvgIcon-root {
    font-size: 1.3rem !important;
    
    @media (min-width: 768px) {
      font-size: 1.5rem !important;
    }
  }
`

// Container para cor com ícone
export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .MuiSvgIcon-root {
    font-size: 1.2rem !important;
    color: #666;
    
    @media (min-width: 768px) {
      font-size: 1.4rem !important;
    }
  }
`

// Container de ações (editar/deletar)
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  justify-content: flex-end;
  flex-shrink: 0;
  
  .MuiSvgIcon-root {
    font-size: 1.5rem !important;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
    
    &:first-child {
      color: #2196f3;
      
      &:hover {
        background-color: rgba(33, 150, 243, 0.1);
      }
    }
    
    &:last-child {
      color: #f44336;
      
      &:hover {
        background-color: rgba(244, 67, 54, 0.1);
      }
    }
    
    /* Ícones de salvar e cancelar */
    &[data-icon="save"] {
      color: #4caf50;
      
      &:hover {
        background-color: rgba(76, 175, 80, 0.1);
      }
    }
    
    &[data-icon="cancel"] {
      color: #ff9800;
      
      &:hover {
        background-color: rgba(255, 152, 0, 0.1);
      }
    }
    
    @media (min-width: 768px) {
      font-size: 1.8rem !important;
      padding: 0.6rem;
    }
  }
`

// Container de informações da tarefa - reorganizado
export const TarefaInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  width: 100%;
`

// Container de data e cor
export const DataCorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  justify-content: flex-start;
  
  /* Empilha data e cor verticalmente em telas pequenas */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`

// Container da paleta de cores
export const PaletaCoresContainer = styled.div<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  ${props => props.$position === 'top' ? 'bottom: 100%;' : 'top: 100%;'}
  right: 1rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 200px;
  margin-${props => props.$position === 'top' ? 'bottom' : 'top'}: 0.5rem;
  
  @media (max-width: 480px) {
    right: 0.5rem;
    min-width: 180px;
  }
`

// Header da paleta com botão de fechar
export const PaletaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`

// Título da paleta
export const PaletaTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #333;
`

// Botão de fechar
export const PaletaCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  .MuiSvgIcon-root {
    font-size: 1rem;
    color: #666;
  }
`

// Container das cores
export const CoresGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

// Item de cor na paleta
export const CorPaletaItem = styled.div<{ $cor: string, $selected: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.$cor};
  cursor: pointer;
  border: ${props => props.$selected ? '3px solid #333' : '2px solid #fff'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`

// Container vazio
export const EmptyContainer = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`

// Ícone vazio
export const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`

// Modal de confirmação de exclusão
export const ModalConfirmacaoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
`;

export const ModalConfirmacaoCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

export const ModalConfirmacaoIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #ff6b6b, #ff5252);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);

  .MuiSvgIcon-root {
    font-size: 2rem;
    color: white;
  }
`;

export const ModalConfirmacaoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const ModalConfirmacaoMessage = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 2rem 0;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ModalConfirmacaoActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const ModalConfirmacaoButton = styled.button<{ $variant: 'cancel' | 'delete' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;

  ${props => props.$variant === 'cancel' ? `
    background: #f5f5f5;
    color: #666;
    
    &:hover {
      background: #e0e0e0;
      transform: translateY(-1px);
    }
  ` : `
    background: linear-gradient(135deg, #ff6b6b, #ff5252);
    color: white;
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #ff5252, #ff1744);
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(255, 107, 107, 0.4);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

// Container do ícone de adição
export const AdicionarIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  }
  
  .MuiSvgIcon-root {
    color: white;
    font-size: 2rem;
  }
`

// Mensagem de resultado da busca
export const SearchResultMessage = styled.div`
  text-align: center;
  padding: 1rem;
  color: #666;
  font-style: italic;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  margin-bottom: 1rem;
`

// Ícone de adição
export const AdicionarIcon = styled(NoteAddIcon)`
  && {
    color: white;
    font-size: 2rem;
  }
`

// Container de seção (favoritas vs normais)
export const SectionContainer = styled.div`
  margin-bottom: 2rem;
`

// Título da seção
export const SectionTitle = styled(Typography)`
  && {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
`

// Container de tarefas favoritas
export const FavoritasContainer = styled.div`
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-left: 7px solid #ffd700;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
  
  @media (min-width: 768px) {
    border-radius: 20px;
    padding: 1.5rem;
  }
`

// Container de tarefas normais
export const TarefasNormaisContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem;
   border-left: 7px solid gray;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
  
  @media (min-width: 768px) {
    border-radius: 20px;
    padding: 1.5rem;
  }
`

// Botão para criar primeira tarefa
export const BotaoCriarPrimeiraTarefa = styled(Button)`
  && {
    margin-top: 1.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
    text-transform: none;
    
    &:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
    }
    
    .MuiButton-startIcon {
      margin-right: 0.5rem;
    }
    
    @media (max-width: 768px) {
      padding: 0.6rem 1.5rem;
      font-size: 0.9rem;
      margin-top: 1rem;
    }
  }
`

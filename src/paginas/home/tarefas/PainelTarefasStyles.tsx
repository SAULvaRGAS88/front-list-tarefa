import styled from "styled-components"
import { Typography, Card, TextField, IconButton } from "@mui/material"
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

// Container das tarefas
export const TarefasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

// Item de tarefa
export const TarefaItem = styled.div`
  background: linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%);
  border-radius: 12px;
  padding: 1rem;
  border-left: 4px solid #667eea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (min-width: 768px) {
    border-radius: 15px;
    padding: 1.25rem;
  }
`

// Cabeçalho da tarefa
export const TarefaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 0.5rem;
`

// Nome da tarefa
export const TarefaNome = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    flex: 1;
    
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`

// Container do status e favorito
export const TarefaMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

// Status da tarefa - usando prop transiente
export const TarefaStatus = styled.span<{ $status: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => props.$status ? '#ff6b6b' : '#51cf66'};
  color: white;
  
  @media (min-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
`

// Descrição da tarefa
export const TarefaDescricao = styled(Typography)`
  && {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
    
    @media (min-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
`

// Informações da tarefa
export const TarefaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #888;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
  }
`

// Data de criação
export const TarefaData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

// Cor da tarefa - usando prop transiente
export const TarefaCor = styled.div<{ $cor: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.$cor || '#667eea'};
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`

// Ícone de favorito
export const FavoritoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
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
  border-left: 4px solid #ffd700;
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    border-radius: 20px;
    padding: 1.5rem;
  }
`
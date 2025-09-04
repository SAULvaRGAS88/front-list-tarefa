import styled from "styled-components"
import { Typography, Card } from "@mui/material"

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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

// Status da tarefa
export const TarefaStatus = styled.span<{ status: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => props.status ? '#ff6b6b' : '#51cf66'};
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

// Cor da tarefa
export const TarefaCor = styled.div<{ cor: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.cor || '#667eea'};
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

import styled from "styled-components"
import { Typography, Button, TextField } from "@mui/material"

// Título do modal
export const ModalTitle = styled(Typography)`
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
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }
`

// Subtítulo
export const ModalSubtitle = styled(Typography)`
  && {
    color: #666;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: center;
    
    @media (min-width: 768px) {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
`

// Container do formulário
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  
  @media (min-width: 768px) {
    gap: 1.25rem;
  }
`

// Campo de texto estilizado
export const StyledTextField = styled(props => <TextField {...props} />)`
  && {
    .MuiOutlinedInput-root {
      border-radius: 12px;
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

// Botão estilizado
export const StyledButton = styled(props => <Button {...props} />)`
  && {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 12px 24px;
    font-weight: 600;
    text-transform: none;
    font-size: 1rem;
    margin-top: 1rem;
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
    min-height: 44px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 25px rgba(102, 126, 234, 0.4);
    }
    
    &:disabled {
      background: #ccc;
      transform: none;
      box-shadow: none;
    }
  }
`

// Container de ações
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
  }
`

// Container de cores
export const CoresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

// Botão de cor - usando props transientes
export const CorButton = styled.button<{ $cor: string; $selected: boolean }>`
  width: 40px;
  height: 40px;
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
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`

// Label para cores
export const CoresLabel = styled(Typography)`
  && {
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }
`
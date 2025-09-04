import styled from "styled-components"
import { Typography, Button } from "@mui/material"

// Container principal
export const NotFoundContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
`

// Card principal
export const NotFoundCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  
  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
  }
`

// Ícone 404
export const NotFoundIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 5rem;
    margin-bottom: 1.5rem;
  }
`

// Título principal
export const NotFoundTitle = styled(Typography)`
  && {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  }
`

// Subtítulo
export const NotFoundSubtitle = styled(Typography)`
  && {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1rem;
    line-height: 1.6;
    
    @media (min-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 2.5rem;
    }
  }
`

// Botão estilizado
export const StyledButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 12px 24px;
    font-weight: 600;
    text-transform: none;
    font-size: 1rem;
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
    min-height: 44px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 25px rgba(102, 126, 234, 0.4);
    }
    
    @media (min-width: 768px) {
      padding: 14px 28px;
      font-size: 1.1rem;
    }
  }
`

// Container de ações
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`

// Código de erro estilizado
export const ErrorCode = styled.div`
  font-size: 6rem;
  font-weight: 900;
  color: #667eea;
  line-height: 1;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    font-size: 8rem;
    margin-bottom: 1.5rem;
  }
`

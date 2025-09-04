import styled from "styled-components"
import { Typography, Button } from "@mui/material"

// Header
export const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
`

// Logo
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 50px;
    height: 50px;
  }

`

// Container principal da página home
export const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`

// Card principal
export const HomeCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
  }
`

// Título principal
export const HomeTitle = styled(Typography)`
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
    
    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }
`

// Subtítulo
export const HomeSubtitle = styled(Typography)`
  && {
    color: #666;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    line-height: 1.5;
    
    @media (min-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      line-height: 1.6;
    }
  }
`

// Seção de atividades
export const AtividadesSection = styled.div`
  background: linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%);
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem 0;
  border-left: 3px solid #667eea;
  
  @media (min-width: 768px) {
    border-radius: 15px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-left: 4px solid #667eea;
  }
`

// Título da seção de atividades
export const AtividadesTitle = styled(Typography)`
  && {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (min-width: 768px) {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }
`

// Item de atividade
export const AtividadeItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 0.75rem;
  margin: 0.5rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 3px solid #667eea;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }
  
  @media (min-width: 768px) {
    border-radius: 10px;
    padding: 1rem;
  }
`

// Texto da atividade
export const AtividadeText = styled(Typography)`
  && {
    color: #555;
    font-size: 0.85rem;
    margin: 0.25rem 0;
    
    @media (min-width: 768px) {
      font-size: 0.95rem;
    }
  }
`

// Botão estilizado
export const StyledButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: 600;
    text-transform: none;
    font-size: 0.9rem;
    margin-top: 0.75rem;
    box-shadow: 0 6px 15px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
    min-height: 44px; // Para melhor acessibilidade em mobile
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
    }
    
    @media (min-width: 768px) {
      border-radius: 12px;
      padding: 12px 24px;
      font-size: 1rem;
      margin-top: 1rem;
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
      
      &:hover {
        box-shadow: 0 12px 25px rgba(102, 126, 234, 0.4);
      }
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
    flex-wrap: wrap;
    margin-top: 2rem;
  }
`

// Ícone decorativo
export const IconContainer = styled.div`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

// Estatísticas
export const StatsContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 0;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }
`

export const StatCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 6px 15px rgba(102, 126, 234, 0.3);
  
  @media (min-width: 768px) {
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }
`

export const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  
  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`

export const StatLabel = styled.div`
  font-size: 0.8rem;
  opacity: 0.9;
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`

// Container para modal responsivo
export const ModalCard = styled.div`
  width: 95%;
  max-width: 500px;
  height: 90vh;                 
  margin: auto;              
  border-radius: 20px;     
  overflow-y: auto; 
  display: flex;


  @media (min-width: 768px) {
    width: 90%;
    max-width: 600px;
  }
`;


// Container para botões do modal
export const ModalActionsContainer = styled.div`
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
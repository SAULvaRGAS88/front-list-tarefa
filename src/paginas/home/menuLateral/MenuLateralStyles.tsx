import styled from "styled-components"
import { Typography, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

// Container do menu
export const MenuContainer = styled.div`
  width: 280px;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
`

// Header do menu
export const MenuHeader = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

// Título do menu
export const MenuTitle = styled(Typography)`
  && {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    text-align: center;
    margin: 0;
  }
`

// Subtítulo do menu
export const MenuSubtitle = styled(Typography)`
  && {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    margin-top: 0.5rem;
  }
`

// Container da lista
export const MenuListContainer = styled.div`
  flex: 1;
  padding: 1rem 0;
`

// Item do menu
export const MenuItem = styled(ListItemButton)`
  && {
    margin: 0.5rem 1rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    
    &:active {
      transform: translateX(-3px);
    }
  }
`

// Ícone do item
export const MenuItemIcon = styled(ListItemIcon)`
  && {
    color: white;
    min-width: 40px;
    
    .MuiSvgIcon-root {
      font-size: 1.5rem;
    }
  }
`

// Texto do item
export const MenuItemText = styled(ListItemText)`
  && {
    .MuiTypography-root {
      color: white;
      font-weight: 600;
      font-size: 1rem;
    }
  }
`

// Container de informações do usuário
export const UserInfoContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem;
  margin: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

// Nome do usuário
export const UserName = styled(Typography)`
  && {
    color: white;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
`

// Email do usuário
export const UserEmail = styled(Typography)`
  && {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
  }
`

// Container de ações
export const ActionsContainer = styled.div`
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`

// Botão de ação
export const ActionButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`

// Botão de sair
export const LogoutButton = styled(ActionButton)`
  background: rgba(220, 53, 69, 0.2);
  border-color: rgba(220, 53, 69, 0.3);
  
  &:hover {
    background: rgba(220, 53, 69, 0.3);
  }
`
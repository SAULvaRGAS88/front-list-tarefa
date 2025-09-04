import { Button, Modal, TextField } from "@mui/material"
import styled from "styled-components"

// Styled Components
export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
  box-sizing: border-box;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  
  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
    max-width: 450px;
  }
`

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`

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

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const WelcomeText = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

export const ModalCastroContainer = styled(props => <Modal {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TituloCadastro = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`
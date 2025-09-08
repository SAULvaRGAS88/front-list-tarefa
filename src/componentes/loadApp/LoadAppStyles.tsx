import styled, { keyframes } from "styled-components"

// Animação de entrada
const fadeIn = keyframes`
    from {
        opacity: 0;
        backdrop-filter: blur(0px);
    }
    to {
        opacity: 1;
        backdrop-filter: blur(8px);
    }
`

// Animação de saída
const fadeOut = keyframes`
    from {
        opacity: 1;
        backdrop-filter: blur(8px);
    }
    to {
        opacity: 0;
        backdrop-filter: blur(0px);
    }
`

// Animação do card
const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-30px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`

// Animação do spinner
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

// Animação pulsante para o texto
const pulse = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
`

export const LoadAppContainer = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 1rem;
    animation: ${props => props.$isOpen ? fadeIn : fadeOut} 0.3s ease-out;
    backdrop-filter: blur(8px);
`

export const LoadAppContent = styled.div`
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-radius: 24px;
    padding: 3rem 2rem;
    max-width: 320px;
    width: 100%;
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.1);
    text-align: center;
    animation: ${slideIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
    }

    @media (max-width: 480px) {
        padding: 2.5rem 1.5rem;
        max-width: 280px;
    }
`

export const LoadAppIcon = styled.div`
    margin-bottom: 1.5rem;
    position: relative;
    
    .MuiCircularProgress-root {
        animation: ${spin} 1s linear infinite;
        filter: drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3));
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
        animation: ${pulse} 2s ease-in-out infinite;
    }
`

export const LoadAppTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 0.5rem 0;
    background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${pulse} 2s ease-in-out infinite;

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`

export const LoadAppSubtitle = styled.p`
    font-size: 0.9rem;
    color: #64748b;
    margin: 0;
    font-weight: 400;
    opacity: 0.8;
`
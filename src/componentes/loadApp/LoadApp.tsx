import { CircularProgress } from "@mui/material"
import { LoadAppContainer, LoadAppContent, LoadAppIcon, LoadAppTitle, LoadAppSubtitle } from "./LoadAppStyles"
import { useEffect, useState } from "react"

export const LoadApp = ({ open }: { open: boolean }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (open) {
            setIsVisible(true)
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300)
            return () => clearTimeout(timer)
        }
    }, [open])

    if (!isVisible) return null

    return (
        <LoadAppContainer $isOpen={open}>
            <LoadAppContent>
                <LoadAppIcon>
                    <CircularProgress 
                        size={60} 
                        thickness={4}
                        sx={{
                            color: '#6366f1',
                            '& .MuiCircularProgress-circle': {
                                strokeLinecap: 'round',
                            }
                        }}
                    />
                </LoadAppIcon>
                
                <LoadAppTitle>Carregando...</LoadAppTitle>
                <LoadAppSubtitle>Por favor, aguarde</LoadAppSubtitle>
            </LoadAppContent>
        </LoadAppContainer>
    )
}
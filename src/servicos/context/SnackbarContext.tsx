import { createContext, useContext, useState } from 'react'
import { SnackbarApp } from '../../componentes/snackbarApp/SnackbarApp'

interface SnackbarContextType {
    showSnackbar: (message: string, severity: 'success' | 'error' | 'warning' | 'info', autoHideDuration?: number) => void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined)

export const useSnackbar = () => {
    const context = useContext(SnackbarContext)
    if (!context) {
        throw new Error('useSnackbar deve ser usado dentro de um SnackbarProvider')
    }
    return context
}

interface SnackbarProviderProps {
    children: React.ReactNode
}

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
    const [snackbar, setSnackbar] = useState<{
        open: boolean
        message: string
        severity: 'success' | 'error' | 'warning' | 'info'
        autoHideDuration?: number
    }>({
        open: false,
        message: '',
        severity: 'info',
        autoHideDuration: 6000
    })

    const showSnackbar = (message: string, severity: 'success' | 'error' | 'warning' | 'info', autoHideDuration?: number) => {
        setSnackbar({
            open: true,
            message,
            severity,
            autoHideDuration: autoHideDuration || 6000
        })
    }

    const handleClose = () => {
        setSnackbar(prev => ({ ...prev, open: false }))
    }

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <SnackbarApp 
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleClose}
                autoHideDuration={snackbar.autoHideDuration}
            />
        </SnackbarContext.Provider>
    )
}

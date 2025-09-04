//componente de snackbar app

import { Alert, Snackbar } from "@mui/material"

interface SnackbarAppProps {
    open: boolean
    message: string
    severity: 'success' | 'error' | 'warning' | 'info'
    onClose: () => void
    autoHideDuration?: number
}

export const SnackbarApp = ({ 
    open, 
    message, 
    severity, 
    onClose, 
    autoHideDuration = 6000 
}: SnackbarAppProps) => {
    return (
        <Snackbar 
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert
                severity={severity}
                variant="filled"               
                sx={{ width: '100%' }}
                onClose={onClose}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}
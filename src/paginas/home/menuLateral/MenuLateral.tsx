import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { 
    MenuContainer,
    MenuHeader,
    MenuTitle,
    MenuSubtitle,
    MenuListContainer,
    MenuItem,
    MenuItemIcon,
    MenuItemText,
    UserInfoContainer,
    UserName,
    UserEmail,
    ActionsContainer,
    LogoutButton
} from './MenuLateralStyles';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function MenuLateral({ open, onClose }: { open: boolean, onClose: () => void }) {
    //navegação
    const navigate = useNavigate()

    //função para navegar para a página de home
    const handleNavigateHome = () => {
        navigate(`/home/${getUser().id}`)
        onClose()
    }

    //função para navegar para a página de login
    const handleNavigateLogin = () => {
        localStorage.removeItem('usuario')
        navigate('/')
        onClose()
    }
   
    //função para obter o usuário logado
    const getUser = () => {
        const user = localStorage.getItem('usuario')
        return user ? JSON.parse(user) : null
    }

    const list = () => (
        <MenuContainer>
            <MenuHeader>
                <MenuTitle variant="h6">
                    📋 Menu
                </MenuTitle>
                <MenuSubtitle variant="body2">
                    Sistema de Gestão de Tarefas
                </MenuSubtitle>
            </MenuHeader>

            <UserInfoContainer>
                <UserName variant="body1">
                    👋 Olá, {getUser()?.nome}
                </UserName>
                <UserEmail variant="body2">
                    Usuário logado
                </UserEmail>
            </UserInfoContainer>

            <MenuListContainer>
                <List>
                    <ListItem disablePadding>
                        <MenuItem onClick={handleNavigateHome}>
                            <MenuItemIcon>
                                <HomeIcon />
                            </MenuItemIcon>
                            <MenuItemText primary="Início" />
                        </MenuItem>
                    </ListItem>

                    <ListItem disablePadding>
                        <MenuItem onClick={() => console.log('Perfil')}>
                            <MenuItemIcon>
                                <PersonIcon />
                            </MenuItemIcon>
                            <MenuItemText primary="Perfil" />
                        </MenuItem>
                    </ListItem>

                    <ListItem disablePadding>
                        <MenuItem onClick={() => console.log('Configurações')}>
                            <MenuItemIcon>
                                <SettingsIcon />
                            </MenuItemIcon>
                            <MenuItemText primary="Configurações" />
                        </MenuItem>
                    </ListItem>
                </List>
            </MenuListContainer>

            <ActionsContainer>
                <LogoutButton onClick={handleNavigateLogin}>
                    <ExitToAppIcon style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} />
                    Sair da Conta
                </LogoutButton>
            </ActionsContainer>
        </MenuContainer>
    );

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none'
                }
            }}
        >
            {list()}
        </Drawer>
    );
}
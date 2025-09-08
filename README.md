# 📋 Sistema de Gestão de Tarefas

## 📖 Visão Geral

O **Sistema de Gestão de Tarefas** é uma aplicação web moderna desenvolvida em React com TypeScript, que permite aos usuários gerenciar suas tarefas de forma eficiente e organizada. A aplicação oferece uma interface intuitiva e responsiva para criação, edição, exclusão e organização de tarefas.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca principal para interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e servidor de desenvolvimento
- **React Router DOM** - Roteamento de páginas
- **Material-UI (MUI)** - Componentes de interface
- **Styled-Components** - Estilização CSS-in-JS
- **Axios** - Cliente HTTP para comunicação com API

### Backend
- **API REST** hospedada em Vercel
- **Base URL**: `https://back-list-tarefas.vercel.app/`

## 🏗️ Arquitetura da Aplicação

### Estrutura de Pastas
```
src/
├── componentes/          # Componentes reutilizáveis
│   ├── loadApp/         # Componente de loading
│   ├── snackbarApp/     # Sistema de notificações
│   └── styles/          # Estilos globais
├── hooks/               # Custom hooks
├── paginas/             # Páginas da aplicação
│   ├── home/           # Página principal
│   ├── login/          # Autenticação
│   └── notFound/       # Página 404
├── servicos/           # Serviços e contextos
│   ├── api/           # Configuração da API
│   └── context/       # Contextos React
└── assets/            # Recursos estáticos
```

## 🔐 Sistema de Autenticação

### Funcionalidades
- **Login de usuário** com email e senha
- **Cadastro de novos usuários** com validação
- **Persistência de sessão** via localStorage
- **Validação de rotas** protegidas
- **Redirecionamento automático** para usuários não autenticados

### Fluxo de Autenticação
1. Usuário acessa a aplicação
2. Sistema verifica se há sessão ativa
3. Se não autenticado → redireciona para login
4. Se autenticado → redireciona para home
5. Logout limpa localStorage e redireciona para login

## 📱 Páginas e Funcionalidades

### 1. Página de Login (`/`)
- **Formulário de login** com email e senha
- **Modal de cadastro** para novos usuários
- **Validação de campos** obrigatórios
- **Feedback visual** com loading e notificações
- **Design responsivo** mobile-first

### 2. Página Home (`/home/:idUsuario`)
- **Dashboard principal** com todas as funcionalidades
- **Validação de usuário** por ID na URL
- **Modal de boas-vindas** com estatísticas
- **Menu lateral** para navegação
- **Painel de tarefas** completo

### 3. Página 404 (`/not-found`)
- **Página de erro** para rotas inexistentes
- **Design consistente** com o resto da aplicação
- **Redirecionamento** para página principal

## 🎯 Sistema de Tarefas

### Funcionalidades Principais

#### 1. Criação de Tarefas
- **Modal de criação** com campos obrigatórios
- **Seleção de cores** (14 opções disponíveis)
- **Sistema de favoritos** (estrela)
- **Validação robusta** de dados
- **Feedback visual** durante criação

#### 2. Visualização e Organização
- **Cards responsivos** para cada tarefa
- **Separação visual** entre favoritas e normais
- **Sistema de cores** para categorização
- **Layout em grid** adaptativo
- **Informações detalhadas** (nome, descrição, data)

#### 3. Edição de Tarefas
- **Edição inline** de nome e descrição
- **Alteração de status** (pendente/concluída)
- **Mudança de cor** com paleta visual
- **Sistema de favoritos** toggle
- **Salvamento manual** com ícone de disquete
- **Validação de mudanças** pendentes

#### 4. Exclusão de Tarefas
- **Modal de confirmação** moderno
- **Exclusão segura** com validação
- **Feedback visual** durante processo
- **Atualização automática** da lista

### Sistema de Filtros e Busca

#### 1. Busca por Texto
- **Busca em tempo real** por nome da tarefa
- **Filtro instantâneo** conforme digitação
- **Mensagem de resultado** quando não encontra

#### 2. Filtros por Status
- **Todas as tarefas** (padrão)
- **Tarefas pendentes** (status: true)
- **Tarefas concluídas** (status: false)

#### 3. Filtros por Data
- **Todas as datas**
- **Tarefas de hoje** (criadas hoje)

#### 4. Filtros por Cor
- **Paleta de cores** para seleção
- **Filtro por cor específica**
- **Nomes em português** para cores

## 🎨 Sistema de Design

### Características Visuais
- **Design moderno** com gradientes e sombras
- **Paleta de cores** consistente
- **Animações suaves** e transições
- **Ícones Material-UI** para melhor UX
- **Tipografia clara** e legível

### Responsividade
- **Mobile-first** approach
- **Breakpoints** em 768px
- **Layout adaptativo** para diferentes telas
- **Componentes flexíveis** e escaláveis

### Cores Disponíveis
- **14 cores** predefinidas para tarefas
- **Nomes em português** para melhor UX
- **Cores vibrantes** e contrastantes
- **Sistema de favoritos** com cor dourada

## 🔧 Componentes Técnicos

### 1. Sistema de Notificações (Snackbar)
- **Context global** para notificações
- **4 tipos**: success, error, warning, info
- **Auto-hide** configurável
- **Posicionamento** consistente

### 2. Sistema de Loading
- **Loading centralizado** na aplicação
- **Estados visuais** durante operações
- **Prevenção de múltiplas** requisições
- **Animações** de carregamento

### 3. Hook de Tamanho de Tela
- **Detecção automática** de mudanças
- **Responsividade** dinâmica
- **Otimização** de performance

### 4. Validação de Usuário
- **Verificação de sessão** em tempo real
- **Validação de permissões** por ID
- **Redirecionamento** automático
- **Segurança** de rotas

## 📊 Funcionalidades Avançadas

### 1. Estado de Mudanças Pendentes
- **Detecção automática** de alterações
- **Ícone de salvamento** quando há mudanças
- **Prevenção de perda** de dados
- **Salvamento manual** controlado

### 2. Sistema de Favoritos
- **Separação visual** das tarefas favoritas
- **Toggle simples** com estrela
- **Persistência** no banco de dados
- **Organização** automática

### 3. Validação Robusta
- **Campos obrigatórios** com feedback
- **Validação de tipos** de dados
- **Tratamento de erros** específicos
- **Mensagens** em português

### 4. Performance e UX
- **Loading states** em todas as operações
- **Debounce** em buscas
- **Memoização** de componentes
- **Otimização** de re-renders

## 🔄 Fluxo de Dados

### 1. Autenticação
```
Login → API → localStorage → Redirecionamento → Home
```

### 2. Criação de Tarefa
```
Modal → Validação → API → Sucesso → Atualização → Fechamento
```

### 3. Edição de Tarefa
```
Card → Edição → Mudanças Pendentes → Salvamento → API → Atualização
```

### 4. Exclusão de Tarefa
```
Card → Confirmação → API → Sucesso → Atualização → Fechamento
```

## 🛡️ Segurança e Validação

### 1. Validação de Entrada
- **Campos obrigatórios** verificados
- **Tipos de dados** validados
- **Sanitização** de inputs
- **Prevenção** de XSS

### 2. Autenticação
- **Verificação de sessão** contínua
- **Validação de permissões** por usuário
- **Redirecionamento** para não autenticados
- **Limpeza** de dados sensíveis

### 3. Tratamento de Erros
- **Try-catch** em todas as operações
- **Mensagens específicas** por tipo de erro
- **Fallbacks** para falhas de rede
- **Logs** para debugging

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Desktop**: ≥ 768px

### Adaptações
- **Layout flexível** para diferentes telas
- **Componentes** que se adaptam
- **Navegação** otimizada para mobile
- **Touch-friendly** em dispositivos móveis

## 🚀 Deploy e Produção

### Build
- **Vite** para build otimizado
- **TypeScript** compilado
- **Assets** minificados
- **Bundle** otimizado

### API
- **Backend** hospedado em Vercel
- **CORS** configurado
- **Endpoints** RESTful
- **Validação** server-side

## 📈 Estatísticas e Métricas

### Funcionalidades de Estatísticas
- **Contagem de tarefas** do dia
- **Modal de boas-vindas** com dados
- **Filtros** por data
- **Organização** por status

## 🔮 Funcionalidades Futuras

### Possíveis Melhorias
- **Categorias** personalizadas
- **Tags** para tarefas
- **Lembretes** e notificações
- **Exportação** de dados
- **Compartilhamento** de tarefas
- **Temas** personalizáveis
- **Modo escuro**
- **Sincronização** offline

---

## 📞 Suporte

Para dúvidas ou problemas, verifique:
1. **Console do navegador** para erros
2. **Network tab** para requisições
3. **LocalStorage** para dados de sessão
4. **API status** em caso de falhas

**Sistema desenvolvido com foco em usabilidade, performance e experiência do usuário.**


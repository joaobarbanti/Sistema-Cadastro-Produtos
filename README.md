## Cadastro de Produtos 📱

### Sistema o qual permite o usuário adicionar um produto no sistema deixando o mesmo público para todos que acessam o site. Esse produto pode ser apagado ou ter suas informações alteradas por qualquer um que desejar. Utilizei o Banco de Dados MongoDB e a ferramenta NodeJs para o código


## 💻 Tecnologias Usadas
<div style="display: inline_block"><br/>
<img align="center" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img align="center" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img align="center" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
</div>

## 💻 O Porque Das Minhas Escolhas Técnicas

#### Por conta da aplicação não ser de grande complexidade separei ela em 3 pastas "controllers","routes" e "model". para facilitar o entendimento irei explicar de forma leiga a função de cada uma.

Na controllers é onde deixamos toda funcionalidade do sistema separado em funções 
exemplo: Função A - Registra usuário
 Função B - Faz autentificação do usuário

No routes nos escrevemos quando devemos chamar essas funções apartir da rota e requisição ou seja se alguém fizer uma requisição post na rota "/registro" nós executamos a função A que vem dos controllers

No model nós mostramos para o banco de dados que tipo de dados nós pretendemos salvar nele ou seja lá falamos que vamos registrar usuários que tenham um Nome, Email e Senha onde os dois primeiros são letras e o último número isso é apenas um exemplo, e direcionamos onde ele deve salvar esses dados

## Instalação 😀 

#### Clone o Projeto Com: git clone github.com/JoaoRicardo2005/Sistema-Cadastro-Produtos </br>

#### Entre na pasta e instale as dependências com: 
 Yarn
#### Com tudo correto você pode iniciar o servidor com:
yarn start
#### Se você estiver no ambiente de desenvolvimento, poderá usar o servidor de desenvolvimento:
yarn dev</br>
yarn queue
## Importante 💛

### a aplicação foi totalmente feita por mim joão ricardo mas você pode usar ela do jeito que preferir! seja para estudo,apoio nos estudos ou até para ganhar dinheiro quem sabe rsrs. entre em contato em joaobarbanti7@gmail.com.
</div>

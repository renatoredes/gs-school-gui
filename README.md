# GS-SHOOL-GUI
### Este projeto está em fase desenvolvimento.
Sistema de Gestão Escolar - Projeto privado disponivel apenas para os contribuintes em atividades no projeto.

# Sobre
* Projeto privado, GS-SCHOOL é um produto de Gestão Escolar totalmente online, uma solução perfeita para organizar escola, professor e aluno.

# Objetivo
Ajudar na gestão escolar

# Tecnologias utilizadas neste projeto.

* Angular 9
* RxJS
* Bootstrap
* Ngx-Bootstrap: O ngx-bootstrap é uma biblioteca que abstrai e facilita o uso dos comportamentos que conseguíamos fazer com o jQuery.
* HTML
* CSS
* JavaScript
* DataTables.net https://datatables.net/
* Filtros
* Paginação 
* Json Serve: Será responsável por nos retornar uma API REST com um Back-end mocado, neste primeiro momento iremos focar 100% no front com angular e o JSON Serve ajuda na produtividade.
* API REST: Este é um de nossos exemplos de API REST https://gsshool-api.herokuapp.com/alunos

* Firebase: Neste momento estaremos utilizando firebase da google para hospedagem de nossa aplicação.
* Heroku: Neste primeiro momento estamos hospedando nosso banco de dados para teste em desenvolvimento
* ViaCep: Webservice gratuito e de alto desempenho para consultar Códigos de Endereçamento Postal (CEP) do Brasil https://viacep.com.br/

## Instalação

1. clone o repositório `https://github.com/renatoredes/gs-school-gui.git`
2. Entre no projeto e instale as dependencias `npm install`

## Simulando o Back-end

Execute `npm install -g json-server` para instalar globalmente o servidor json. Após a instalação entre na pasta do projeto e execute `json-server --watch db.json`, com isso um servidor será inicializado na url `http://localhost:3000/`, após a inicialização sera possível realizar requisições http.

No nosso caso não será nescessario pois já adcionamos o Json-serve no heroku você poderá consultar aqui: https://gsshool-api.herokuapp.com/alunos

## Ambiente Local

Execute `ng serve` para que o projeto suba localmente. Acesse a url `http://localhost:4200/`. O projeto já está com reload automático conforme as alterações que você realizar no código

## Gerando componente

Execute `ng generate component nome-do-componente` para criar um novo componente. Você também pode usuar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Autor e mantenedor do projeto
* Renato Ferreira: https://www.linkedin.com/in/renatoredes/

# GS-SCHOOL EM DESENVOLVIMENTO
* DataTable de Pesquisa de Aluno.
https://gs-school-gui.web.app/#/tables/pesquisaralunos

### GS-SCHOOL EXEMPLO CADASTRO DE ALUNO
[Video de Exemplo ](https://www.youtube.com/watch?v=eWn0fdsDP4E)

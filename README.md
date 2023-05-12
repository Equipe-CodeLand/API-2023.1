<!-- Para melhor visualização do código, tire a quebra de linha automatica. -->

<h1> FATEC Profº Jessen Vidal - São José dos Campos - 1º Semestre DSM </h1>
Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 1° semestre de Desenvolvimento de Software Multiplataforma (DSM) em parceria com a Vanguarda sobre dados relacionados à covid longa no Vale do Paraíba para um site de uso jornalístico.

<br>

<h2> 📑 Sobre o Projeto </h2>

Nosso projeto consiste em um site focado em dados relacionados a Covid-19, seus efeitos e seus sintômas prolongados, ou Covid longa de acordo com a Organização Mundial da Saúde (OMS). Este projeto é destinado à usuários jornalistas da rede Vanguarda com a necessidade de um site de fácil acesso à dados e informações sobre a Covid longa na região do Vale do Paraíba, visando criar novas matérias para o jornal.

<br>

<h3> 📌 Status do projeto: Em andamento ⏳</h3>

<h3> 🛠️ Tecnologias utilizadas até o momento: </h3>

<div align="center">
    <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white&color=F46A67">
    <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white&color=F46A67"/>
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white&color=F46A67"/>
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=F46A67"/>
    <img src="https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white&color=F46A67"/>
    <img src="https://img.shields.io/badge/Microsoft_Teams-6264A7?style=for-the-badge&logo=microsoft-teams&logoColor=white&color=F46A67"/>
    <img src="https://img.shields.io/badge/Microsoft_Word-2B579A?style=for-the-badge&logo=microsoft-word&logoColor=white&color=F46A67"/>
    <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white&color=F46A67"/>
    <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white&color=F46A67"/>
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white&color=F46A67"/>
    <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white&color=F46A67"/>
</div>

<br>

<h2> 🖥️ Rode a Aplicação:</h2>

<h5> 1. Certifique de ter python 3.7 ou superior instalado em sua máquina, caso não tenha, <a href="https://www.python.org/downloads/" target="_blank"> clique aqui </a> </h5>

<h5> 2. Certifque de ter o mysql 8.0 ou superior instalado em sua máquina, caso não tenha, <a href="https://dev.mysql.com/downloads/workbench/" target="_blank"> clique aqui </a> </h5>

<h6> 2.1. Recomendamos o uso da senha "12345", que já esta predefinida no arquivo app.py, mas você pode alterá-la de acordo com sua senha MySQL. </h6>

<h5> 3. Abra o terminal do seu disposivo. </h5>

<h5> 4. Clone o repositório utilizando este comando: </h5>

    git clone https://github.com/Equipe-01-DSM-2023/API-2023.1.git 

<h5> 5. Entre na pasta src utilizando o comando: </h5>

    cd API-2023.1/src 

<h5> 6. Utilize estes comandos para criar o ambiente virtual. </h5>

    python -m venv venv
    .\venv\Scripts\activate
    pip install -r requirements.txt
    
<h6> 6.1. Caso esteja usando alguma versão do linux, utilize estes comandos. </h6>

    python3 -m venv venv
    source venv\bin\activate
    pip install -r requirements.txt
    
<h5> 7. Antes de executar, verifique se a senha do arquivo app.py (localizado dentro da pasta src) coincide com sua senha do MySQL (definimos por padrão "12345", você pode alterá-la de acordo com a senha definida na instalação do MySQL). </h5>
    
    #Defina a senha abaixo de acordo com seu MySQL:
    app.config["MYSQL_PASSWORD"] = "12345"
    
<h6> 7.1. Exemplo: Digamos que sua senha do MySQL seja " abacate ", você substiuirá a senha por: </h6>
    
    #Defina a senha abaixo de acordo com seu MySQL:
    app.config["MYSQL_PASSWORD"] = "abacate"

<h5> 8. Execute a aplicação com o comando: </h5>
    
    flask run

<h5> 9. Agora, abra o seguinte link no navegador de sua preferência: http://127.0.0.1:5000 </h5>

<h5> 10. Após utilizar o site, utilize esse comando no terminal para fechar o ambiente virtual:

    deactivate
 
<br>

<h2> 🎯 MVP </h2>
<h4> Este é nosso MVP para versão Desktop: </h4>
 * Inserir o MVP do desktop *
<h4> Este é o nosso MVP para versão Mobile: </h4>
 * Inserir o MVP do mobile *

<br>

<h2> 🚩 Sprints </h2>

| Sprint |   Início   |  Entrega   |                                      Relatório                                      | Status |
| :----: | :--------: | :--------: | :---------------------------------------------------------------------------------: | :----: |
|   01   | 13/03/2023 | 02/04/2023 | <a href="https://github.com/Equipe-01-DSM-2023/API-2023.1/tree/V1.0">Relatório</a>  |    ✔️   |
|   02   | 03/04/2023 | 23/04/2023 | <a href="https://github.com/Equipe-01-DSM-2023/API-2023.1/tree/V2.0">Relatório</a>  |    ✔️   |
|   03   | 24/04/2023 | 14/05/2023 |                                                                                     |   ⏳️   |
|   04   | 15/05/2023 | 14/06/2023 |                                                                                     |        |

<br>

<h2> 📜 Backlog Total </h2>

| SPRINTS |                 TAREFAS                 |                                                     DESCRIÇÃO                                                     | STATUS |
| :-----: | :-------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :----: |
|    1    | Pesquisa consultas                      | Pesquisar sobre consulta realizadas no periodo entre 2019 e 2022.                                                 |   ✔️  |
|    1    | Pesquisa covid-longa                    | Pesquisar sobre covid-longa e seus sintomas.                                                                      |   ✔️  |
|    1    | Pesquisa financeira                     | Pesquisar sobre investimentos e gastos com a pandemia nos estados escolhidos, durante o periodo de 2019 até 2022. |   ✔️  |
|    1    | Pesquisa medicamentos                   | Pesquisar sobre medicamentos utilizados contra acovid e covid-longa durante a pandemia.                           |   ✔️  |
|    1    | Pesquisa procedimentos                  | Pesquisar sobre procedimentos realizados contra a covid e covid longa durante o período de 2019 até 2022.         |   ✔️  |
|    1    | Pesquisa saúde-mental                   | Pesquisar sobre a venda de  medicamentos relacionados com depressão durante a pandemia.                           |   ✔️  |
|    1    | Pesquisa tratamentos                    | Pesquisar sobre hospitalizações e vacinações durante a pandemia.                                                  |   ✔️  |
|    2    | Flask                                   | Organização e criação do necessário para desenvolver as páginas no FLASK.                                         |   ✔️  |
|    2    | Desenvolver barra de navegação e rodapé | Desenvolvimento do CSS padrão para as páginas.                                                                    |   ✔️  |
|    2    | Informações no protótipo                | Adicionar ao FIGMA, os textos, gráfico e informações que estarão no site.                                         |   ✔️  |
|    2    | Protótipo navegável - base (flask)      | Desenvolver uma base do protótipo para ser usada em outras páginas.                                               |   ✔️  |
|    2    | Protótipo navegável - Pesquisa          | Utilizar a base  do protótipo para desenvolver a página "pesquisa".                                               |   ✔️  |
|    2    | Protótipo navegável - sobre o projeto   | Utilizar a base do protótipo para desenvolver a página "sobre o projeto".                                         |   ✔️  |
|    2    | Desenvolver a logo                      | Criar uma logo para o site do projeto.                                                                            |   ✔️  |
|    2    | Controle de versões                     | Adicionar Tags ao que já foi feito e ao final da sprint.                                                          |   ✔️  |
|    3    | Estudo de Python 3                      | Estudo de como será feita a integração do banco de dados com o site através do Python3                            |   ✔️  |
|    3    | Criar arquivos CSV                      | Transformar os dados arrecadados no excel para .CSV                                                               |   ✔️  |
|    3    | Raspagem de dados                       | Implementar a raspagem de dados dos arquivos .CSV                                                                 |   ✔️  |
|    3    | Pesquisa medicamentos                   | Complementar a pesquisa sobre medicamentos, de acordo com o que foi citado na reunião com o Jornalista            |   ✔️  |
|    3    | Pesquisa tratamentos covid longa        | Pesquisar sobre como são tratados os sintomas da covid-long                                                       |   ✔️  |
|    3    | Formulário para feedbacks               | Adiconar um formulário para feedbacks do usuário na página Sobre                                                  |   ✔️  |
|    3    | Banco de dados para feedbacks           | Desenvolver um Banco de Dados MySql para armazenas as mensagens enviadas                                          |   ✔️  |
|    3    | Integrar o banco ao site                | Vincular o Banco de Dados ao formulário através de python                                                         |   ✔️  |
|    3    | Filtros                                 | Adição dos filtros na página Pesquisa                                                                             |   ❌  |
|    3    | Responsividade                          | Atualizar o CSS para garantir que o site fique responsivo.                                                        |   ✔️  |
|    4    | Testes Finais                           | Assegurar que o Banco de Dados e todas as funcionalidades estão de acordo.                                        |   ❌  |
|    4    | Pop-Up                                  | Mensagem personalizada emitida ao enviar o formulário de feedbacks                                                |   ❌  |


<br>

<h2> :handshake: Equipe </h2>
    
<table>
    <tr>
        <th> Foto </th>
        <th> Função </th>
        <th> Nome </th>
        <th> Linkedin </th>
        <th> Git Hub </th>
    </tr>
    <tr>
        <td><img src="https://avatars.githubusercontent.com/u/126176991?v=4" alt="ft de perfil" height="32px" width="32px"> </td>
        <td> Scrum Master </td>
        <td> Felipe Gabriel Vieira </td>
        <td> <a href="https://www.linkedin.com/in/velipefieira/"> <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/> </a> </td>
        <td> <a href="github.com/velipefieira"> <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/> </a> </td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/104635440?v=4" alt="ft de perfil" height="32px" width="32px"> </td>
        <td> Product Owner </td>
        <td> Caio Rodrigues de Almeida </td>
        <td> <a href="https://www.linkedin.com/in/caio-almeida-3693b5271/"> <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/> </a> </td>
        <td> <a href="https://github.com/Caio-Almeida4"> <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/> </a> </td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/125457676?v=4" alt="ft de perfil" height="32px" width="32px"> </td>
        <td> Scrum Team </td>
        <td> Pedro Henrique de Souza </td>
        <td> <a href="https://www.linkedin.com/in/pedro-henrique-de-souza-128484214/"> <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/> </a> </td>
        <td> <a href="https://github.com/Pedryn"> <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/> </a> </td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/37639392?v=4" alt="ft de perfil" height="32px" width="32px"> </td>
        <td> Scrum Team </td>
        <td> Iago Cardoso Souza </td>
        <td> <a href="https://www.linkedin.com/in/iago-cardoso-315955194/"> <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/> </a> </td>
        <td> <a href="https://github.com/iagocpv"> <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/> </a> </td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/125418833?v=4" alt="ft de perfil" height="32px" width="32px"> </td>
        <td> Scrum Team </td>
        <td> Laura Gabriel Gonçalves </td>
        <td> <a href="https://www.linkedin.com/in/eulauragabriel"> <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/> </a> </td>
        <td> <a href="https://github.com/eulauragabriel"> <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/> </a> </td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/110743347?v=4" alt="ft de perfil" height="32px" width="32px"> </td>
        <td> Scrum Team </td>
        <td> Letícia Helena de Oliveira Carvalho </td>
        <td> <a href="https://www.linkedin.com/in/letícia-helena-carvalho"> <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/> </a> </td>
        <td> <a href="https://github.com/leticiacarvalho04"> <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/> </a> </td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/126177124?v=4" alt="ft de perfil" height="32px" width="32px"> </td>
        <td> Scrum Team </td>
        <td> Lívia Alves de Faria </td>
        <td> <a href="https://www.linkedin.com/in/livialvs"> <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/> </a> </td>
        <td> <a href="https://github.com/livialvs"> <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/> </a> </td>
    </tr>
    <tr>
        <td> <img src="https://avatars.githubusercontent.com/u/84729056?v=4" alt="ft de perfil" height="32px" width="32px"> </td>
        <td> Scrum Team </td>
        <td> Luiz Felipe dos Santos </td>
        <td> <a href="https://www.linkedin.com/in/lfelipesant"> <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/> </a> </td>
        <td> <a href="https://github.com/felipe-sant"> <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/> </a> </td>
    </tr>
</table>
    
<br>

→ [Voltar ao topo](#fatec-profº-jessen-vidal-sjc---1º-semestre-dsm)

# FATEC Profº Jessen Vidal - São José dos Campos - 1º Semestre DSM
Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 1° semestre de Desenvolvimento de Software Multiplataforma (DSM) em parceria com a Vanguarda sobre dados relacionados à covid longa no Vale do Paraíba para um site de uso jornalístico.

<br>

## 📑 Sobre o Projeto

Nosso projeto consiste em um site focado em dados relacionados a Covid-19, seus efeitos e seus sintômas prolongados, ou Covid longa de acordo com a Organização Mundial da Saúde (OMS). Este projeto é destinado à usuários jornalistas da rede Vanguarda com a necessidade de um site de fácil acesso à dados e informações sobre a Covid longa na região do Vale do Paraíba visando criar novas matérias.

### 🛠️ Tecnologias utilizadas até o momento:

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

## 💻 Rode a Aplicação:

1. **Certifique de ter instalado na sua máquina o python 3.7 ou superior.** [Caso não tenha, baixe utilizando este link.](https://www.python.org/downloads/)

2. **Abra o terminal do seu disposivo.**

3. **Clone o repositório utilizando este comando:**

    ```
    git clone https://github.com/Equipe-01-DSM-2023/API-2023.1.git 
    ```

4. **Entre na pasta src utilizando o comando:**

    ``` 
    cd API-2023.1/src 
    ```

5. **Utilize estes comandos para criar o venv e baixar o flask.**

    ```
    python -m venv venv
    .\venv\Scripts\activate
    pip install -r requirements.txt
    flask run
    ```

6. **Após isso, abra o seguinte link no navegador de sua preferência:** http://127.0.0.1:5000

7. **Para fechar o ambiente virtual e sair digite:**

    ```
    deactivate
    ```

> [Caso tenha algum problema, siga essas instruções mais detalhadas.](src/README.md)

<br>

## 🖥️ Wireframe
Este é nosso wireframe para desktop:

<img src="docs/wireframe gif/wireframe_desktop.gif" width="100%">

> [Acesse nosso wireframe aqui.](https://www.figma.com/proto/0u2EL9sfpx35wkleBseaby/api?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width)

<br>

## 🚩 Sprints

| Sprint |   Início   |  Entrega   |                                      Relatório                                      | Status |
| :----: | :--------: | :--------: | :---------------------------------------------------------------------------------: | :----: |
|   01   | 13/03/2023 | 02/04/2023 | <a href="https://github.com/Equipe-01-DSM-2023/API-2023.1/tree/V1.0">Relatório</a>  |    ✔️   |
|   02   | 03/04/2023 | 23/04/2023 |                                                                                     |   ⏳️   |
|   03   | 24/04/2023 | 14/05/2023 |                                                                                     |        |
|   04   | 15/05/2023 | 14/06/2023 |                                                                                     |        |

<br>

### ✏️ Sprint Backlog - 2º Sprint

|                 PRIORIDADE                 |           TAREFAS           |                                        DESCRIÇÂO                                        | ESTIMATIVA DE ESFORÇO |
| :----------------------------------------: | :-------------------------: | :-------------------------------------------------------------------------------------: | :-------------------: |
| <span style="color:red">Alta</span>        | Desenvolver navbar e rodapé | Desenvolvimento do CSS padrão para as páginas                                           |        1 horas        |
| <span style="color:red">Alta</span>        | Página: Home                | Criar a página Home, de acordo com o wireframe                                          |        3 dias         |
| <span style="color:red">Alta</span>        | Página: Pesquisa            | Criar a página Pesquisa, de acordo com o wireframe                                      |        3 dias         |
| <span style="color:red">Alta</span>        | Página: Sobre o projeto     | Criar a página Sobre o projeto, de acordo com o wireframe                               |        2 dias         |
| <span style="color:yellow">Moderada</span> | Apresentação e roteiro      | Estudo e desenvolvimento para apresentações e roteiros                                  |        2~3 dias       |
| <span style="color:yellow">Moderada</span> | Desenvolver a logo          | Criar uma logo para o site do projeto                                                   |        1 dias         |
| <span style="color:yellow">Moderada</span> | Informações no site         | Adicionar as informações(textos, mapas, dados, etc) às páginas                          |        1 dias         |
| <span style="color:green">Baixa</span>     | Atualizar GitHub            | Atualizar a documentação e readme de acordo com as mudanças e adições dessa sprint      |        1 dias         |
| <span style="color:green">Baixa</span>     | Comparação de dados         | Pegar os dados arrecadados e comparar a taxa de aumento e diminuição em relação ao anos |        1 dias         |
| <span style="color:green">Baixa</span>     | Controle de versões         | Adicionar Tags ao que já foi feito e ao final da sprint                                 |        1 horas        |                                                                                                                                                                                                                                                                                                               |          14h          |

<br>

## 📜 Backlog Total



<br>

## 👥 Equipe

| Foto                                                                                                            | Função        | Nome                                | LinkedIn                                                                                                                                                                      | GitHub                                                                                                                                           |
| :-------------------------------------------------------------------------------------------------------------: | :-----------: | :---------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/126176991?v=4" alt="ft de perfil" height="32px" width="32px"> | Scrum Master  | Felipe Gabriel Vieira               | [<img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/>](https://www.linkedin.com/in/velipefieira/)                      |  [<img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/>](https://github.com/FelipeVieira27)    |
| <img src="https://avatars.githubusercontent.com/u/104635440?v=4" alt="ft de perfil" height="32px" width="32px"> | Product Owner  | Caio Rodrigues de Almeida           | [<img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/>](https://www.linkedin.com/in/caio-almeida-3693b5271/)            |  [<img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/>](https://github.com/Caio-Almeid4)      |
| <img src="https://avatars.githubusercontent.com/u/125457676?v=4" alt="ft de perfil" height="32px" width="32px"> | Scrum Team | Pedro Henrique de Souza             | [<img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/>](https://www.linkedin.com/in/pedro-henrique-de-souza-128484214/) |  [<img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/>](https://github.com/Pedryn)            |
| <img src="https://avatars.githubusercontent.com/u/37639392?v=4" alt="ft de perfil" height="32px" width="32px">  | Scrum Team    | Iago Cardoso Souza                  | [<img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/>](https://www.linkedin.com/in/iago-cardoso-315955194/)            |  [<img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/>](https://github.com/iagocpv)           | 
| <img src="https://avatars.githubusercontent.com/u/125418833?v=4" alt="ft de perfil" height="32px" width="32px"> | Scrum Team    | Laura Gabriel Gonçalves             | [<img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/>](https://www.linkedin.com/in/eulauragabriel)                     |  [<img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/>](https://github.com/eulauragabriel)    |
| <img src="https://avatars.githubusercontent.com/u/110743347?v=4" alt="ft de perfil" height="32px" width="32px"> | Scrum Team    | Letícia Helena de Oliveira Carvalho | [<img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/>](https://www.linkedin.com/in/letícia-helena-carvalho/)           |  [<img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/>](https://github.com/leticiacarvalho04) |
| <img src="https://avatars.githubusercontent.com/u/126177124?v=4" alt="ft de perfil" height="32px" width="32px"> | Scrum Team    | Livia Alves de Faria                | [<img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/>](https://www.linkedin.com/in/livialvs)                           |  [<img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/>](https://github.com/livialvs)          |
| <img src="https://avatars.githubusercontent.com/u/84729056?v=4" alt="ft de perfil" height="32px" width="32px">  | Scrum Team    | Luiz Felipe dos Santos              | [<img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&color=1AB85C'/>](https://www.linkedin.com/in/lfelipesant)                        |  [<img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&color=1AB85C'/>](https://github.com/felipe-sant)       |

<br>

→ [Voltar ao topo](#fatec-profº-jessen-vidal-sjc---1º-semestre-dsm)

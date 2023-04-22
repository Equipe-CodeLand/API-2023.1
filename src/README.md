# ⚙️ Como rodar:

**1. Certifique de ter instalado na sua máquina o python 3.7 ou superior.** [Caso não tenha, baixe utilizando este link.](https://www.python.org/downloads/)

**2. Abra o terminal do seu disposivo.**

**3. Clone o repositório utilizando este comando:**

```
git clone https://github.com/Equipe-01-DSM-2023/API-2023.1.git 
```

**4. Entre na pasta src utilizando o comando:**

``` 
cd API-2023.1/src 
```

**5. Utilize estes comandos para criar o venv e baixar o flask.**

```
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
flask run
```

Caso esteja utilizando alguma versão do linux, utilize este comando:

```
python3 -m venv venv
source venv\bin\activate
pip install -r requirements.txt
flask run
```

**6. Após isso, abra o seguinte link no navegador de sua preferência:** http://127.0.0.1:5000

**7. Para fechar o ambiente virtual e sair digite:**

```
deactivate
```
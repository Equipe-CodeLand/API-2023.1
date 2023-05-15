from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from pesquisa import *
from flask_mysqldb import MySQL
#import pandas

app = Flask(__name__)
CORS(app, support_credentials=True)

Medicamento = '/static/imgs/img graficos/medicamentos/sjc_medicamentos.png'


dados = [
    {'cidade':'Selecione uma cidade', 'value':''},
    {'cidade':'Caçapava', 'value': 'cacapava'},
    {'cidade': 'Jacareí', 'value': 'jacarei'},
    {'cidade':'São José dos Campos', 'value':'sjc'},
    {'cidade':'Taubaté', 'value':'taubate'},

    {'topico':'Selecione um tópico', 'value':''},
    {'topico':'Hospitalização', 'value':'hospitalizacao'},
    {'topico':'Vacinação', 'value':'vacinacao'},
    {'topico':'Investimentos', 'value':'investimentos'},
    {'topico':'Consultas', 'value':'consultas'},
    {'topico':'Medicamentos', 'value':'medicamentos'},
    {'topico':'Saúde Mental', 'value':'saude_mental'}

]

app.config["MYSQL_Host"] = "localhost"
app.config["MYSQL_USER"] = "root"
#Defina a senha abaixo de acordo com seu MySQL:
app.config["MYSQL_PASSWORD"] = "12345"
mysql = MySQL(app)

with app.app_context():
    cur = mysql.connection.cursor()
    cur.execute('''
        CREATE DATABASE IF NOT EXISTS api_2023_1;
        USE api_2023_1;
        CREATE TABLE IF NOT EXISTS feedback (
            codigo INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(60),
            comentario VARCHAR(255),
            data_envio DATETIME NOT NULL DEFAULT NOW()
        );
    ''')
    cur.close()

app.config["MYSQL_DB"] = "api_2023_1"

@app.route('/')
def home():
    title = "Home"
    return render_template('home.html', title = title)

@app.route('/filtrar', methods=['POST'])
@cross_origin(supports_credentials=True)
def pesquisar():
    print(pesquisar_csv(request.get_json()))
    return pesquisar_csv(request.get_json())

@app.route('/pesquisa', methods=['POST','GET'])
def pesquisa():
    if request.method == "POST":
        cidade = request.form['cidade']
        topico = request.form['topico']
        #filtrado = dados[(dados.cidade == cidade) & (dados.topico == topico)]
        title = "Resultado"
        return render_template('resultado.html', cidade=cidade, topico=topico, title = title)
    title = "Pesquisas"
    return render_template('pesquisa.html', title=title)



@app.route('/sobre', methods=["GET", "POST"])
def sobre():
    if request.method == "POST":
        email = request.form["email"]
        comentario = request.form["comentario"]

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO feedback(email, comentario)VALUES(%s, %s)", (email, comentario))
        mysql.connection.commit()
        cur.close()

        return "Muito obrigado! Seu feedback foi enviado com sucesso!"
    return render_template('sobre.html')

@app.route("/cacapava")
def cacapava():
    title = "Caçapava"
    return render_template('ccpv.html', title = title)

@app.route("/sjc")
def sjc():
    title = "São José dos Campos"
    return render_template('sjc.html', title = title)

@app.route("/taubate")
def tau():
    title = "Taubaté"
    return render_template('tau.html', title = title)

@app.route("/jacarei")
def jac():
    title = "Jacareí"
    return render_template('jac.html', title = title)


if __name__ == "__main__":
    app.run(debug=True)

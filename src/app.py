from flask import Flask, redirect, render_template, request, jsonify, url_for
from flask_cors import CORS, cross_origin
from pesquisa import *
from flask_mysqldb import MySQL

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
app.config["MYSQL_PASSWORD"] = "fatec23"

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
    return pesquisar_csv(request.get_json())

@app.route('/pesquisa', methods=['POST','GET'])
def pesquisa():
    title = "Pesquisas"
    return render_template('pesquisa.html', title=title)

@app.route('/feedbacks')
def feedbacks():
    cur = mysql.connection.cursor()

    feedbacks = cur.execute("SELECT * FROM feedback")

    if feedbacks > 0:
        userDetails = cur.fetchall()

        title = "Feedbacks"
        return render_template("feedbacks.html", userDetails=userDetails, title=title)

@app.route('/sobre', methods=["GET", "POST"])
def sobre():
    if request.method == "POST":
        email = request.form["email"]
        comentario = request.form["comentario"]

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO feedback(email, comentario)VALUES(%s, %s)", (email, comentario))
        mysql.connection.commit()
        cur.close()

        return redirect(url_for('feedbacks'))
    title = "Sobre o Projeto"
    return render_template('sobre.html', title = title)

if __name__ == "__main__":
    app.run(debug=True)

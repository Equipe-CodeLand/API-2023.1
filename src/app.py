from flask import Flask, redirect, render_template, request, jsonify, url_for
from flask_cors import CORS, cross_origin
from pesquisa import *

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
        title = "Feedbacks"
        return render_template("feedbacks.html", title=title)

@app.route('/sobre', methods=["GET", "POST"])
def sobre():
    title = "Sobre o Projeto"
    return render_template('sobre.html', title = title)

if __name__ == "__main__":
    app.run(debug=True)

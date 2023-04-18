from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    title = "Home"
    return render_template('index.html', title = title)

@app.route('/pesquisa')
def pesquisa():
    title = "Pesquisas"
    return render_template('pesquisa.html', title = title)

@app.route('/sobre')
def sobre():
    title = "Sobre o Projeto"
    return render_template('sobre.html', title = title)

@app.route("/cacapava")
def ccpv():
    title = "Caçapava"
    return render_template('ccpv.html', title = title)

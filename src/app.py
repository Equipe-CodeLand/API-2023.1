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
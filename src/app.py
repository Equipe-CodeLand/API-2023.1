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

@app.route("/ccpv_consultas")
def ccpv_con():
    title = "Consultas Caçapava"
    return render_template("ccpv_consultas.html",title=title)

@app.route("/ccpv_gastos")
def ccpv_gastos():
    title = "Gastos Caçapava"
    return render_template("ccpv_gastos.html",title=title)

@app.route("/ccpv_medicamentos")
def ccpv_medicamentos():
    title = "Medicamentos Caçapava"
    return render_template("ccpv_medicamentos.html",title=title)

@app.route("/ccpv_procedimentos")
def ccpv_proc():
    title = "Procedimentos Caçapava"
    return render_template("ccpv_procedimentos.html",title=title)

@app.route("/ccpv_tratamentos")
def ccpv_trat():
    title = "Tratamentos Caçapava"
    return render_template("ccpv_tratamentos.html",title=title)

@app.route("/sjc_consultas")
def sjc_1():
    title = "SJC consultas"
    return render_template("sjc_consultas.html",title=title)

@app.route("/sjc_gastos")
def sjc_2():
    title = "SJC gastos"
    return render_template("sjc_gastos.html",title=title)

@app.route("/sjc_medicamentos")
def sjc_3():
    title = "SJC medicamentos"
    return render_template("sjc_medicamentos.html",title=title)

@app.route("/sjc_procedimentos")
def sjc_4():
    title = "SJC procedimentos"
    return render_template("sjc_procedimentos.html",title=title)

@app.route("/sjc_tratamentos")
def sjc_5():
    title = "SJC tratamentos"
    return render_template("sjc_tratamentos.html",title=title)
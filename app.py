from flask import Flask, render_template

app = Flask(__name__)

@app.route("/") 
def home():
    return render_template("index.html")

@app.route("/pesquisa") 
def quemsomos():
    return render_template("pesquisa.html")

@app.route("/sobreoprojeto") 
def contato():
    return render_template("sobre_o_projeto.html")

if __name__ == '__main__':
    app.run()
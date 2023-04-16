from flask import Flask, render_template
from jinja2 import Template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/") 
def home():
    return render_template("index.html")

@app.route("/pesquisa") 
def pesquisa():
    return render_template("pesquisa.html")

@app.route("/sobreoprojeto") 
def sobre():
    return render_template("sobre_o_projeto.html")

# Raspagem de dados
vgm_url = 'https://taubate.meumunicipio.digital/apex/taubate/f?p=839:3:::::P3_COD_APLICACAO_COVID,P3_MES_INICIAL,P3_MES_FINAL,P3_QUEBRA,P3_TIPO_RECEITA,P3_PARAMETRO:312,1,12,3,O,1'
html_text = requests.get(vgm_url).text
soup = BeautifulSoup(html_text, 'html.parser')


if __name__ == '__main__':
    app.run()
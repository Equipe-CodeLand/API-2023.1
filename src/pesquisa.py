#filtro = {
#    "cidades": ['São José dos Campos'],
#    "anos": ['2020', '2021'],
#    "tipo_dado": "vacinação"
#    }

def pesquisar(filtro):
    csv = open('../docs/Arquivos CSV/' + filtro["tipo_dado"] + ".csv")
    colunas = csv.readline().split('\n')[0].split(';')
    filtro['cidades'] = list(map(str.lower, filtro['cidades']))
    dados = []
    for l in csv:
        linha = l.split('\n')[0].split(';')
        if (len(filtro["cidades"]) == 0 or filtro["cidades"].count(linha[colunas.index("cidade")].lower()) > 0)\
           and (len(filtro["anos"]) == 0 or filtro["anos"].count(linha[colunas.index("ano")]) > 0):
            dados.insert(-1, linha)
    csv.close()
    dados.sort()
    return colunas, dados

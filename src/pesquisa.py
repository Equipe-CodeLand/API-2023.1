#filtro = {
#    "cidade": 'São José dos Campos',
#    "tipo": "vacinação"
#    }

topicos = ['antidepressivo', 'consulta', 'gastos', 'internações', 'procedimento', 'vacinação']

def pesquisar_csv(filtro):
    retorno = {
        "tipos": []
    }
    if(filtro['tipo']):            
        retorno['tipos'].append(filtrar_csv(filtro['cidade'], filtro['tipo']))
    else:
        for t in topicos:
            retorno['tipos'].append(filtrar_csv(filtro['cidade'], t))
    return retorno

def filtrar_csv(cidade, tipo_dado):
    csv = open(f'../docs/Arquivos_CSV/{tipo_dado}.csv', encoding="latin-1")
    colunas = csv.readline().split('\n')[0].split(';')
    tipo = {
        "tipo": tipo_dado
        }
    dados = []
    for l in csv:
        linha = l.split('\n')[0].split(';')
        if cidade.lower() == linha[colunas.index('cidade')].lower():
            dado = {}
            for c in colunas:
                dado[c] = linha[colunas.index(c)].replace(',', '.')
            dados.append(dado)
    tipo['dados'] = dados
    csv.close()
    return tipo

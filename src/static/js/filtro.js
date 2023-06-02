/*
result = {
    tipos: [
        {
            tipo: 'vacinação',
            dados: [{"ano":"2019","cidade":"Caçapava", ...}]
        }
    ]
}
*/

function filtrar() {
  cidade = document.querySelector('#cidade').value;
  tipo = document.querySelector('#topico').value;
  filtro = { cidade, tipo };
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      result = JSON.parse(xhr.responseText);
      document.getElementsByClassName('conteudo')[0].style.display = 'none';
      document.getElementById('resultado').innerHTML = '';

      for (let i = 0; i < result.tipos.length; i++) {
        const tipo = result.tipos[i];

        switch(tipo.tipo) {
          case 'vacinação':
            for (let j = 0; j < tipo.dados.length; j++) {
              const dado = tipo.dados[j];
              const chartId = `ChartVacinacao${dado.cidade.replaceAll(' ', '')}${dado.ano.replaceAll(' ', '')}`;
              labels = ['Primeira dose', 'Segunda dose', '1° reforço', '2° reforço', '3° reforço', 'Dose única', 'Dose adicional']
              data = [`${dado['primeira dose']}`, `${dado['segunda dose']}`, `${dado['primeira reforço']}`, `${dado['segunda reforço']}`,
                      `${dado['terceira reforço']}`, `${dado['dose única']}`, `${dado['dose adicional']}`]                
              criarGrafico(chartId, labels, `Número de doses (${dado.ano})`, data, `Vacinação - ${capitalize(dado.cidade)}`, 'Governo do Estado de São Paulo')   
            }
            break
          case 'consulta':
            cidades = []
            tipo.dados.forEach(d => {
              if(!cidades.includes(d.cidade)) {
                cidades.push(d.cidade)
              }              
            });
            
            for (let j= 0; j < cidades.length; j++) {
              const dados = tipo.dados.filter(d => d.cidade == cidades[j])
              topicos = []
              tipo.dados.forEach(d => {
                if(!topicos.includes(d['tópico'])) {
                  topicos.push(d['tópico'])
                }              
              });
              for (let k= 0; k < topicos.length; k++) {
                dadosTopico = dados.filter(dt => dt['tópico'] == topicos[k])                
                const chartId = `ChartConsultas${dados[i].cidade.replaceAll(' ', '')}${topicos[k].replaceAll(' ', '')}`;
                labels = ['2019', '2020', '2021', '2022']
                data = [
                  `${dadosTopico.find(dt => dt.ano == 2019).dado}`,
                  `${dadosTopico.find(dt => dt.ano == 2020).dado}`,
                  `${dadosTopico.find(dt => dt.ano == 2021).dado}`,
                  `${dadosTopico.find(dt => dt.ano == 2022).dado}`
                ]                
                criarGrafico(chartId, labels, `${capitalize(topicos[k])}`, data, `Consultas - ${capitalize(dados[j].cidade)}`, 'Datasus Tabnet')                             
              }
            }
            break
          case 'gastos':
            cidades = []
            tipo.dados.forEach(d => {
              if(!cidades.includes(d.cidade)) {
                cidades.push(d.cidade)
              }              
            });
            
            for (let j= 0; j < cidades.length; j++) {
              const dados = tipo.dados.filter(d => d.cidade == cidades[j])
              topicos = []
              tipo.dados.forEach(d => {
                if(!topicos.includes(d['tópico'])) {
                  topicos.push(d['tópico'])
                }              
              });
              for (let k= 0; k < topicos.length; k++) {
                dadosTopico = dados.filter(dt => dt['tópico'] == topicos[k])
                const chartId = `ChartGastos${dados[i].cidade.replaceAll(' ', '')}${topicos[k].replaceAll(' ', '')}`;
                labels = ['2020', '2021', '2022']
                data = [
                  `${dadosTopico.find(dt => dt.ano == 2020).valor}`,
                  `${dadosTopico.find(dt => dt.ano == 2021).valor}`,
                  `${dadosTopico.find(dt => dt.ano == 2022).valor}`
                ]                
                criarGrafico(chartId, labels, `${capitalize(topicos[k])}`, data, `Gastos/Investimentos - ${capitalize(dados[j].cidade)}`, 'Portal da Transparência do município')         
              }
            }
            break
          case 'internações':
            cidades = []
            tipo.dados.forEach(d => {
              if(!cidades.includes(d.cidade)) {
                cidades.push(d.cidade)
              }              
            });
            
            for (let j= 0; j < cidades.length; j++) {
              const dados = tipo.dados.filter(d => d.cidade == cidades[j])
              topicos = []
              tipo.dados.forEach(d => {
                if(!topicos.includes(d['tópico'])) {
                  topicos.push(d['tópico'])
                }              
              });
              for (let k= 0; k < topicos.length; k++) {
                dadosTopico = dados.filter(dt => dt['tópico'] == topicos[k])
                const chartId = `ChartInternação${dados[i].cidade.replaceAll(' ', '')}${topicos[k].replaceAll(' ', '')}`;
                labels = ['2019', '2020', '2021', '2022']
                data = [
                  `${dadosTopico.find(dt => dt.ano == 2019).valor}`,
                  `${dadosTopico.find(dt => dt.ano == 2020).valor}`,
                  `${dadosTopico.find(dt => dt.ano == 2021).valor}`,
                  `${dadosTopico.find(dt => dt.ano == 2022).valor}`
                ]                
                criarGrafico(chartId, labels, `${capitalize(topicos[k])}`, data, `Hospitalizações - ${capitalize(dados[j].cidade)}`, 'Google Covid-19 Open Data')          
              }
            }
            break
          case 'procedimento':
            cidades = []
            tipo.dados.forEach(d => {
              if(!cidades.includes(d.cidade)) {
                cidades.push(d.cidade)
              }              
            });
            
            for (let j= 0; j < cidades.length; j++) {
              const dados = tipo.dados.filter(d => d.cidade == cidades[j])
              topicos = Object.keys(dados[0]).filter(t => t != 'total' && t != 'ano' && t != 'cidade')
              
              for (let k= 0; k < topicos.length; k++) {                
                dadosTopico = []
                dados.forEach(d => dadosTopico.push({ano: d['ano'], dado: d[`${topicos[k]}`]}))
                const chartId = `ChartProcedimentos${cidades[j].replaceAll(' ', '')}${topicos[k].replaceAll(' ', '')}`;
                labels = ['2019', '2020', '2021', '2022']
                data = [
                  `${dadosTopico.find(dt => dt.ano == 2019).dado}`,
                  `${dadosTopico.find(dt => dt.ano == 2020).dado}`,
                  `${dadosTopico.find(dt => dt.ano == 2021).dado}`,
                  `${dadosTopico.find(dt => dt.ano == 2022).dado}`
                ]                
                criarGrafico(chartId, labels, `${topicos[k]}`, data, `Procedimentos - ${capitalize(cidades[j])}`, 'Datasus Tabnet')                            
              }
            }
            break;
          case 'antidepressivo':
            cidades = []
            tipo.dados.forEach(d => {
              if(!cidades.includes(d.cidade)) {
                cidades.push(d.cidade)
              }              
            });
            
            for (let j= 0; j < cidades.length; j++) {
              const dados = tipo.dados.filter(d => d.cidade == cidades[j])
              topicos = []
              tipo.dados.forEach(d => {
                if(!topicos.includes(d['tópico'])) {
                  topicos.push(d['tópico'])
                }              
              });
              for (let k= 0; k < topicos.length; k++) {
                dadosTopico = dados.filter(dt => dt['tópico'] == topicos[k])
                const chartId = `ChartAntidepressivo${dados[i].cidade.replaceAll(' ', '')}${topicos[k].replaceAll(' ', '')}`;
                labels = ['2019', '2020', '2021']
                data = [
                  `${dadosTopico.find(dt => dt.ano == 2019).valor}`,
                  `${dadosTopico.find(dt => dt.ano == 2020).valor}`,
                  `${dadosTopico.find(dt => dt.ano == 2021).valor}`
                ]                
                criarGrafico(chartId, labels, `${capitalize(topicos[k])}`, data, `Venda de antidepressivos - ${capitalize(dados[j].cidade)}`, 'Anvisa')                             
              }
            }
            break
          default:
            console.log('tipo invalido')
            break
        }
      }
    }
  };
  if (!cidade && !tipo) {
    Swal.fire({
      icon: 'warning',
      title: 'Ops!',
      text: 'Nenhum filtro selecionado, selecione um por favor!',
    });
  } else if (!cidade && tipo) {
    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'Para visualizar os gráficos favor selecionar a cidade de sua preferência',
    });
  } else {
    xhr.open('POST', 'http://localhost:5000/filtrar', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(filtro));
  }

}
  
function criarGrafico(chartId, labels, label, data, title, fonte) {
  const chartContainer = document.createElement('div');
  chartContainer.className = 'chartCard';
  chartContainer.innerHTML = `<div class="chartBox"><canvas id="${chartId}"></canvas></div>`;
  document.getElementById('resultado').appendChild(chartContainer);
  const ctx = document.getElementById(chartId).getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        borderWidth: 1,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title
        },
        subtitle: {
            display: true,
            text: `Fonte: ${fonte}`,
            position: 'bottom',
            padding: 20
        }
      },
    }
  });
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
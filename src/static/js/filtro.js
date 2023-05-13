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
      document.getElementById('resultado').innerHTML = JSON.stringify(result.tipos);
      console.log(result)

      for (let i = 0; i < result.tipos.length; i++) {
        const tipo = result.tipos[i];

        switch(tipo.tipo) {
          case 'vacinação':
            for (let j = 0; j < tipo.dados.length; j++) {
              const dado = tipo.dados[j];
              const chartId = `Chart${i + j + 2}`;
              const chartContainer = document.createElement('div');
              chartContainer.className = 'chartCard';
              chartContainer.innerHTML = `<div class="chartBox"><canvas id="${chartId}"></canvas></div>`;
              document.getElementById('resultado').appendChild(chartContainer);
              const ctx = document.getElementById(chartId).getContext('2d');
              new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: ['Primeira dose', 'Segunda dose', '1° reforço', '2° reforço', '3° reforço', 'Dose única', 'Dose adicional'],
                  datasets: [{
                    label: ` ${capitalize(dado.cidade)} - Total de doses (${dado.ano})`,
                    data: [`${dado['primeira dose']}`, `${dado['segunda dose']}`, `${dado['primeira reforço']}`, `${dado['segunda reforço']}`,
                      `${dado['terceira reforço']}`, `${dado['dose única']}`, `${dado['dose adicional']}`],
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
                  }
                }
              });
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
                const chartContainer = document.createElement('div');
                chartContainer.className = 'chartCard';
                chartContainer.innerHTML = `<div class="chartBox"><canvas id="${chartId}"></canvas></div>`;
                document.getElementById('resultado').appendChild(chartContainer);
                const ctx = document.getElementById(chartId).getContext('2d');
                new Chart(ctx, {
                  type: 'bar',
                  data: {
                    labels: ['2019', '2020', '2021', '2022'],
                    datasets: [{
                      label: `${capitalize(dados[j].cidade)} - ${capitalize(topicos[k])}`,
                      data: [
                        `${dadosTopico.find(dt => dt.ano == 2019).dado}`,
                        `${dadosTopico.find(dt => dt.ano == 2020).dado}`,
                        `${dadosTopico.find(dt => dt.ano == 2021).dado}`,
                        `${dadosTopico.find(dt => dt.ano == 2022).dado}`
                      ],
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
                    }
                  }
                });               
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
                const chartContainer = document.createElement('div');
                chartContainer.className = 'chartCard';
                chartContainer.innerHTML = `<div class="chartBox"><canvas id="${chartId}"></canvas></div>`;
                document.getElementById('resultado').appendChild(chartContainer);
                const ctx = document.getElementById(chartId).getContext('2d');
                console.log(dadosTopico)
                new Chart(ctx, {
                  type: 'bar',
                  data: {
                    labels: ['2020', '2021', '2022', 'Total'],
                    datasets: [{
                      label: `${capitalize(dados[j].cidade)} - ${capitalize(topicos[k])}`,
                      data: [
                        `${dadosTopico.find(dt => dt.ano == 2020).valor}`,
                        `${dadosTopico.find(dt => dt.ano == 2021).valor}`,
                        `${dadosTopico.find(dt => dt.ano == 2022).valor}`,
                        `${dadosTopico.find(dt => dt.ano == 'total').valor}`
                      ],
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
                    }
                  }
                });               
              }
            }
            break
          case 'internações':
            break
          case 'procedimento':
            break
          case 'antidepressivo':
            break
          default:
            console.log('tipo invalido')
            break
        }
      }
    }
  };

  if (!cidade && !tipo) {
    alert('Preencha algum campo');
  } else {
    xhr.open('POST', 'http://localhost:5000/filtrar', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(filtro));
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
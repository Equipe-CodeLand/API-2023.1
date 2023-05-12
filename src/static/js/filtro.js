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
        document.getElementById('resultado2').innerHTML = '<div class="chartCard"><div class="chartBox"><canvas id="myChart1"></canvas></div></div>'
        
        dado = result.tipos[0].dados[0]

        const ctx = document.getElementById('myChart1').getContext('2d');
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
    };
    if (!cidade && !tipo) {
      alert('Preencha algum campo');
    } else {
      xhr.open('POST', 'http://localhost:5000/filtrar', true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.send(JSON.stringify(filtro));
    }
}

function createCharts(tipo, dados) {
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
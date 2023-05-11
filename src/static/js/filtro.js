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
        document.getElementById('resultado3').innerHTML = '<div class="chartCard"><div class="chartBox"><canvas id="Chart2"></canvas></div></div>'
        document.getElementById('resultado4').innerHTML = '<div class="chartCard"><div class="chartBox"><canvas id="Chart3"></canvas></div></div>'
        document.getElementById('resultado5').innerHTML = '<div class="chartCard"><div class="chartBox"><canvas id="Chart4"></canvas></div></div>'
        document.getElementById('resultado6').innerHTML = '<div class="chartCard"><div class="chartBox"><canvas id="Chart5"></canvas></div></div>'
        document.getElementById('resultado7').innerHTML = '<div class="chartCard"><div class="chartBox"><canvas id="Chart6"></canvas></div></div>'
    
        
        
        const ctx = document.getElementById('myChart1').getContext('2d');
        // Crie as instâncias de gráfico
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Primeira dose', 'Segunda dose', '1° reforço', '2° reforço', '3° reforço', 'dose única', 'dose adicional'],
                datasets: [{
                    label: 'Caçapava total de doses(21/22)',
                    data: [88.797, 82.072, 56.582, 27.148, 126, 3.021, 289],
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

        const ctx2 = document.getElementById('Chart2').getContext('2d');
        new Chart(ctx2, {
          type: 'bar',
          data: {
            labels: ['Primeira dose', 'Segunda dose', '1° reforço', '2° reforço', '3° reforço', 'dose única', 'dose adicional'],
            datasets: [{
              label: 'Caçapava 2021',
              data: [77.814, 71.754, 20.022, 7 , 0, 2.464, 122],
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

        const ctx3 = document.getElementById('Chart3').getContext('2d');
        new Chart(ctx3, {
          type: 'bar',
          data: {
            labels: ['Primeira dose', 'Segunda dose', '1° reforço', '2° reforço', '3° reforço', 'dose única', 'dose adicional'],
            datasets: [{
              label: 'Caçapava 2022',
              data: [10.983, 10.318 , 36.560, 27.141 , 126 , 557, 167],
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

        const ctx4 = document.getElementById('Chart4').getContext('2d');
        new Chart(ctx4, {
          type: 'bar',
          data: {
            labels: ['Primeira dose', 'Segunda dose', '1° reforço', '2° reforço', '3° reforço', 'dose única', 'dose adicional'],
            datasets: [{
              label: 'Jacareí total de doses(21/22)',
              data: [212.768, 200.093, 142.607, 56.060 , 375, 6.059, 185],
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

        const ctx5 = document.getElementById('Chart5').getContext('2d');
        new Chart(ctx5, {
          type: 'bar',
          data: {
            labels: ['Primeira dose', 'Segunda dose', '1° reforço', '2° reforço', '3° reforço', 'dose única', 'dose adicional'],
            datasets: [{
              label: ' São José dos Campos total de doses(21/22)',
              data: [656.346, 608.222, 414.390, 199.452 , 1.510, 18.645, 1.799],
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

        const ctx6 = document.getElementById('Chart6').getContext('2d');
        new Chart(ctx6, {
          type: 'bar',
          data: {
            labels: ['Primeira dose', 'Segunda dose', '1° reforço', '2° reforço', '3° reforço', 'dose única', 'dose adicional'],
            datasets: [{
              label: ' Taubaté total de doses(21/22)',
              data: [280.873, 264.749, 178.166, 84.786 , 258, 9.171, 1.702],
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

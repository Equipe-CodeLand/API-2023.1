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
        document.getElementById('resultado2').innerHTML = '<div class="chartCard"><div class="chartBox"><canvas id="myChart"></canvas></div></div>'
        
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
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
  
    const charData = '../docs/Arquivos_CSV';
  
    // parse the file from CSV to JSON
    d3.csv(charData).then(function (result) {
      console.log(result);
      const cost = [];
      const profit = [];
      const revenue = [];
  
      for (let i = 0; i < result.length; i++) {
        cost.push(result[i].cost);
        profit.push(result[i].cost);
        revenue.push(result[i].cost);
      }
  
      // setup 
      const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Weekly Sales',
          data: cost,
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)'
          ],
          borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          borderWidth: 1
        }]
      };
  
      // config 
      const config = {
        type: 'bar',
        data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
  
      // render init block
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
  
      // Instantly assign Chart.js version
      const chartVersion = document.getElementById('chartVersion');
      chartVersion.innerText = Chart.version;
    });
}

// Bibliotecas
const request = require('request');
const cheerio = require('cheerio');

// Carregamento do HTML da página utilizando a biblioteca Cheerio e atribuído o retorno a uma variável 
request('https://taubate.meumunicipio.digital/apex/taubate/f?p=839:3:::::P3_COD_APLICACAO_COVID,P3_MES_INICIAL,P3_MES_FINAL,P3_QUEBRA,P3_TIPO_RECEITA,P3_PARAMETRO:312,1,12,3,O,1', (error, response, html)); {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
  }
}

//Coletar os dados da tabela
const dados = [];
$('table tbody tr').each((i, el) => {
  const coluna1 = $(el).find('td').eq(0).text().trim();
  const coluna2 = $(el).find('td').eq(2).text().trim();
  const coluna3 = $(el).find('td').eq(5).text().trim();
  dados.push({ x: coluna1, y: coluna2, z: coluna3});
});

// Adicione a biblioteca Chart.js 
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

// Obtém o botão de filtro pelo seu id
const botaoFiltro = document.getElementById('Ano');

// Adiciona um ouvinte de eventos de clique ao botão
botaoFiltro.addEventListener('click', function() {
  // O código aqui será executado quando o botão for clicado
  console.log('Botão de filtro clicado!');
});

// Seleciona o elemento canvas pelo ID
var ctx = document.getElementById('myChart').getContext('2d');

// Criação do gráfico com os dados
const canvas = document.getElementById('myChart');
const myChart = new Chart(canvas, {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
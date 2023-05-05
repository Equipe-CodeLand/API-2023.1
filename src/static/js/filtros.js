$(document).ready(function() {
  // Quando a opção selecionada do menu suspenso mudar
  $('#cidade').change(function() {
    // Armazena a opção selecionada em uma variável
    const filtroSelecionado = $(this).val();
    
    // Exibe todos os resultados se a opção 'todos' for selecionada
    if (filtroSelecionado === '') {
        $('#conteudo').show();
        $('#resultados').hide();
    }
    // Exibe todos os resultados se a opção 'cidade' for selecionada
    else if (filtroSelecionado === 'cidade') {
        $('.item').show();
        $('#conteudo').hide();
        $('#resultados').show();
      }
    // Exibe todos os resultados se a opção 'cidade' for selecionada
    else if (filtroSelecionado === 'topico') {
      $('.item').show();
      $('#conteudo').hide();
      $('#resultados').show();
    }
      // Exibe somente os resultados correspondentes à opção selecionada
      else {
        $('.item').hide();
        $(`.${filtroSelecionado}`).show();
        $('#conteudo').hide();
        $('#resultados').show();
      }
    });
  });


//AJAX

// selecione o menu suspenso
const select = document.querySelector('#filtro');

// adicione um evento "change" para enviar uma requisição AJAX quando o usuário selecionar uma opção
select.addEventListener('change', function() {
  const xhr = new XMLHttpRequest();
  const filtro = select.value;
  const url = `/pesquisa?filtro=${filtro}`;

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        // atualize a seção de resultados com base nos dados filtrados
        // por exemplo:
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';

        for (let item of data) {
          const div = document.createElement('div');
          div.textContent = `${item.cidade}: ${item.topico}`;
          resultado.appendChild(div);
        }
      } else {
        console.error('Erro ao obter dados:', xhr.status);
      }
    }
  };

  xhr.open('GET', url, true);
  xhr.send();
});

//Atualizando os filtros

// manipulador de evento para a mudança do menu suspenso
select.addEventListener('change', function() {
    // obtém o valor selecionado
    const filtro = select.value;
  
    // faz uma requisição AJAX para o servidor
    $.get('/filtrar', {filtro: filtro}, function(data) {
      // remove todos os elementos da div de resultados
      $('#resultados').empty();
  
      // adiciona cada item da lista filtrada como um elemento div na div de resultados
      $.each(data, function(index, item) {
        $('#resultados').append($('<div>').text(item.cidade + ': ' + item.populacao));
      });
    });
  });
  
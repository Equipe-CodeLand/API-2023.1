function filtrar() {
    cidade = document.querySelector('#cidade').value
    tipo = document.querySelector('#topico').value
    filtro = {cidade, tipo}
    xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            result = JSON.parse(xhr.responseText)
            console.log(result)
        }
    };
    if (!cidade && !tipo) {
        alert('Preencha algum campo')
    } else {
        xhr.open('POST', 'http://localhost:5000/filtrar', true)
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.send(JSON.stringify(filtro));
    }
}
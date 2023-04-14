<select id="ano" name="ano" onchange="selecionarOpcao()">
  ...
</select>

<script>
  function selecionarOpcao() {
    var opcaoSelecionada = document.getElementById("opcoes").value;
    alert("Você selecionou a opção: " + opcaoSelecionada);
  }
</script>
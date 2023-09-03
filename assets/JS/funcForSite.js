function permitirApenasNumeros(input) {
    var valorAtual = input.value;
    var numerosApenas = valorAtual.replace(/[^0-9.]/g, ''); // Remove caracteres não numéricos
    input.value = numerosApenas; 

}
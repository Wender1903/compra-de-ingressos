function comprar() {
    let quantidadeDisponivel = 0;
    let ingresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    let quantidadePista = document.getElementById("qtd-pista");
    let quantidadeSuperior = document.getElementById("qtd-superior");
    let quantidadeInferior = document.getElementById("qtd-inferior");

    if (ingresso === "pista") {
        quantidadeDisponivel = parseInt(quantidadePista.textContent);
        acoes();
        quantidadePista.textContent = quantidadeDisponivel;

    } else if (ingresso === "superior") {
        quantidadeDisponivel = parseInt(quantidadeSuperior.textContent);
        acoes();
        quantidadeSuperior.textContent = quantidadeDisponivel;

    } else {
        quantidadeDisponivel = parseInt(quantidadeInferior.textContent);
        acoes();
        quantidadeInferior.textContent = quantidadeDisponivel;
    }

    function acoes() {
        if (quantidadeDisponivel === 0) {
            alert(`As cadeiras da parte "${ingresso}" da sala já foram alugadas, por favor, escolha outra cadeira`);
            return;
        } else if (quantidade > quantidadeDisponivel) {
            alert("A quantidade de cadeiras que você deseja alugar é maior do que temos disponível, por favor alugue um número de cadeiras válido");
            return;
        } else {
            quantidadeDisponivel -= quantidade;
        }
    }
}

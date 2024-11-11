function comprar() {
    let quantidadeDisponivel = 0
    let ingresso = document.getElementById("tipo-ingresso").value
    let quantidade = document.getElementById("qtd").value

    let quantidadePista = document.getElementById("qtd-pista");
    let quantidadeSuperior = document.getElementById("qtd-superior");
    let quantidadeInferior = document.getElementById("qtd-inferior");

    if (ingresso == "pista") {
        quantidadeDisponivel = quantidadePista.textContent;
        acoes();
        quantidadePista.innerHTML = quantidadeDisponivel;

    }

    else if (ingresso == "superior") {
        quantidadeDisponivel = quantidadeSuperior.textContent;
        acoes();
        quantidadeSuperior.innerHTML = quantidadeDisponivel;

    }
    else {
        quantidadeDisponivel = quantidadeInferior.textContent;
        acoes();
        quantidadeInferior.innerHTML = quantidadeDisponivel ;

    }



    function acoes() {
        if (quantidadeDisponivel == 0) {
            alert(`As cadeiras da parte "${ingresso}" da sala já foram alugadas, por favor, escolha outra cadeira`);
            return ;
        } else if (quantidade > quantidadeDisponivel) {
            alert("A quantidade de cadeiras que você deseja alugar é maior do que temos disponivel, por favor alugue um número de cadeiras válidas");
            return;
        } else {
            quantidadeDisponivel = quantidadeDisponivel - quantidade
        }
    }
}

Exercício3..js 

Luriany Marly 1°ano 

..................................

//função da media das vendas
function calcularMedia(total, quantidade) {
    return total / quantidade;
}

//função que classifica o desempenho pela media
function classificacao(media) {
    if (media >= 5000) {
        return "Otimo desempenho ";
    } else if (media >= 2000) {
        return "Bom desempenho";
    } else {
        return "Desempenho abaixo da meta";
    }
}

//quantidade de vendedores
let quantidadeVendedores = Number(prompt("Digite a quantdade de vendedores:"));

let totalVendas = 0;
let maiorVenda = 0;
let vendedoresMeta = 0;

//laço de repetição da entrada dos valores de venda
for (let i = 1; i <= quantidadeVendedores; i++) {

    let venda = Number(prompt("Digite o valor de vendas do vendedor " + i));

    //soma todas as vendas
    totalVendas = totalVendas + venda;

    //verifica qual foi a maior venda
    if (venda > maiorVenda) {
        maiorVenda = venda;
    } 

    //verifica se o vendedor atingiu a meta
    if (venda >= 2000) {
        vendedoresMeta++;
    }
}

//média das vendas
let media = calcularMedia(totalVendas, quantidadeVendedores);

//resultado da media
let resultado = classificacao(media);

//resultados que aparecem na tela
alert(
    "Média das vendas: R$ " + media.toFixed(2) +
    "\n Maior venda: R$ " + maiorVenda.toFixed(2) +
    "\n Vendedores que atingiram a meta: " + vendedoresMeta +
    "\n Classificação: " + resultado
);
Exercício2.js 



Luriany Marly 1°ano 



~~..................................~~



//função que calcula o total da venda

function calcularTotal(valor, quantidade) {

&#x20; return valor \* quantidade;

}



//função que calcula desconto

function calculoDesconto(total, desconto) {

&#x20; return total - (total \* desconto) / 100;

}



// quantos produtos serão vendidos

let quantidadeProdutos = Number(prompt("Quantos produtos serão comprados?"));



let totalVenda = 0;



//laço de repetição para o processo de venda de cada produto

for (let i = 1; i <= quantidadeProdutos; i++) {

&#x20; //dados dos produtos

&#x20; let produto = prompt("Digite o nome do produto " + i);

&#x20; let valor = Number(prompt("Digite o valor unitário de " + produto));

&#x20; let quantidade = Number(prompt("Digite a quantidade comprada de " + produto));

&#x20; let descontoProduto = Number(prompt("Digite o desconto do produto em %, caso nao houver desconto digite 0"));



&#x20; //conta para total daquele produto

&#x20; let totalProduto = calcularTotal(valor, quantidade);



&#x20; //verificação se o produto possui desconto

&#x20; if (descontoProduto > 0) {

&#x20;   totalProduto = calculoDesconto(totalProduto, descontoProduto);

&#x20; }



&#x20; //soma do valor do produto com o total da venda

&#x20; totalVenda = totalVenda + totalProduto;

}



//valor que o cliente deve pagar

alert("total da venda: R$ " + totalVenda.toFixed(2));



//forma de pagamento

let pagamento = prompt("Digite a forma de pagamento: dinheiro ou cartão");



//caso o pagamento for em dinheiro

if (pagamento.toLowerCase() == "dinheiro") {

&#x20; //valor recebido pelo cliente

&#x20; let valorPago = Number(prompt("Digite o valor pago pelo cliente"));



&#x20; //troco

&#x20; let troco = valorPago - totalVenda;



&#x20; //verificação se o cliente pagou o suficiente

&#x20; if (valorPago >= totalVenda) {

&#x20;   alert(

&#x20;     "total da venda: R$ " + totalVenda.toFixed(2) +

&#x20;       "\\n valor pago: R$ " + valorPago.toFixed(2) +

&#x20;       "\\n troco: R$ " + troco.toFixed(2),

&#x20;   );

&#x20; } else {

&#x20;   alert('valor pago nao é suficiente.');

&#x20; }

} else {

&#x20; //pagamento com cartão

&#x20; alert('Pagamento realizado com sucesso.\\nTotal: R$ ' + totalVenda.toFixed(2));

}


Exercício1.js 



Luriany Marly 1°ano 



<i>~~............................................~~</i>



//função que recebe 4 notas e calcula a média do aluno

function media(n1, n2, n3, n4) {

&#x20;   return (n1 + n2 + n3 + n4) / 4;

}



//função que verifica se o aluno passou de ano

function situacao(resultado) {

&#x20;   if (resultado >= 6) {

&#x20;       return "Aluno aprovado";

&#x20;   } else {

&#x20;       return "Aluno reprovado";

&#x20;   }

}



// variavel que guarda as notas digitadas pelo aluno

let n1

let n2

let n3

let n4



//laço de repetição para a entrada das notas

for (let i = 0; i < 4; i++) {

&#x20;   let nota = Number(prompt("Digite sua nota número " + (i + 1)));



//nota é armazenada na variavel

&#x20;   if (i == 1) {

&#x20;       n1 = nota;

&#x20;   } else if (i == 2) {

&#x20;       n2 = nota;

&#x20;   } else if (i == 3) {

&#x20;       n3 = nota;

&#x20;   } else {

&#x20;       n4 = nota;

&#x20;   }

}



//chamada das funções para mostrar os resultados

let resultado = media(n1, n2, n3, n4);

let situacaoFinal = situacao(resultado);



//aqui mostra na tela a média e se o aluno passou de ano

alert("Média final: " + resultado.toFixed(2) + "\\n" + situacaoFinal);








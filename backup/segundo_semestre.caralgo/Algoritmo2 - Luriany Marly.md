Algoritmo - Luriany Marly 



Atividades 



1-

function media(n1, n2, n3, n4) {

&#x20;return (n1 + n2 + n3 + n4) / 4;

}

let n1 = Number(prompt("Digite sua nota número 1"))

let n2 = Number(prompt("Digite sua nota número 2"))

let n3 = Number(prompt("Digite sua nota número  3"))

let n4 = Number(prompt("Digite sua nota número 4"))

let resultado = media(n1, n2, n3, n4);

alert(resultado);



~~......................................................~~



2-

function mp(nt1, ps1, nt2, ps2) {

&#x20;return (nt1 \* ps1) + (nt2 \* ps2) / (ps1 + ps2);

}



let n1 = Number(prompt("Digite sua nota número 1"));

let p1 = Number(prompt("Digite seu peso número 1"));

let n2 = Number(prompt("Digite sua nota número  2"));

let p2 = Number(prompt("Digite seu peso número 2"));



let resultado = mp(n1, p1, n2, p2);

alert(resultado.toFixed(2));



~~......................................................~~



3-

function quadrado(lado) {

&#x20;   return lado \* lado;

}



function triangulo(base, altura) {

&#x20;   return (base \* altura) / 2;

}



function circulo(raio) {

&#x20;   return 3.14 \* raio \* raio;

}



let lado = Number(prompt("Digite o lado do quadrado"));

let base = Number(prompt("Digite a base do triangulo"));

let altura = Number(prompt("Digite a altura do triangulo"));

let raio = Number(prompt("Digite o raio do circulo"));



let resultadoQuadrado = quadrado(lado);

let resultadoTriangulo = triangulo(base, altura);

let resultadoCirculo = circulo(raio);



alert("A area do quadrado é: " + resultadoQuadrado.toFixed(2));

alert("A area do triangulo é: " + resultadoTriangulo.toFixed(2));

alert("A area do circulo é: " + resultadoCirculo.toFixed(2));


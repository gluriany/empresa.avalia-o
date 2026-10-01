Algoritmo - Luriany Marly



Atividades



1- 

function mostrarMensagem() {

&#x20;alert("Olá!");

}

mostrarMensagem();

\--------------------------------

function saudacao(nome) {

&#x20;alert("Olá, " + nome + "!");

}

saudacao("Maria");



2-

function dobro() {

&#x20;let numero = 10;

&#x20;alert(numero \* 2);

}

dobro();

\--------------------------------

function dobro() {

&#x20;let numero = 25;

&#x20;alert(numero \* 2);

}

dobro();

\--------------------------------

function dobro(numero) {

&#x20;return numero \* 2;

}

alert(dobro(10));

alert(dobro(25));

alert(dobro(100));



3- 

function dobro(numero) {

&#x20;return numero \* 2;

}

dobro(10);



5- 

function dobro(numero) {

&#x20;return numero \* 2;

}

let resultado1 = dobro(5);

let resultado2 = dobro(8);

let resultado3 = dobro(20);



alert(resultado1)

alert(resultado2)

alert(resultado3)



6- 

function somar(a, b) {

&#x20;return a + b;

}

let resultado = somar(10, 20);

alert(resultado);



7- 

function subtrair(a, b) {

&#x20;return a - b;

}

alert(subtrair(10, 3));

\-------------------------------

function subtrair(a, b) {

&#x20;return a - b;

}

alert(subtrair(3, 10));



8- 

function calcularAreaRetangulo(largura, altura) {

&#x20;return largura \* altura;

}

let area = calcularAreaRetangulo(10, 5);

alert("Área: "+ area);



9- 

alert(10 \* 20);

alert(15 \* 30);

alert(25 \* 40);

\------------------------------

function calcularAreaRetangulo(largura, altura) {

&#x20;return largura \* altura;

}

alert(calcularAreaRetangulo(10, 20));

alert(calcularAreaRetangulo(15, 30));

alert(calcularAreaRetangulo(25, 40));



10- 

function calcularMedia(nota1, nota2, nota3) {

&#x20;return (nota1 + nota2 + nota3) / 3;

}

let media = calcularMedia(7, 8, 9);

alert(media);



11-

function apresentar(nome) {

&#x20;return "Olá, " + nome + "!";

}

alert(apresentar("Carlos"));



12- 

function verificarMaioridade(idade) {

&#x20;if (idade >= 18) {

&#x20;return "Maior de idade";

&#x20;} else {

&#x20;return "Menor de idade";

&#x20;}

}

alert(verificarMaioridade(20));

alert(verificarMaioridade(15));



13-

function somar(a, b) {

&#x20;return a + b;

}



let numero1 = parseFloat(prompt("Digite o primeiro número:"));

let numero2 = parseFloat(prompt("Digite o segundo número:"));

let resultado = somar(numero1, numero2);



alert("Resultado: " + resultado);



14- 

function mostrarTitulo() {

&#x20;alert("SISTEMA ESCOLAR");

}



mostrarTitulo();



15- 

function mostrarAluno(nome) {

&#x20;alert("Aluno: "+ nome);

}



mostrarAluno("Ana");



16- 

function mostrarMensagem(nome) {

&#x20;alert("Olá, " + nome);

}

mostrarMensagem("Humberto")



17-

function dobro(numero) {

&#x20;return numero \* 2;

}

alert(dobro(5))



18-

function calcularMedia(nota1, nota2, nota3) {

&#x20;return (nota1 + nota2 + nota3) / 3;

}

function verificarSituacao(media) {

&#x20;if (media >= 6) {

&#x20;return "Aprovado";

&#x20;} else {

&#x20;return "Reprovado";

&#x20;}

}

let nome = prompt("Digite o nome do estudante:");

let nota1 = parseFloat(prompt("Digite a primeira nota:"));

let nota2 = parseFloat(prompt("Digite a segunda nota:"));

let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = calcularMedia(nota1, nota2, nota3);

let situacao = verificarSituacao(media);

alert(

&#x20;"Aluno: " + nome +

&#x20;"\\nMédia: " + media.toFixed(2) +

&#x20;"\\nSituação: " + situacao

);



19- 

function somar(a, b) {

&#x20;return a + b;

}

alert(somar(10, 20));



20-

function subtrair(a, b) {

&#x20;return a - b;

}

alert(subtrair(20, 5));

alert(subtrair(5, 20));



21-

function mostrarMensagem() {

&#x20;alert("Olá!");

}

mostrarMensagem();



22-

function somar(a, b) {

&#x20;alert(a + b);

}

let resultado = somar(10, 20);



23-

function somar(a, b) {

&#x20;return a + b;

}



let resultado = somar(10, 20);

alert(resultado)



24-

function calcularArea(largura, altura) {

&#x20;return largura \* altura;

}

alert(calcularArea(10, 5));

alert(calcularArea(20, 8));

alert(calcularArea(30, 10));



25-

function calcularMedia(n1, n2, n3) {

&#x20;return (n1 + n2 + n3) / 3;

}

alert(calcularMedia(7, 8, 9));
































































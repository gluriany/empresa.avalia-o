Atividades - Luriany Marly



**1 – Saudação personalizada**



let nome = prompt("Digite seu nome")



function boasVindas(nome) {

&#x20;   alert("Bem-vindo " + nome);

}



boasVindas(nome);

~~....................................~~

**2 – Dobro**



let numero = prompt("Digite um número, para mostrar seu dobro");



function dobro(numero) {

&#x20;   alert(numero \* 2);

}



dobro(numero);

~~...................................~~

**3 – Triplo**



let numero = prompt("Digite um número, para mostrar seu triplo");



function dobro(numero) {

&#x20;   alert(numero \* 3);

}



dobro(numero);

~~..................................~~

**4 – Soma de dois números**



let numero1 = Number(prompt("Digite primeiro número, para somar com o segundo número"));

let numero2 = Number(prompt("Digite segundo número, para somar com o primeiro número"));



function somar(numero1, numero2) {

&#x20;   alert(numero1 + numero2);

}



somar(numero1, numero2); 

~~..................................~~

**5 – Subtração**



let numero1 = Number(prompt("Digite primeiro número, para subtrair com o segundo número"));

let numero2 = Number(prompt("Digite segundo número, para subtrair com o primeiro número"));



function subtrair(numero1, numero2) {

&#x20;   alert(numero1 - numero2);

}



subtrair(numero1, numero2); 

~~..................................~~

&#x20;**6 – Multiplicação**



let numero1 = Number(prompt("Digite primeiro número, para multiplicar com o segundo número"));

let numero2 = Number(prompt("Digite segundo número, para multiplicar com o primeiro número"));



function multiplicar(numero1, numero2) {

&#x20;   alert(numero1 \* numero2);

}



multiplicar(numero1, numero2); 

~~.................................~~

**7 – Média de três notas**



let nota1 = Number(prompt("Digite a primeira nota, para calcular a média"));

let nota2 = Number(prompt("Digite a segunda nota, para calcular a média"));

let nota3 = Number(prompt("Digite a terceira nota, para calcular a média"));



function calcularMedia(nota1, nota2, nota3) {

&#x20; alert((nota1 + nota2 + nota3) / 3);

}



calcularMedia(nota1, nota2, nota3);

~~..................................~~

**8 – Maior número**



function maiorNumero(numero1, numero2) {

&#x20;   if (numero1 > numero2) {

&#x20;       return numero1;

&#x20;   } else if (numero2 > numero1) {

&#x20;       return numero2;

&#x20;   } else {

&#x20;       return "Os números são iguais.";

&#x20;   }

}



let numero1 = Number(prompt("Digite o primeiro número"));

let numero2 = Number(prompt("Digite o segundo número"));



alert(maiorNumero(numero1, numero2));

~~..................................~~

**9 – Área do retângulo**



let largura = Number(prompt("Digite a largura do retângulo"));

let altura = Number(prompt("Digite a altura"));



function calcularArea(largura, altura) {

&#x20; alert(largura \* altura);

}



calcularArea(largura, altura);

~~..................................~~

**10 – Conversão de temperatura**



let celsius = Number(prompt("Digite a temperatura em celsius"));



function celsiusParaFahrenheit(celsius) {

&#x20; alert((celsius \* 9/5) + 32);

}



celsiusParaFahrenheit(celsius);

~~...................................~~

**11 – Saudação por período**



function cumprimentar(periodo) {

&#x20;   if (periodo === "manhã") {

&#x20;       return "Bom dia!";

&#x20;   } else if (periodo === "tarde") {

&#x20;       return "Boa tarde!";

&#x20;   } else if (periodo === "noite") {

&#x20;       return "Boa noite!";

&#x20;   }

}

let periodo = prompt("Digite o período do dia");



alert(cumprimentar(periodo));

~~...................................~~

**12 – Desconto em compras**



let valor = Number(prompt("Digite o valor"));



function calcularDesconto(valor) {

&#x20; alert(valor - 10);

}



calcularDesconto(valor);

~~...................................~~

**13 – Contagem Progressiva**



function contarAte(numero) {

&#x20;   for (let i = 1; i <= numero; i++) {

&#x20;       alert(i);

&#x20;   }

}

let numero = Number(prompt("Digite um número, para contar até ele"));



contarAte(numero);

~~...................................~~

**14 – Tabuada**



function multiplicarTabuada(numero) {

&#x20;   for (let i = 1; i <= 10; i++) {

&#x20;       alert(numero + " x " + i + " = " + (numero \* i));

&#x20;   }

}



let numero = Number(prompt("Digite um número, para mostrar sua tabuada"));



multiplicarTabuada(numero);

~~...................................~~

**15 – Repetir Mensagem**



function repetirTexto(texto, numero) {

&#x20;   for (let i = 1; i <= numero; i++) {

&#x20;       alert(texto);

&#x20;   }

}



let texto = prompt("Digite um texto");

let numero = Number(prompt("Digite o número de vezes para repetir"));



repetirTexto(texto, numero);

~~...................................~~

**16 – Conversão de moedas**



function converterDolarParaReal(dolar, real) {

&#x20;   return dolar \* real;

}



let dolar = Number(prompt("Digite o valor em dólares"));

let real = Number(prompt("Digite o valor do real para 1 dólar"));



alert(converterDolarParaReal(dolar, real));

~~...................................~~

**17 – Calculadora de IMC**



function calcularIMC(peso, altura) {

&#x20;   return peso / (altura \* altura);

}



let peso = Number(prompt("Digite seu peso em kg"));

let altura = Number(prompt("Digite sua altura em metros"));



alert(calcularIMC(peso, altura));

~~...................................~~

**18 – Três funções em mesmo programa**



function perimetroRetangulo(base, altura) {

&#x20;   return 2 \* (base + altura);

}



function areaRetangulo(base, altura) {

&#x20;   return base \* altura;

}



function exibirRelatorio(base, altura) {

&#x20;   let perimetro = perimetroRetangulo(base, altura);

&#x20;   let area = areaRetangulo(base, altura);



&#x20;   alert("Perímetro: " + perimetro);

&#x20;   alert("Área: " + area);

}



let base = Number(prompt("Digite a base do retângulo"));

let altura = Number(prompt("Digite a altura do retângulo"));



exibirRelatorio(base, altura);

~~...................................~~

**19 – Quatro funções em mesmo programa**



function somar(numero1, numero2) {

&#x20;   return numero1 + numero2;

}



function subtrair(numero1, numero2) {

&#x20;   return numero1 - numero2;

}



function multiplicar(numero1, numero2) {

&#x20;   return numero1 \* numero2;

}



function dividir(numero1, numero2) {

&#x20;   return numero1 / numero2;

}



let numero1 = Number(prompt("Digite o primeiro número"));

let numero2 = Number(prompt("Digite o segundo número"));



alert("Soma: " + somar(numero1, numero2));

alert("Subtração: " + subtrair(numero1, numero2));

alert("Multiplicação: " + multiplicar(numero1, numero2));

alert("Divisão: " + dividir(numero1, numero2));

~~...................................~~

**20 – Caixa Eletrônico Simples**



function sacarDinheiro(valor) {

&#x20;   if (valor % 10 !== 0) {

&#x20;       return "Valor inválido para saque";

&#x20;   }



&#x20;   let notas = valor / 10;



&#x20;   return notas + " notas de R$ 10";

}



let valor = Number(prompt("Digite o valor que deseja sacar"));



alert(sacarDinheiro(valor));




























































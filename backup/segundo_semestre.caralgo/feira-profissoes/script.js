let evidencias = 0;
let contradicoes = 0;
let pontos = 0;
let tempo = 600;
let evidenciasEncontradas = [];
let ordem = [];

function iniciarInvestigacao() {
document.getElementById("inicio").style.display = "none";
document.getElementById("central").classList.remove("escondida");
iniciarTempo();
}

function abrirAba(nome) {
let abas = document.querySelectorAll(".aba");

abas.forEach(function(aba) {
    aba.classList.add("escondida");
});

document.getElementById(nome).classList.remove("escondida");

}

function iniciarTempo() {
let contador = setInterval(function() {
if (tempo <= 0) {
clearInterval(contador);
alert("⏰ O tempo acabou!");
return;
}

    tempo--;

    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    document.getElementById("tempo").innerText =
        minutos + ":" + segundos;
}, 1000);

}

function adicionarEvidencia(texto) {
if (evidenciasEncontradas.includes(texto)) {
return;
}

evidenciasEncontradas.push(texto);
evidencias++;
pontos += 10;

document.getElementById("contadorEvidencias").innerText =
    evidencias + "/18";

document.getElementById("pontos").innerText =
    pontos;

let lista = document.getElementById("listaEvidencias");

if (evidencias == 1) {
    lista.innerHTML = "";
}

let novaEvidencia = document.createElement("p");

novaEvidencia.innerText = "🔎 " + texto;

lista.appendChild(novaEvidencia);

}

function investigar(objeto) {
let resultado = document.getElementById("resultadoCena");

if (objeto == "computador") {
    resultado.innerHTML = `
        <h3>💻 Computador</h3>
        <p>
            O computador foi usado poucos minutos
            antes do apagão.
        </p>
        <p>
            Existe um acesso ao sistema às 21h36.
        </p>
        <p>
            O usuário não está identificado.
        </p>
    `;

    adicionarEvidencia(
        "Acesso desconhecido ao computador às 21h36."
    );
}

else if (objeto == "servidor") {
    resultado.innerHTML = `
        <h3>🖥️ Servidor</h3>
        <p>
            O servidor foi acessado durante o apagão.
        </p>
        <p>
            Um arquivo chamado "PROJETO_13"
            foi aberto e depois apagado.
        </p>
    `;

    adicionarEvidencia(
        "Arquivo PROJETO_13 foi acessado e apagado."
    );
}

else if (objeto == "bancada") {
    resultado.innerHTML = `
        <h3>🧪 Bancada</h3>
        <p>
            Existe uma impressão digital parcial.
        </p>
        <p>
            A impressão pertence a Sofia.
        </p>
        <div class="alerta">
            ⚠️ Isso não prova que Sofia cometeu o crime.
            <br><br>
            Ela trabalha diariamente no laboratório.
        </div>
    `;

    adicionarEvidencia(
        "Impressão digital de Sofia encontrada na bancada."
    );
}

else if (objeto == "porta") {
    resultado.innerHTML = `
        <h3>🚪 Porta</h3>
        <p>
            Não existem sinais de arrombamento.
        </p>
        <p>
            A porta foi aberta usando o cartão
            de acesso de um funcionário.
        </p>
    `;

    adicionarEvidencia(
        "Porta aberta com cartão de acesso."
    );
}

else if (objeto == "celular") {
    resultado.innerHTML = `
        <h3>📱 Celular</h3>
        <p>
            O celular não pertence a nenhum
            funcionário registrado.
        </p>
        <p>
            Existe uma mensagem recebida às 21h32.
        </p>
        <p>
            A mensagem diz:
            "Quando as luzes apagarem, faça o combinado."
        </p>
    `;

    adicionarEvidencia(
        "Celular desconhecido com mensagem suspeita."
    );
}

else if (objeto == "lixeira") {
    resultado.innerHTML = `
        <h3>🗑️ Lixeira</h3>
        <p>
            Foram encontrados pedaços de papel.
        </p>
        <p>
            Em um deles aparece parte de uma senha:
            <strong>BLK-13</strong>
        </p>
    `;

    adicionarEvidencia(
        "Pedaço de papel com parte da senha BLK-13."
    );
}

}

function interrogar(nome) {
let resultado =
document.getElementById("interrogatorio");

if (nome == "Lara") {
    resultado.innerHTML = `
        <h3>👩 Lara</h3>
        <p>
            Lara diz que estava organizando
            os documentos da feira.
        </p>
        <p>
            Ela afirma que não entrou no laboratório
            depois das 21h.
        </p>
        <p>
            Porém, o registro mostra que seu cartão
            foi usado às 21h39.
        </p>
    `;

    contradicoes++;
}

else if (nome == "Miguel") {
    resultado.innerHTML = `
        <h3>👨 Miguel</h3>
        <p>
            Miguel estava trabalhando como segurança.
        </p>
        <p>
            Ele afirma que o apagão foi inesperado.
        </p>
        <p>
            Porém, ele foi uma das primeiras pessoas
            a saber que as câmeras tinham parado.
        </p>
    `;

    contradicoes++;
}

else if (nome == "Rafael") {
    resultado.innerHTML = `
        <h3>👨 Rafael</h3>
        <p>
            Rafael é o programador responsável
            pelo sistema do laboratório.
        </p>
        <p>
            Ele conhece as senhas e sabe como
            acessar o servidor.
        </p>
        <p>
            Rafael afirma que não estava no prédio
            durante o apagão.
        </p>
    `;
}

else if (nome == "Sofia") {
    resultado.innerHTML = `
        <h3>👩 Sofia</h3>
        <p>
            Sofia diz que saiu do laboratório
            às 21h20.
        </p>
        <p>
            Ela admite que sua impressão digital
            pode estar na bancada.
        </p>
        <p>
            Porém, o registro mostra uma atividade
            relacionada ao seu usuário às 21h43.
        </p>
    `;

    contradicoes++;
}

else if (nome == "Daniel") {
    resultado.innerHTML = `
        <h3>👨 Daniel</h3>
        <p>
            Daniel era visitante.
        </p>
        <p>
            Ele afirma que foi embora antes das 21h30.
        </p>
        <p>
            O problema é que o sistema de entrada
            não registrou sua saída.
        </p>
    `;

    contradicoes++;
}

document.getElementById("contadorContradicoes").innerText =
    contradicoes;

}

function analisarDigital(tipo) {
let resultado =
document.getElementById("resultadoDigital");

if (tipo == "wifi") {
    resultado.innerHTML = `
        <h3>📡 Wi-Fi</h3>
        <p>
            Um dispositivo desconhecido ficou
            conectado ao Wi-Fi durante o apagão.
        </p>
    `;

    adicionarEvidencia(
        "Dispositivo desconhecido conectado ao Wi-Fi."
    );
}

else if (tipo == "senha") {
    resultado.innerHTML = `
        <h3>🔐 Senha</h3>
        <p>
            A senha utilizada para acessar o sistema
            foi BLK-13.
        </p>
        <p>
            Apenas algumas pessoas conheciam essa senha.
        </p>
    `;

    adicionarEvidencia(
        "Senha BLK-13 usada durante o apagão."
    );
}

else if (tipo == "camera") {
    resultado.innerHTML = `
        <h3>📹 Câmeras</h3>
        <p>
            As gravações entre 21h39 e 21h46
            foram apagadas.
        </p>
        <p>
            Antes disso, não aparece ninguém
            carregando o protótipo.
        </p>
    `;

    adicionarEvidencia(
        "Gravações entre 21h39 e 21h46 foram apagadas."
    );
}

else if (tipo == "servidor") {
    resultado.innerHTML = `
        <h3>🖥️ Servidor</h3>
        <p>
            O servidor recebeu vários comandos
            durante o apagão.
        </p>
        <p>
            Alguns comandos foram executados
            remotamente.
        </p>
    `;

    adicionarEvidencia(
        "Comandos foram executados remotamente."
    );
}

else if (tipo == "mensagem") {
    resultado.innerHTML = `
        <h3>📩 Mensagens</h3>
        <p>
            Foi encontrada uma conversa apagada.
        </p>
        <p>
            Uma das mensagens dizia:
            "Depois do apagão, ninguém vai conseguir
            ver o que aconteceu."
        </p>
    `;

    adicionarEvidencia(
        "Mensagem suspeita sobre o apagão."
    );
}

else if (tipo == "arquivo") {
    resultado.innerHTML = `
        <h3>📁 Arquivo apagado</h3>
        <p>
            Um arquivo apagado foi recuperado.
        </p>
        <p>
            Ele contém informações sobre o protótipo
            e sobre o sistema de segurança.
        </p>
    `;

    adicionarEvidencia(
        "Arquivo apagado recuperado."
    );
}

}

function evento(numero) {
ordem.push(numero);

let resultado =
    document.getElementById("resultadoTempo");

if (ordem.length < 6) {
    resultado.innerHTML =
        "Eventos escolhidos: " + ordem.length + "/6";

    return;
}

let ordemCorreta = [1, 0, 2, 3, 4, 5];
let certo = true;

for (let i = 0; i < ordemCorreta.length; i++) {
    if (ordem[i] != ordemCorreta[i]) {
        certo = false;
    }
}

if (certo) {
    resultado.innerHTML = `
        <h3>✅ Cronologia correta!</h3>
        <p>
            Você conseguiu organizar os acontecimentos.
        </p>
    `;

    pontos += 30;
}

else {
    resultado.innerHTML = `
        <h3>❌ A ordem está errada.</h3>
        <p>
            Analise novamente os horários
            e tente outra vez.
        </p>
    `;
}

document.getElementById("pontos").innerText =
    pontos;

}

function resolverCaso() {
let planejador =
document.getElementById("planejador").value;

let executor =
    document.getElementById("executor").value;

let ajudante =
    document.getElementById("ajudante").value;

let motivo =
    document.getElementById("motivo").value;

let resultado =
    document.getElementById("resultadoFinal");

if (
    planejador == "" ||
    executor == "" ||
    ajudante == "" ||
    motivo == ""
) {
    resultado.innerHTML = `
        <div class="alerta">
            ⚠️ Preencha todas as opções antes
            de apresentar sua teoria.
        </div>
    `;

    return;
}

if (
    planejador == "Rafael" &&
    executor == "Daniel" &&
    ajudante == "Miguel" &&
    motivo == "encobrir"
) {
    pontos += 100;

    resultado.innerHTML = `
        <h2>🎉 CASO RESOLVIDO!</h2>
        <p>
            Você conseguiu descobrir o que aconteceu
            no Laboratório 13.
        </p>
        <p>
            <strong>Rafael</strong> planejou a invasão
            usando seus conhecimentos sobre o sistema.
        </p>
        <p>
            <strong>Daniel</strong> executou a ação
            dentro do laboratório.
        </p>
        <p>
            <strong>Miguel</strong> ajudou manipulando
            o sistema de segurança.
        </p>
        <p>
            O verdadeiro objetivo era
            <strong>encobrir uma descoberta</strong>
            relacionada ao protótipo.
        </p>
        <h3>
            ⭐ Pontuação final: ${pontos}
        </h3>
        <p>
            Excelente trabalho, investigador!
        </p>
    `;
}

else {
    resultado.innerHTML = `
        <h2>❌ Caso não resolvido</h2>
        <p>
            Sua teoria ainda possui algumas
            contradições.
        </p>
        <p>
            Volte para as outras áreas da investigação
            e procure novas evidências.
        </p>
        <p>
            🔎 Não tire conclusões muito rápido!
        </p>
        <h3>
            ⭐ Pontuação: ${pontos}
        </h3>
    `;
}

}
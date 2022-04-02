function novaOperacao() {
  document.getElementById(
    "calculo"
  ).innerHTML = `<p>Qual operação você deseja fazer?</p><br>
    <button type="submit" onclick="escolhaSoma()">+</button>
    <button type="submit" onclick="escolhaSubtracao()">-</button><br>
    <button type="submit" onclick="escolhaMultiplicacao()">x</button>
    <button type="submit" onclick="escolhaDivisao()">÷</button><br><br>
    <button type="submit" onclick="sair()">Sair</button>`;
}

function escolhaSoma() {
  document.getElementById(
    "calculo"
  ).innerHTML = `Faça a operação </p><br> <input type="number" id="numeroSoma1"/> + <input type="number" id="numeroSoma2"/> <br><br> <button type="submit" onclick="calculoSoma()">Calcular</button>`;
}

function calculoSoma() {
  var numeroSoma1 = parseFloat(document.getElementById("numeroSoma1").value);
  var numeroSoma2 = parseFloat(document.getElementById("numeroSoma2").value);

  var resultadoSoma = numeroSoma1 + numeroSoma2;

  if (isNaN(resultadoSoma)) {
    alert(`Operação Inválida!`);
  } else {
    document.getElementById(
      "calculo"
    ).innerHTML = `<h2>O resultado é ${resultadoSoma}</h2>
  <p>Deseja fazer outra operação?</p> <br><br> <button type="submit" onclick="novaOperacao()">Sim</button> <button type="submit" onclick="sair()">Não</button>`;
  }
}

function escolhaSubtracao() {
  document.getElementById(
    "calculo"
  ).innerHTML = `Faça a operação </p><br> <input type="number" id="numeroSubtracao1"/> - <input type="number" id="numeroSubtracao2"/> <br><br> <button type="submit" onclick="calculoSubtracao()">Calcular</button>`;
}

function calculoSubtracao() {
  var numeroSubtracao1 = parseFloat(
    document.getElementById("numeroSubtracao1").value
  );
  var numeroSubtracao2 = parseFloat(
    document.getElementById("numeroSubtracao2").value
  );

  var resultadoSubtracao = numeroSubtracao1 - numeroSubtracao2;

  if (isNaN(resultadoSubtracao)) {
    alert(`Operação Inválida!`);
  } else {
    document.getElementById(
      "calculo"
    ).innerHTML = `<h2>O resultado é ${resultadoSubtracao}</h2>
  <p>Deseja fazer outra operação?</p> <br><br> <button type="submit" onclick="novaOperacao()">Sim</button> <button type="submit" onclick="sair()">Não</button>`;
  }
}

function escolhaMultiplicacao() {
  document.getElementById(
    "calculo"
  ).innerHTML = `Faça a operação </p><br> <input type="number" id="numeroMultiplicacao1"/> X <input type="number" id="numeroMultiplicacao2"/> <br><br> <button type="submit" onclick="calculoMultiplicacao()">Calcular</button>`;
}

function calculoMultiplicacao() {
  var numeroMultiplicacao1 = parseFloat(
    document.getElementById("numeroMultiplicacao1").value
  );
  var numeroMultiplicacao2 = parseFloat(
    document.getElementById("numeroMultiplicacao2").value
  );

  var resultadoMultiplicacao = numeroMultiplicacao1 * numeroMultiplicacao2;

  if (isNaN(resultadoMultiplicacao)) {
    alert(`Operação Inválida!`);
  } else {
    document.getElementById(
      "calculo"
    ).innerHTML = `<h2>O resultado é ${resultadoMultiplicacao}</h2>
  <p>Deseja fazer outra operação?</p> <br><br> <button type="submit" onclick="novaOperacao()">Sim</button> <button type="submit" onclick="sair()">Não</button>`;
  }
}

function escolhaDivisao() {
  document.getElementById(
    "calculo"
  ).innerHTML = `Faça a operação </p><br> <input type="number" id="numeroDivisao1"/> ÷ <input type="number" id="numeroDivisao2"/> <br><br> <button type="submit" onclick="calculoDivisao()">Calcular</button>`;
}

function calculoDivisao() {
  var numeroDivisao1 = parseFloat(
    document.getElementById("numeroDivisao1").value
  );
  var numeroDivisao2 = parseFloat(
    document.getElementById("numeroDivisao2").value
  );

  var resultadoDivisao = numeroDivisao1 / numeroDivisao2;

  if (isNaN(resultadoDivisao) || resultadoDivisao == Infinity) {
    alert(`Operação Inválida!`);
  } else {
    document.getElementById(
      "calculo"
    ).innerHTML = `<h2>O resultado é ${resultadoDivisao}</h2>
  <p>Deseja fazer outra operação?</p> <br><br> <button type="submit" onclick="novaOperacao()">Sim</button> <button type="submit" onclick="sair()">Não</button>`;
  }
}

function sair() {
  document.getElementById(
    "calculo"
  ).innerHTML = `<h2>Até a próxima.</h2><br><br> <button type="submit" onclick="novaOperacao()">Nova Operação</button><br><br>
  <p>Me siga nas redes sociais</p><br><a href="https://github.com/nathancanedo" target="_blank"><img class="logos" id="github" src="https://cdn-icons-png.flaticon.com/512/733/733609.png"/></a> <a href="https://www.linkedin.com/in/nathancanedo/" target="_blank"><img class="logos" id="linkedin" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"/></a> <a href="https://www.instagram.com/nathancanedo/" target="_blank"><img class="logos" id="instagram" src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"/></a> <a href="https://twitter.com/nathancanedo" target="_blank"><img class="logos" id="twitter" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"/></a>
`;

}

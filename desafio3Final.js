//Jogo Front ou Back
const userName = prompt('Qual é o seu nome?');
let language = prompt(`Olá ${userName}, qual linguagem de programação você está estudando?`);
let devArea = '';
let devFramework = '';
let newTech = '';
let technology = '';

// Validação das respostas
while (true) {
  devArea = prompt('Você deseja seguir área de Front-End ou Back-End? Digite a área desejada:').toLowerCase();
  if (devArea.startsWith('front') || devArea.startsWith('back')) {
    break;
  } else {
    alert('Opção inválida. Por favor, escolha entre Front-End ou Back-End.');
  };
};

// Função usando Switch Casa para definir escolha do framework
function chooseFramework(area) {
  let framework = '';
  while (true) {
    framework = prompt(`Aprender ${area}?`).toLowerCase();
    switch (framework) {
      case 'react':
        alert('Ótima escolha! React é uma biblioteca JavaScript muito popular para construção de interfaces de usuário interativas.');
        break;
      case 'vue':
        alert('Ótima escolha! Vue é um framework JavaScript progressivo para a construção de interfaces de usuário.');
        break;
      case 'c#':
        alert('Ótima escolha! C# é uma linguagem de programação robusta e amplamente utilizada no desenvolvimento de aplicações Windows e jogos Unity.');
        break;
      case 'java':
        alert('Ótima escolha! Java é uma linguagem de programação versátil e muito usada no desenvolvimento de aplicações empresariais.');
        break;
      default:
        alert('Opção inválida, tente novamente!');
        continue;
    };
    return framework;
  };
};

// Chamando a função
if (devArea.startsWith('front')) {
  devFramework = chooseFramework('React ou Vue');
} else if (devArea.startsWith('back')) {
  devFramework = chooseFramework('C# ou Java');
};

let specializationOrFullstack = '';

while (true) {
  specializationOrFullstack = prompt(`${userName}, você pretende se especializar ou se tornar Full-Stack? Digite 1 para especialização e 2 para Full-Stack.`);
  if (specializationOrFullstack === '1' || specializationOrFullstack === '2') {
    break;
  } else {
    alert('Opção inválida, tente novamente!');
  };
};

if (specializationOrFullstack === '1') {
  alert('Parabéns! Continue aprendendo e se aprimorando!');
} else if (specializationOrFullstack === '2') {
  alert('Excelente escolha! Ser Fullstack permitirá que você trabalhe em diversas áreas e tenha um conhecimento abrangente.');
};

while (true) {
  technology = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite "Sim" ou "Não".').toLowerCase();
  if (!['sim', 's', 'não', 'nao', 'n'].includes(technology)) {
    alert('Opção Inválida');
  } else if (technology === 'sim' || technology === 's') {
    newTech = prompt('Qual?');
    alert(`${newTech} é realmente uma tecnologia muito legal!`);
  } else if (technology === 'não' || technology === 'nao' || technology === 'n') {
    break;
  };
};

alert('Ok, até a próxima!');
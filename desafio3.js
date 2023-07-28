//Jogo Front ou Back
let user = prompt ('Qual é o seu nome?');
let language = prompt (`Olá ${user}, qual linguagem de programação você está estudando?`);
let area = prompt ('Você deseja seguir área de Front-End ou Back-End? Digite a área desejada:').toLowerCase();
let framework = '';

// Validação das respostas
if (area === 'front-End' || area === 'front') {
    framework = prompt ('Aprender React ou Vue?').toLowerCase();
    if (framework === 'react') {
        alert ('Ótima escolha! React é uma biblioteca JavaScript muito popular para construção de interfaces de usuário interativas.');
    } else if (framework === 'vue') {
        alert ('Ótima escolha! Vue é um framework JavaScript progressivo para a construção de interfaces de usuário.');
    } else {
        alert ('Opção inválida.');
    }; 
} else if (area === 'back-End' || area === 'back') {
    framework = prompt ('Aprender C# ou Java?').toLowerCase();
    if (framework === 'c#') {
        alert ('Ótima escolha! C# é uma linguagem de programação robusta e amplamente utilizada no desenvolvimento de aplicações Windows e jogos Unity.');
    } else if (framework === 'java') {
        alert ('Ótima escolha! Java é uma linguagem de programação versátil e muito usada no desenvolvimento de aplicações empresariais.');
    } else {
        alert ('Opção Inválida');
    };
} else {
    alert('Opção inválida. Por favor, escolha entre Front-End ou Back-End.');
    area = prompt ('Você deseja seguir área de Front-End ou Back-End? Digite a área desejada:').toLowerCase();
};

const specializationOrFullstack = prompt (`${user}, você pretende se especializar ou se tornar Full-Stack? Digite 1 para especialização e 2 para Full-Stack.`);

if (specializationOrFullstack === '1') {
    alert('Parabéns! Continue aprendendo e se aprimorando!');
} else if (specializationOrFullstack === '2') {
    alert ('Excelente escolha! Ser Fullstack permitirá que você trabalhe em diversas áreas e tenha um conhecimento abrangente.');
} else {
    alert ('Opção inválida');
};

let technology = prompt ('Tem mais alguma tecnologia que você gostaria de aprender? Digite "Sim" ou "Não".').toLowerCase();
while (technology !== 'sim' && technology !== 's' && technology !== 'não' && technology !== 'nao' && technology !== 'n') {
    alert('Opção Inválida');
    technology = prompt ('Tem mais alguma tecnologia que você gostaria de aprender? Digite "Sim" ou "Não".').toLowerCase();
    if (technology === 'sim' || technology === 's') {
    newTech = prompt ('Qual?');
    alert(`${newTech} é realmente uma tecnologia muito legal!`);
    technology = prompt ('Tem mais alguma tecnologia que você gostaria de aprender? Digite "Sim" ou "Não".').toLowerCase();
    } else if(technology === 'não' || technology === 'nao' || technology ==='n') {
        break;
    };
};
   
alert('Ok, até a próxima!');

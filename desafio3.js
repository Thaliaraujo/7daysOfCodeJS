//Jogo Front ou Back
let user = prompt ('Qual é o seu nome?');
let language = prompt (`Olá ${user}, qual linguagem de programação você está estudando?`);
let area = '';
let framework = '';
let newTech = '';
let technology = '';

// Validação das respostas
while ( area = prompt ('Você deseja seguir área de Front-End ou Back-End? Digite a área desejada:').toLowerCase()) {
    if (area === 'front-End' || area === 'front' || area === 'back-End' || area === 'back') {
        break;
    } else {
        alert('Opção inválida. Por favor, escolha entre Front-End ou Back-End.');
    };
};

if (area === 'front-End' || area === 'front') {
    while (    framework = prompt ('Aprender React ou Vue?').toLowerCase()) {
        if (framework === 'react') {
            alert ('Ótima escolha! React é uma biblioteca JavaScript muito popular para construção de interfaces de usuário interativas.');
            break;
        } else if (framework === 'vue') {
            alert ('Ótima escolha! Vue é um framework JavaScript progressivo para a construção de interfaces de usuário.');
            break;
        } else {
            alert ('Opção inválida.');
        }; 
    };
} else if (area === 'back-End' || area === 'back') {
    while (    framework = prompt ('Aprender C# ou Java?').toLowerCase()) {
        if (framework === 'c#') {
            alert ('Ótima escolha! C# é uma linguagem de programação robusta e amplamente utilizada no desenvolvimento de aplicações Windows e jogos Unity.');
            break;
        } else if (framework === 'java') {
            alert ('Ótima escolha! Java é uma linguagem de programação versátil e muito usada no desenvolvimento de aplicações empresariais.');
            break;
        } else {
            alert ('Opção Inválida');
        };
    };  
};


let specializationOrFullstack = '';

while( specializationOrFullstack = prompt (`${user}, você pretende se especializar ou se tornar Full-Stack? Digite 1 para especialização e 2 para Full-Stack.`)) {
    if (specializationOrFullstack === '1' || specializationOrFullstack === '2') {
        break;
    } else {
        alert ('Opção inválida, tente novamente!');
    };
};

if (specializationOrFullstack === '1') {
    alert('Parabéns! Continue aprendendo e se aprimorando!');
} else if (specializationOrFullstack === '2') {
    alert ('Excelente escolha! Ser Fullstack permitirá que você trabalhe em diversas áreas e tenha um conhecimento abrangente.');
};



while ( technology = prompt ('Tem mais alguma tecnologia que você gostaria de aprender? Digite "Sim" ou "Não".').toLowerCase()) {
        if (technology !== 'sim' && technology !== 's' && technology !== 'não' && technology !== 'nao' && technology !== 'n') {
            alert('Opção Inválida');
        } else if (technology === 'sim' || technology === 's') {
            let newTech = prompt('Qual?');
            alert(`${newTech} é realmente uma tecnologia muito legal!`);
        } else if( technology === 'não' || technology === 'nao' || technology ==='n') {
            break;
    };
};
   
alert('Ok, até a próxima!');

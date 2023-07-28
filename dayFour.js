const numberRandom = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let guess = '';
let correct = false;

for (let i = 0; i < 3; i++) {
    guess = prompt ('Tente adivinhar o número de 0 a 10:');
    if (guess === numberRandom) {
        alert(`Parabéns você acertou! O número era ${numberRandom}.`)
        correct = true;
        break;
    } 
    alert('Errado!');
};

if (!correct){
    alert(`Infelizmente você não acertou! O número era ${numberRandom}`);
};


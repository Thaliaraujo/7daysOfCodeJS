//Lógica JS 1/7: Operações Booleanas.
let numberOne = 1;
let stringOne = '1';
let numberTen = 10;
let stringTen = '10';
let numberThirty = 30;
let stringThirty = '30';

// Verifica se as variáveis numberOne e stringOne têm o mesmo valor, mas tipos diferentes.
if (numberOne == stringOne) {
  console.log('As variáveis numberOne e stringOne tem o mesmo valor, mas tipos diferentes.');
} else {
  console.log('As variáveis numberOne e stringOne não tem o mesmo valor.');
};

// Verifica se as variáveis numberTen e stringTen tem o mesmo valor e mesmo tipo.
if (numberTen === stringTen) {
  console.log('As variáveis numberTen e stringTen tem o mesmo valor e mesmo tipo.');
} else {
  console.log('As variáveis numberTen e stringTen não tem o mesmo tipo.');
};

// Verifica se as variáveis numberThirty e stringThirty não tem o mesmo valor.
if (numberThirty != stringThirty) {
  console.log('As variáveis numberThirty e stringThirty não tem o mesmo valor.');
} else {
  console.log('As variáveis numberThirty e stringThirty tem o mesmo valor.');
};

// Verifica se as variáveis numberThirty e stringThirty tem o mesmo valor, mas tipos diferentes.
if (numberThirty !== stringThirty) {
  console.log('As variáveis numberThirty e stringThirty tem o mesmo valor, mas tipos diferentes.')
} else {
  console.log('As variáveis numberThirty e stringThirty tem o mesmo valor e mesmo tipo.')
};

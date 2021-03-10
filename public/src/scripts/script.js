start();

function start() {
  var rangeNumber = document.querySelector('#rangeNumber');
  rangeNumber.addEventListener('input', handdleChangeNumber);
}

function handdleChangeNumber(e) {
  var number = parseInt(e.target.value);

  if(number === 999)
    showSmileFace();
  else
    hideSmileFace();

  setCurrentNumber(number);
  setCurrentNumberInFull(number);
}

function setCurrentNumber(number) {
  var currenteNumber = document.querySelector('#currentNumber');
  currenteNumber.value = number;
}

function setCurrentNumberInFull(number) {
  var numberInFull = document.querySelector('#numberInFull');
  numberInFull.value = getNumberInFull(number);
}

function getNumberInFull(number) {
  var numberInFull = '';

  if (number < 10)
    numberInFull = getUnityInFull(number);
  else if (number < 100)
    numberInFull = getDecimalInFull(number);
  else if (number < 1000)
    numberInFull = getHundredInFull(number);

  return numberInFull;
}

function getUnityInFull(number) {
  var unitsInFull = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
  var unitNumberInFull = unitsInFull[number]
  return unitNumberInFull;
}

function getDecimalInFull(number) {
  var tenToNineteenInFull = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezesete', 'dezoito', 'dezenove'];
  var decimalsInFull = [, 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
  var decimalNumberInFull = '';

  if ( number < 20) {
    decimalNumberInFull = tenToNineteenInFull[ number - 10 ];
  }
  else if ( number < 100) {
    var splittedNumber = String(number).split('');
    var decimal = parseInt( splittedNumber[0] );
    var unity = parseInt( splittedNumber[1] );

    decimalNumberInFull = unity == 0 ? decimalsInFull[decimal] : decimalsInFull[decimal] + ' e ' + getUnityInFull(unity) ;
  }
  
  return decimalNumberInFull;
}

function getHundredInFull(number) {
  var hundredsInFull = [, 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
  var hundredNumberInFull = '';
  
  var splittedNumber = String(number).split('');
  var hundred = parseInt(splittedNumber[0]);
  var decimal = parseInt(splittedNumber[1]);
  var unity = parseInt(splittedNumber[2]);

  if (number == 100)
    hundredNumberInFull = 'cem'
  else
    hundredNumberInFull = hundredsInFull[hundred];

  if (decimal == 0 && unity > 0)
    hundredNumberInFull += ' e ' + getUnityInFull(unity);
  else if (decimal > 0) {
    var decimalAndUnity = decimal * 10 + unity;
    hundredNumberInFull += ' e ' + getDecimalInFull(decimalAndUnity);
  }

  return hundredNumberInFull;
}

function showSmileFace() {
  var smileFace = document.querySelector('#smile-face');
  smileFace.classList.remove('d-none');
  smileFace.classList.add('d-block');
}

function hideSmileFace() {
  var smileFace = document.querySelector('#smile-face');
  smileFace.classList.remove('d-block');
  smileFace.classList.add('d-none');
}

start();

function start() {
  var rangeNumber = document.querySelector('#rangeNumber');
  rangeNumber.addEventListener('change', handdleChangeNumber);
}

function handdleChangeNumber(e) {
  var number = parseInt(e.target.value);

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

  var unitsInFull = ['zero','um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
  var tenToNineteenInFull = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezesete', 'dezoito', 'dezenove'];
  var decimalsInFul = [,'dez','vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
  var hundredsInFull = [,'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

  var numberInFull = '';

  if ( number < 10)
    numberInFull = unitsInFull[number];
  else if ( number < 20) {
    numberInFull = tenToNineteenInFull[ number - 10 ];
  }
  else if ( number < 100) {
    var splittedNumber = String(number).split('');
    var decimal = parseInt( splittedNumber[0] );
    var unity = parseInt( splittedNumber[1] );

    numberInFull = unity == 0 ? decimalsInFul[decimal] : decimalsInFul[decimal] + ' e ' + unitsInFull[unity] ;
  } else if ( number > 100) {
    var splittedNumber = String(number).split('');
    var hundred = parseInt( splittedNumber[0] );
    var decimal = parseInt( splittedNumber[1] );
    var unity = parseInt( splittedNumber[2] );
    
    if(number == 100)
      numberInFull = 'cem'
    else
      numberInFull = hundredsInFull[hundred];    

    if(decimal == 0 && unity > 0)
      numberInFull += ' e ' + unitsInFull[unity];

    if(decimal == 1) {
      var numberDecimal = parseInt( decimal + '' + unity );
      numberInFull += ' e ' + tenToNineteenInFull[ numberDecimal - 10 ];
    }
    
    if(decimal > 1) {
      var suffix = unity == 0 ? decimalsInFul[decimal] : decimalsInFul[decimal] + ' e ' + unitsInFull[unity] ;
      numberInFull += ' e ' + suffix;
    }
  }

  return numberInFull;
}
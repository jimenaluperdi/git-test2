var num1 = 8;
var num2 =10;

function maxNumbers(num1, num2) {
    if (num1 > num2){
        console.log(num1 + " es mayor que " + num2);
    }
    else{
        console.log(num2 + " es mayor que " + num1);
    }    
}
maxNumbers(num1, num2);

// ejercicio 2 encuentra la palabra mas larga    

var Words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

var maxlength = 0;
var maxWord = "";

Words.forEach(function(element){
    if (element.length > maxlength){
        maxlength = element.length;
        maxWord = element;
    }
});

console.log(maxlength, maxWord);

// ejer 3 suma de numeros

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sum(arrayNum) {
    var total = 0;
    arrayNum.forEach(function(element){
        total += element;
        console.log(total);
    });
}
sum(numbers);

// forma num 2

function sumReduce(arrayNum) {
    var sum = arrayNum.reduce(function (acumulativo, valorAactual) {
        return acumulativo + valorAactual
    }, 100);
    return sum;
    
}
 var arrayShort = [1, 2, 3 ,4];

sumReduce(numbers);
sumReduce(arrayShort);

function average(arrayNum) {
    return sumReduce(arrayNum) / arrayNum.length;
}

console.log(average(numbers));

// ejercicio 5

var words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWords(arrayWords) {
    var sumlength = 0;
    arrayWords.forEach(function(elem) {
        sum.length += elem.length;
    });
    var averageTotal = sum.length / arrayWords.length;
    return averageTotal;
}

console.log(averageWords(Words));

// ejercicio 7

var word = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function exists(arrayWord, word) {
    var exists = false;
    arrayWord.forEach(function(elem){
        if (word === elem) {
            exists = true;
        }
    });
    return exists;
}

console.log(exists(word));

// ejercicio 8



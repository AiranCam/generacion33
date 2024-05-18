const someString = 'Hola Mundo';

const countVowels = (phrase) => {
    const vowelsList = /[AEIOUaeiouÁÉÍÓÚáéíóú]/gi;
    const phraseLength = phrase.length;
    let total = 0;


    for(let i = 0; i < phraseLength; i++){
        let isVowel =  vowelsList.test(phrase.charAt(i))
        if(isVowel){
            total++;
        }
    }
    return total;

    
};

let test1 = countVowels(someString);
let test2 = countVowels('Hola pana como estas');

console.log(test1);
console.log(test2);
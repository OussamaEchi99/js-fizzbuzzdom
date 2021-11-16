// Applica uno stile differente a seconda del valore 
// dell'indice per i multipli di 3, per i multipli di 5 e 
// per i valori che sono sia multipli di 3 che di 5.

// Variabile Container
const boxContainer = document.querySelector('.container');

// Logica e Calcoli
for(let i = 1; i <= 1000; i++ ) {

    let fizzOrBuzz;
    if (( i % 3 === 0 ) && ( i % 5 === 0 )) {
        fizzOrBuzz = 'FizzBuzz'
    } else if( i % 3 === 0 ) {
        fizzOrBuzz = 'Fizz'
    } else if( i % 5 === 0 ) {
        fizzOrBuzz = 'Buzz'
    } else {
        fizzOrBuzz = i
    }

    const newBox = `
        <div class="box ${fizzOrBuzz}">${fizzOrBuzz}</div>
    `;

    boxContainer.innerHTML += newBox;
}
// Dato un container nel DOM, appendi un elemento
// html con il numero o la stringa corretta.

// Variabile Container
const boxContainer = document.querySelector('.container');

// Logica e Calcoli
for(let i = 1; i <= 100; i++ ) {

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
        <div class="box">${fizzOrBuzz}</div>
    `;

    boxContainer.innerHTML += newBox;
}
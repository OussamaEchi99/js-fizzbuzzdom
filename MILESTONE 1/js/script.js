// Per i multipli di 3 stampi in console “Fizz” al posto del numero 
// e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi
// in console FizzBuzz.

// Scrivo in console i numeri da 1 a 1000, poi ogni multiplo
// di 3 scrivo izz e ogni multiplo di 5 scrivo Buzz.
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

    console.log(fizzOrBuzz);
}
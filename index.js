//Ejercicio 1

const username = 'google';
const url = `https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc&per_page=10&page=1`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('Ejercicio 1');
        data.items.map( item => {
            console.log(`Name: ${item.name} - Url: ${item.html_url}`);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

//Ejercicio 2

function f(x, y, z) {
    let sum = x + y;
    let multi = sum * z;
    let sin = Math.sin(multi);
    return sin;
}

//Ejercicio 3

function algoritmo(numero){
    console.log('Ejercicio 3');
    let array = [];
    for(let i = 0; i <= numero; i++){
        if ((i % 2) !== 0) {
            array.push(i);
        }
    }
    return array;
}
console.log(algoritmo(12));
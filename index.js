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

//Solucion A
function f(x, y, z) {
    let sum = x + y;
    let multi = sum * z;
    let sin = Math.sin(multi);
    return sin;
}

//Solucion B - Eliminaria las variables

function f(x, y, z) {   
    return Math.sin((x + y)*z);
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


//Ejercicio 4

// Arquitectura Utilizada : Clean Architecture - para la separacion de preocupaciones por capas limitadas y poder mantener el codigo organizado
//                          y con oportunidad de escalar. La integracion entre capas iria de afuera hacia adentro.

//                          Domain - Entidades comerciales, representan en core de la aplicacion y debe ser independiente de todas las capas.
//                          Aplication - Implementa la logica del negocio, reglas de la aplicacion, Define la comunicacion entre desarrollos externos y la capa de domain.
//                          Adapter - Recibe las solicitudes de sistemas externos y convierte los datos recibidos en datos que entienda la capa de aplication.
//                          Infraestructure - Contiene toda la configuracion para conexion de la base de datos y funciones para la comunicacion de la base de datos.

// Estructura de Archivos: En el repositorio se creo la estructura de carpetas que utilizaria.

// Framework: Utilizaria Express js - Nos permite simplificar el manejo de routes, la gestion de peticiones y respuestas, middleware      
//            Facilita el enrutamiento, el manejo de sesiones, cookies. 

// Patrones de Diseño: Patron Repository - En las funciones comunes de varias entidades poder abstraer y dejarlas en un sitio comun: Insert, Update, Delete, SelectAll, SelectById
//                     Patron Fecade - Cuando exista una integracion de una herramienta de un tercero poder abstraer todo en un archivo Facade para siempre ir a este archivo y no estar llamando varias veces al archivo del tercero
//                     Patron Mediator - Lo utilizaria para que fuera el responsable de llevar la comunicacion a las elementos de la capa inferior de domain, de esa manera nadie tendria comonimiento de estos elementos, solo el mediator.Adapter
//                     Patron Singleton - Para manejar una sola instancia de cualquier clase y no tener varias instancias que solo ocupen memoria.
//                     Patron Adapter - Para poder realizar la conversion de los datos que llegan hacia la clase de aplicacion, para crear un puente entro metodos y propiedades de nuevas clase con las ya existentes.

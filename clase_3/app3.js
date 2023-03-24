/*
function Comunicandose() {
    hola=prompt('Ingrese un dato:') ;
  console.log(typeof(hola));
}

valor_a=prompt('Ingrese el primer valor que va a restar','');
//Convertimos a entero

valor_a=parseInt(valor_a);

valor_b=prompt('Ingrese el sustraendo','');
//Convertimos a entero

valor_b=parseInt(valor_b);

//Resta 
function resta (v,h){
    return v - h;
}

console.log(resta(valor_a,valor_b));

valor_c=prompt('Ingrese el primer valor que va a intercambiar','');
valor_d=prompt('Ingrese el otro valor que va a intercambiar','');
function intercambiar (a,b){
    intercambiador=a;
    a=b;
    b=intercambiador;
    console.log ("ahora a vale"+ a +"b vale"+ b);
}
intercambiar (valor_c,valor_d);

function farenheit (temp){
   celsius=(temp-32)/1,8;
   console.log("son grados celsius"+" "+ celsius); 
   
   //${celsius});
}
temperatura=prompt('Ingrese la temperatura en farenheit','');
farenheit (temperatura);


function calcular_factorial(t){
    if(t <10){
        fact=t;
        for (t;  1<t ; t--) {
            fact = fact*(t-1);
          }
        console.log(fact);
    }else {
        console.log("No te lo calculo");    
    }
}

factorial=prompt('Ingrese el factorial para calcular','');
calcular_factorial (factorial);
//console.log(dividir(9,0));

//puede decrementar variable--
//puedo incrementar con  variable++
//let radData = 'My NaMe Is MuD';
//radData.toLowerCase();
//radData.toUpperCase();
*/
function invertirCadena(cad) {
    var nuevaCadena = "";
    for (var i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    console.log(nuevaCadena);
    if(cad===nuevaCadena)
    console.log("espalindromo")
}
cadenita=prompt('Ingrese el palindromo','');
invertirCadena(cadenita);
/*
function invertirCadena(cad) {
    var separarCadena = cad.split(""); 
    // ["h", "o", "l", "a"]
 
    var invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse();
    // ["a", "l", "o", "h"]
 
    var unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join("");
    // "aloh"
    
    return unirArreglo; // "aloh"
}
  */

// seria asi en una sola linea : return cad.split("").reverse().join("");





for (let i=5; i>0; i--){
    console.log("El valor de i es: " + i )

   }


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = " ";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;


let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
   
}

console.log()

document.getElementsByTagName("button").innerHTML ="Hola Mundo";

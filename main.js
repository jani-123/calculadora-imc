
var altura = parseInt(prompt("ingrese altura en metros", "ejemplo si mide 1.40 --> 140"));
var peso = parseInt(prompt("ingrese peso"));

function calcu(){
   
   
   var resultado = peso / Math.pow(altura,2);
   var respuesta = resultado.toFixed(5);
   console.log(resultado);
   alert(respuesta);

}
calcu()


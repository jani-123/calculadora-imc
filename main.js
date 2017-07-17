

function calculadora(){
	var peso;
	var altura;
	var imc;
	var resultado;

	peso = parseInt(prompt("Ingrese su peso"));
	altura = parseInt(prompt("Ingrese su altura"));
	imc = peso/(altura * altura);

	alert("Tu indice de masa corporal es"+imc);


}
 calculadora();


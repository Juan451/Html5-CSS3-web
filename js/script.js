// JavaScript Document


$(document).on("ready",configurarApp);
//preparamos funcion ready para configurar la funcion configurarApp

function configurarApp(){
	var canvas = document.getElementById('#miCanvas');
	//guardo en una variable canvas
	//mi elemento var id
	var ctx = canvas.getContext("2d");
	//enviamos el contexto que voy a trabajar en dos dimensiones
	canvas.width = screen.availWidth;
	//cambiar el anchos del canvas 
	//con availWith con el objeto screen que es la pantalla cons u metodo availWidth
	//que nos va a retornar el ancho destinado a tu navegador
	
	
}


function dibujaFooter(canvas,contexto){
//recibe por parametro el canvas y el contexto	
	contexto.fillStyle = "rgba(0,0,0,0.8)";//nos permite cambiar el relleno, su opacidad
	contexto.moveTo(0,0);
	//aqui va a empezar a dibujar
	contexto.quadraticCurveTo(0,-50,canvas.width-100,canvas.height-50);
	//nos permite crear curvas dentro de nuestro lienzo
	//x e y son los que controlan la curva
	contexto.fill();
	//construye la recta desde el punto incial has 
	//fill() rellena la figura
}


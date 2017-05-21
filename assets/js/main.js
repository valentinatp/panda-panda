(function fotografias(){
	var fotos = Array.from(document.getElementsByClassName("foto"));

	fotos.forEach(function(elemento){
		elemento.addEventListener("click", function(){
			this.classList.toggle("no");
		});
	});

	var restaurar = document.getElementById("res");
	restaurar.addEventListener("click", function(el){
		el.preventDefault();

		fotos.forEach(function(e){
			e.classList.remove("no");
		});
	});
})()

/* no me funciona para activar el boton de origen
function removerExtincion(){
	var origen = document.getElementById("ori");
	var parr1 = document.getElementById("parrafo1");
	origen.addEventListener("click", function(elemento){
		this.classList.toggle("no");

	});

	var boton = document.getElementById("ori");
	boton.addEventListener("click", function(el){
		el.preventDefault();
	
		parr1.remove("parrafo1");
	});
}*/


/* no me funciona para activar el boton de extinción
function removerExtincion(){
	var extincion = document.getElementById("ext");
	var parr2 = document.getElementById("parrafo2");
	extincion.addEventListener("click", function(elemento){
		this.classList.toggle("no");

	});

	var boton = document.getElementById("ext");
	boton.addEventListener("click", function(el){
		el.preventDefault();
	
		parr2.remove("parrafo2");
	});
}*/



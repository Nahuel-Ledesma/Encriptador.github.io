var texto = document.querySelector(".ingreso");
var resultado = document.querySelector(".resultado");

var letters = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

// Funciones para la codificación del texto
function encoder(phrase){
	phrase = phrase.toLowerCase();

	for(var i = 0; i < letters.length; i++){
		if(phrase.includes(letters[i][0])){
			phrase = phrase.replaceAll(letters[i][0], letters[i][1]);
		}
	}

	return phrase;
}

function btnEncoder(){
	var encodedText = encoder(texto.value);
	resultado.value = encodedText;
	texto.value = "";
	resultado.style.backgroundImage = "none";
}



// Funciones para la decodificación del texto
function decoder(phrase){
	phrase = phrase.toLowerCase();

	for(var i = 0; i < letters.length; i++){
		if(phrase.includes(letters[i][1])){
			phrase = phrase.replaceAll(letters[i][1], letters[i][0]);
		}
	}

	return phrase;
}

function btnDecoder(){
	var decodedText = decoder(texto.value);
	resultado.value = decodedText;
	texto.value = "";
	resultado.style.backgroundImage = "none";
}


// Función para copiar el texto
function btnCopy(){
	resultado.select();
	navigator.clipboard
		.writeText(resultado.value)
		.then((res) => alert("Texto copiado"))
		.catch((err) => alert("No hay texto para copiar"));
	
	resultado.value = "";
}



// Función para eliminar imagen de fondo
function textBlur(){
	texto.style.backgroundImage = "url('imagen/Lapiz.png')";
	texto.placeholder = "Ingrese el texto aquí";
}

function textFocus(){
	texto.style.backgroundImage = "none";
}

function textClick(){
	texto.placeholder = "";
}

function resultadoBlur(){
	resultado.style.backgroundImage = "url('imagen/Muñeco.png')";
}
let titulo = document.querySelector("h1");
titulo.textContent = "Hora del Desafío";

function botonConsole() {
    alert("El boton fue clicado");
}

function botonPrompt() {
    
    let nombreCiudad = prompt("Dime una ciudad de Brasil");
    alert(`Estuve en ${nombreCiudad} y me he acordado de ti`)
}
function botonAlert() {
    alert("Yo amo JS?")
}
function botonSuma() {
    let numero1 = parseInt(prompt("Dime un número"));
    let numero2 = parseInt(prompt("Dime otro número"));
    alert(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`);
}
// CLASE 2 - Desafío obligatorio

//Pedir edad del usuario utilizando operadores && y || (mostrando por alert)

let edadUsuario = parseInt(prompt("Ingrese su edad",0));

if ((edadUsuario != "") && ((edadUsuario == 18) || (edadUsuario > 18))) {
    alert("Bienvenido a bodega Kaluma");
}
else {
    alert("Lo sentimos, debe ser mayor de edad para ingresar al sitio de la bodega");
}

//Pedir una razón social utilizando combinación de operadores && y || (mostrando por consola)

let razonSocial = prompt("Ingrese su Razón Social");

if ((razonSocial != "") && ((razonSocial == "Drover") || (razonSocial == "drover"))) {
    console.log("La razón social ingresada es CORRECTA y es:" + razonSocial);
}
else {
    console.log("La razón social ingresada NO es correcta y es:" + razonSocial);
}



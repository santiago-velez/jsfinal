function go(){

if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
        document.form.submit(); 
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
} 

var boton = document.getElementById("boton");
boton.addEventListener("click", function () {
  window.location.href = "https://www.google.com/finance/";
});

document.getElementById(
  "foot"
).innerHTML = `<h6> Esta pagina fue actualizada por ultima vez en ${document.lastModified}</h6>`;


/*

sessionStorage.setItem("storagedolar", 3700);
sessionStorage.setItem("storageeuro", 4200);
sessionStorage.setItem("storagelibra", 5200);

function myFunctionDiv() {
  var text;
  var favDiv = prompt("Puedes elegir: Dolar, Euro, Libra", "Dolar");
  switch(favDiv) {
    case "Dolar":
      text = "El precio del Dolar hoy es " + sessionStorage.getItem('storagedolar');
      break;
    case "Euro":
      text = "El precio del Euro hoy es " + sessionStorage.getItem('storageeuro');
      break;
    case "Libra":
      text = "El precio del Libra hoy es " + sessionStorage.getItem('storagelibra');
      break;
    default:
      text = "No tenemos esa divisa disponible";
  }
  document.getElementById("DivisaUsuario").innerHTML = text;
}

//alert(sessionStorage.getItem('storagedolar'));

*/


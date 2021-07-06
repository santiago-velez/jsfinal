var x;
x = $(document);
x.ready(animJQ);
x.ready(ejmAX);
x.ready(funppal);
x.ready(funppalE);
x.ready(funppalY);


function animJQ () {
    var x=$("#botonNovedadesM");
    x.click(mostrar);
}

function mostrar () {
    var x=$("#cartaNoticias");
    x.toggle("slow");
}

function funppal () {
    var x=$("#enviarInput");
    x.click(divisa);
}

function divisa () {
    valor = parseInt(document.getElementById("botonInput").value)
    var resultado=$("#resultado")
    var mostrar= (valor * 3700) 
    resultado.text("El total de pesos Colombianos que tienes es $" + mostrar + " COP")
}

function funppalE () {
    var x=$("#enviarInputE");
    x.click(divisaE);
}

function divisaE () {
    valor = parseInt(document.getElementById("botonInputE").value)
    var resultado=$("#resultadoE")
    var mostrar= (valor * 4200) 
    resultado.text("El total de pesos Colombianos que tienes es $" + mostrar + " COP")
}

function funppalY () {
    var x=$("#enviarInputY");
    x.click(divisaY);
}

function divisaY () {
    valor = parseInt(document.getElementById("botonInputY").value)
    var resultado=$("#resultadoY")
    var mostrar= (valor * 34) 
    resultado.text("El total de pesos Colombianos que tienes es $" + mostrar + " COP")
}

function ejmAX () {
    var x;
    x=$("#botonAX");
    x.click(clickAX);
}

async function clickAX () {

    var x=$ ("#sectionAX");
    var y= await $.get("https://docs.google.com/document/d/e/2PACX-1vTzvAAx6cB7821xT1r7hnwqdtpE21IpEIV2NyTbwHPxmJl1yvkcE6DqIrhQ9ZffO6iovh3MHsENTqNF/pub")
      console.log(y)
      x.append(y) 
  
  }

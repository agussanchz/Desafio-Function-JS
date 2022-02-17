alert("¡Bienvenido a la tienda AsPhone!")

/*Primer Producto*/
const productoA = "iPhone 7 Plus"
const precioProductoA = 300

/*Segundo Producto*/
const productoB = "iPhone X"
const precioProductoB = 500

/*Variables de cantidad comprada y precio total*/
let cantidadComprada7Plus;
let cantidadCompradaX;
let precioTotalVenta = 0


let productos = parseInt(prompt("Estos son nuestros productos: \n1- " + productoA + "\n2- " + productoB))

/*Si coloca numero incorrecto en el menu*/
while (productos != 1 || productos != 2){
	if (productos == 1) {
		cantidadComprada7Plus = parseInt(prompt("El precio del iphone 7 plus es de $US " + precioProductoA + ". Ingrese la cantidad de iphone que desea comprar: "))
		break;
	}
	else if (productos == 2) {
		cantidadCompradaX = parseInt(prompt("El precio del iphoneX es de $US " + precioProductoB + ". Ingrese la cantidad de iphone que desea comprar: "))
		break;
	}
	else {
		alert("No tenemos esa opcion, vuelva a seleccionar los productos.")
		productos = parseInt(prompt("Estos son nuestros productos: \n1- " + productoA + "\n2- " + productoB))
	}	
}


/*Precio total de la compra*/
function precioTotal(cantidadComprada, precio){
	precioTotalVenta = cantidadComprada * precio
	alert("El precio total es: $US " + precioTotalVenta)
}


/*Comprobar que numero de opcion ingreso para devolver su precio*/ 
if (productos == 1){
	precioTotal(cantidadComprada7Plus, precioProductoA)
}
else if (productos == 2){
	precioTotal(cantidadCompradaX, precioProductoB)
}




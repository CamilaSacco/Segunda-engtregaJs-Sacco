

class producto{ 
    constructor(actividad ,lugares, precio, cupos ){
        this.actividad = actividad;
        this.lugares = lugares;
        this.precio = precio;
        this.cupos = cupos;
    }

    get_datos(){
        console.log("<--------->");
        console.log("Actividad: ", this.actividad);
        console.log("Lugares: ", this.lugares);
        console.log("Precio: ", this.precio);
        console.log("Cupos disponibles", this.cupos);
        console.log("");

    }

    get_lugares(){
        if(this.cupos <= 0){
            return false
        }
        else{
            return true
        }
    }


    venta_lugares(cantidad){

        if(this.cupos >= cantidad){
        this.cupos = this.cupos - cantidad;
        return true
        }  
        else{
            return false
        }
    }
}




let lista_productos = [];

lista_productos.push (new producto("Trecking" , "Cerro Tronador" , 3000 , 15));
lista_productos.push (new producto("Kayak " , "Lago Moreno" , 5000 , 0));
lista_productos.push (new producto("Paseo " , "Ciudad Historica" , 1500 , 30));
lista_productos.push (new producto("Visita " , "Parque Nacional Nahuel Huapi" , 3000 , 15));
lista_productos.push (new producto("Bicicleta " , "Circuito Chico" , 6000 , 10));

console.log("Lista de productos");

for (let producto of lista_productos){
    producto.get_datos();
}


function buscar_producto( producto ){

    return producto.actividad == compra_usuario 
}

let compra_usuario = prompt("Ingrese la actividad que quiere realizar");

let resultado_busqueda = lista_productos.find (buscar_producto);

if (resultado_busqueda != undefined){
    console.log("Usted eligio la actividad ", compra_usuario);

    if (resultado_busqueda.get_lugares()){

        let cantidad_personas = prompt("Cuantas personas son?");
        if (resultado_busqueda.venta_lugares(cantidad_personas)){
            console.log("Gracias por tu compra");
        }

    }
    else{
        console.log("No hay mas cupos disponible para esta actividad");
    }

    resultado_busqueda.get_datos(); 
    
}

else{
    console.log("No se encontro el producto solicitado, vuelva a intentarlo");

}
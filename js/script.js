let botonCompra = document.getElementsByClassName("botonCompra");

for ( let boton of botonCompra){
    boton.addEventListener("click" , agregar_al_carrito);

}



let carrito = [];

function agregar_al_carrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    

    let nombre_producto = padre.querySelector("h3").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let img_producto = abuelo.querySelector("img").src;
    

    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        cantidad: 1,
        img: img_producto
    };

   

    carrito.push(producto);
    mostrar_carrito(nombre_producto, precio_producto, img_producto);


}
let tablaCarrito = document.getElementsById("tbody");

function mostrar_carrito(nombre_producto, precio_producto, img_producto){
    
    let fila = document.createElement("tr");
    let contenidoFila = 
    `<td><img src="${img_producto}"></td>
    <td><p>${nombre_producto}</p></td>
    <td>${precio_producto}</td>
    <td><input type="number"></td>
    <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>`;

            fila.innerHTML = contenidoFila
            tablaCarrito.append(fila)

}




       

    











//calcular el total del carrito
//guardar en el localstorage lo que se agrego al carrito
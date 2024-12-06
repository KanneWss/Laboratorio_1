function validar(){
    let nombre = document.getElementById('Nombre').value;
    if(nombre === ""){
        alert("No se admiten valores vacios: Nombre");
    }
    let cuestion = document.getElementById('cuestion').value;
    if(cuestion === ""){
        alert("No se admiten valores vacios: ¿Por que deseas contactarme?");
    }
    let mensaje = document.getElementById('mensaje').value;
    if(mensaje === ""){
        alert("No se admiten valores vacios: Mensaje");
    }
}
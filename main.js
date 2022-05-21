let btn = document.querySelector("div");

btn.addEventListener("click", (e)=>{
    let accion = e.target;
    switch (accion.dataset.opc) {
        case "consola":
            console.log("Hola soy la opcion de la consola");
            break;
        case "ventena":
            alert("Hola soy la opcion de la ventena");
            break;
        case "html":
            let mensaje = document.querySelector("#mensaje");
            mensaje.innerHTML = null;
            mensaje.insertAdjacentHTML("beforeend", "Hola soy la opcion del html");
            break;
        case "emergente":
            let ventana = document.querySelector("dialog");
            if(accion.dataset.close) ventana.close();
            else ventana.showModal();
            break;
        default:
            alert("Opcion no encontrada");
            break;
    }

    // if(accion.localName == "button"){
    //     if (accion.dataset.opc == "consola") console.log("Hola soy la opcion de la consola");
    //     else if(accion.dataset.opc == "ventena") alert("Hola soy la opcion de la ventena");
    //     else if(accion.dataset.opc == "html"){
    //         let mensaje = document.querySelector("#mensaje");
    //         mensaje.innerHTML = null;
    //         mensaje.insertAdjacentHTML("beforeend", "Hola soy la opcion del html");
    //     }else{
    //         let ventana = document.querySelector("dialog");
    //         if(accion.dataset.close) ventana.close();
    //         else ventana.showModal();
    //     }
    // }
})
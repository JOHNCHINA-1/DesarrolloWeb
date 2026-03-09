const tarea = document.getElementById("TareaInput");
const Btn = document.getElementById("AgregarBtn");
const Lista = document.getElementById("ListaTareas");

Btn.addEventListener("click", () =>{

    const texto = tarea.value.trim(); /* El trim recorta espacios en blanco en el texto */
    if(texto !== ""){
        const li = document.createElement("li");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        const Span = document.createElement("Span");
        Span.textContent = texto;

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                li.classList.add("Completada");
            } else {
                li.classList.remove("Completada");
            }
        });

        Span.addEventListener("click", () =>{
            li.classList. toggle("Completada")
        });
        const botonEliminar = document.createElement("BtnEliminar");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", () => {
            Lista.removeChild(li);
        });

        // Agregar elementos al li
        li.appendChild(checkbox);
        li.appendChild(Span);
        li.appendChild(botonEliminar);
        Lista.appendChild(li);

    }

    else{
        console.log("Tarea vacia.")
    }
})
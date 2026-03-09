const res = document.getElementById("Resultado");
const botones = document.querySelectorAll("#Numeros button, #Operaciones button");

let expresion = ""; 

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.value;

        if (valor === "C") {
            // Limpiar todo
            expresion = "";
            res.textContent = "0";
        } else if (valor === "B") {
            // Borrar último carácter
            expresion = expresion.slice(0, -1);
            res.textContent = expresion || "0";
        } else if (valor === "=") {
            try {
                // Evaluar la expresión
                const resultado = eval(expresion);
                res.textContent = resultado;
                expresion = resultado.toString(); 
            } catch {
                res.textContent = "Error";
                expresion = "";
            }
        } else {
            // Números y operadores
            expresion += valor;
            res.textContent = expresion;
        }
    });
});

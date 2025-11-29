const mostrarMensajeBtn = document.getElementById('mostrarMensajeBtn');
const addSkillBtn = document.getElementById('agregarHabilidadBtn');
const colorPicker = document.getElementById('colorPicker');
let contador = 1;
mostrarMensajeBtn.addEventListener('click', () => {

    if (contador == 1) {
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("mensaje").innerText = "¡Felicidades, has hecho clic en el botón!";
        contador++;
    } else if (contador > 1) {
        alert(`¡Ya hiciste clic en el botón! Intentos: ${contador - 1}`);
        contador++;
    }
})

addSkillBtn.addEventListener('click', () => {
    const skillInput = prompt("Ingrese una nueva habilidad:");
    let text = "";
    if (skillInput) {
        text += `<li  class="f-size-16 background-light-gray mg-0-0-10 pd-12 f-familiy-primary b-radius-8 t-align-center">${skillInput}</li>`;

    } else {
        alert("Por favor, ingresa una habilidad válida o diferente.");
    }
    document.getElementById("skills").innerHTML += text;
})

colorPicker.addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
})


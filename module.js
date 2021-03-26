let section = document.getElementById('section');
let titulo = document.getElementById('titulo');
let parrafo = document.getElementById('parrafo');
let btnAgregar = document.getElementById('btnAgregar').addEventListener('click', validarTexto)
let btnBorrar = document.getElementById('btnBorrar').addEventListener('click', eliminarTarea)
function validarTexto(){
    if(titulo.value === "" || parrafo.value === ""){
        alert('Ingresa un contenido en todos los campos')
    } else{
        agregarTarea()
    }
}
function agregarTarea(){
    let tituloTarea = titulo.value
    let parrafoTarea = parrafo.value
    const textoboton = "Borrar"
    nuevaTarea = document.createElement('div')
    nuevoTitulo = document.createElement('h3')
    nuevoParrafo = document.createElement('p')
    nuevoBtnBorrar = document.createElement('button')
    contenido = document.createTextNode(tituloTarea)
    contenido2 = document.createTextNode(parrafoTarea)
    contenido3 = document.createTextNode(textoboton)

    nuevoTitulo.appendChild(contenido)
    nuevaTarea.appendChild(nuevoTitulo)
    nuevoParrafo.appendChild(contenido2)
    nuevaTarea.appendChild(nuevoParrafo)
    nuevoBtnBorrar.appendChild(contenido3)
    nuevaTarea.appendChild(nuevoBtnBorrar)
    section.appendChild(nuevaTarea)

    nuevaTarea.classList.add('target')

    for(i=0; i <= section.children.length-1;i++){
        section.children[i].children[2].addEventListener('click', eliminarTarea)
    }

    titulo.value = "";
    parrafo.value = "";
}

function eliminarTarea(){
    this.parentNode.remove(this.parentNode)
}
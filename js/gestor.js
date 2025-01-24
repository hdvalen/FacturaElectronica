
const divContainerProduct = document.querySelector('.productR'); 

// Evento que se activa cuando la página ha cargado completamente
document.addEventListener('DOMContentLoaded', (e) => {
    // Aquí podrías inicializar algo al cargar la página
});

// Evento para agregar  al contenedor
document.querySelector('#addProduct').addEventListener('click', (e) => {
    divContainerProduct.insertAdjacentHTML('beforeend', crearMdHTML()); // Agrega el HTML
});

// Evento para eliminar  del contenedor
divContainerProduct.addEventListener("click", (e) => {
    // Verifica si el botón clickeado tiene el id 'removeProduct'
    if (e.target.id == "removeProduct") {
        eliminarItemLista(e.target.dataset.id); // Llama a la función para eliminar 
    }
});

// Función para eliminar  de la lista
const eliminarItemLista = (Idx) => {
    let skills = document.querySelector(`#GrpProduct${Idx}`); // Selecciona  con el id específico
    skills.remove(); // Lo elimina del DOM
};


// Función para generar el HTML 
const crearMdHTML = () => {
    let id = Date.now().toString(16); // Genera un id único basado en la fecha actual
    let skillHTML = /* html */ `
            <div class="row mt-3" id="GrpProduct${id}">
                <div class="col-6">
                    <label for="codigoProducto" class="form-label">Codigo Producto</label>
                    <input type="text" class="form-control" placeholder="Codigo" id="codigoProduct${id}" name="codigoProduct${id}">
                </div>
                <div class="col-6">
                    <label for="nameTeam" class="form-label">Nombre Producto</label>
                    <input type="text" class="form-control" placeholder="Nombre" id="nameProduct${id}" name="nameProduct${id}">                                       
                </div>
                <div class="col-6">
                    <label for="nameTeam" class="form-label">Cantidad</label>
                    <input type="number" class="form-control"  id="cantidadProduct${id}" name="cantidadProduct${id}">                                       
                </div>
               <div class="col-6 " >
                     <label for="nameTeam" class="form-label">Valor Unidad</label>
                    <input type="number" class="form-control"  id="valorProduct" name="valorProduct${id}">
                </div>
                <br>
                <div class="col-6 " >
                    <button type="button" class="btn btn-secondary" data-id="${id}" id="removeProduct">Eliminar</button>
                </div>
            </div>
            
    `;
    return skillHTML; // Devuelve el HTML del médico
};


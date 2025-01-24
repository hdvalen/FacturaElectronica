const divContainerProduct = document.querySelector('.productR'); 
const divContainerTable = document.querySelector('.TableProducts '); 

// Evento para agregar al contenedor un nuevo formulario dinámico
document.querySelector('#addProduct').addEventListener('click', (e) => {
    divContainerProduct.insertAdjacentHTML('beforeend', crearMdHTML()); // Agrega el HTML del formulario
});

// Evento para eliminar dinámicamente del contenedor
divContainerProduct.addEventListener('click', (e) => {
    if (e.target.id === "removeProduct") {
        const id = e.target.dataset.id; // Obtén el ID del botón
        document.querySelector(`#GrpProduct${id}`).remove(); // Elimina el formulario correspondiente
    }
});

// Evento para registrar datos del formulario en la tabla
divContainerProduct.addEventListener('click', (e) => {
    if (e.target.id === "addToTable") {
        const id = e.target.dataset.id; // Obtén el ID del formulario actual
        const productRow = document.querySelector(`#GrpProduct${id}`);

        // Obtén los valores de los campos del formulario
        const codigo = productRow.querySelector(`#codigoProduct${id}`).placeholder;
        const name = productRow.querySelector(`#nameProduct${id}`).value;
        const cantidad = productRow.querySelector(`#cantidadProduct${id}`).value;
        const valor = productRow.querySelector(`#valorProduct`).value;

        // Validar que los campos no estén vacíos
        if (name && cantidad && valor) {

            const subtotal = (cantidad * valor).toFixed(2); // calcular el subtotal
            // Crear una nueva fila en la tabla
            const newRow = `
                <tr>
                    <th scope="row">${codigo}</th>
                    <td>${name}</td>
                    <td>${valor}</td>
                    <td>${cantidad}</td>
                    <td>${subtotal}</td>
                    <td>
                        <button type="button" class="btn btn-danger btn-sm" id="deleteProduct"> - </button>
                    </td>
                </tr>
            `;

            // Agregar la fila al cuerpo de la tabla
            divContainerTable.insertAdjacentHTML('beforeend', newRow);

            // Eliminar el formulario correspondiente
            productRow.remove();
        } else {
            alert("Por favor, completa todos los campos antes de registrar.");
        }
    }
});

// Evento para eliminar un producto de la tabla
divContainerTable.addEventListener('click', (e) => {
    if (e.target.id === "deleteProduct") {
        const row = e.target.closest('tr'); // Selecciona la fila correspondiente
        row.remove(); // Elimina la fila de la tabla
    }
});

// Función para generar el HTML del formulario dinámico
const crearMdHTML = () => {
    let id = Date.now().toString(16); // Genera un id único basado en la fecha actual
    return /* html */ `
        <div class="row mt-3" id="GrpProduct${id}">
            <div class="col-6">
                <label for="codigoProducto" class="form-label">Codigo Producto</label>
                <input type="text" class="form-control" placeholder="${id}" id="codigoProduct${id}" name="codigoProduct${id}" disabled>
            </div>
            <div class="col-6">
                <label for="nameTeam" class="form-label">Nombre Producto</label>
                <input type="text" class="form-control" placeholder="Nombre" id="nameProduct${id}" name="nameProduct${id}">                                       
            </div>
            <div class="col-6">
                <label for="nameTeam" class="form-label">Cantidad</label>
                <input type="number" class="form-control" id="cantidadProduct${id}" name="cantidadProduct${id}">                                       
            </div>
            <div class="col-6">
                <label for="nameTeam" class="form-label">Valor Unidad</label>
                <input type="number" class="form-control" id="valorProduct" name="valorProduct${id}">
            </div>
            <div class="col-6 mt-3">
                <button type="button" class="btn btn-secondary" data-id="${id}" id="removeProduct">Eliminar</button>
                <button type="button" class="btn btn-primary" data-id="${id}" id="addToTable">Registrar</button>
            </div>
        </div>
    `;
};

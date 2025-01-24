import { formData } from './data.js';

// Escuchar el evento del botón "Pagar"
document.querySelector('.btn-success').addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe por defecto
  
    const modal = new bootstrap.Modal(document.getElementById('modalPagar'));
  
    // Limpia el contenido del modal antes de agregar nuevos datos
    const modalTableBody = document.getElementById('modalTableBody');
    modalTableBody.innerHTML = '';
  
    const modalSubtotal = document.getElementById('modalSubtotal');
    const modalIVA = document.getElementById('modalIVA');
    const modalTotal = document.getElementById('modalTotal');
    const modalSaludo = document.getElementById('modalSaludo');
  
    let subtotal = 0;
  
    // Obtener el nombre y apellido del usuario
    const nameTeam = document.getElementById('nameTeam').value.trim();
    const lastName = document.getElementById('Lastname').value.trim();
  
    // Mostrar saludo personalizado en el modal
    if (nameTeam || lastName) {
      modalSaludo.textContent = `Señor/a ${nameTeam} ${lastName}, este es su resumen de pago:`;
    } else {
      modalSaludo.textContent = 'Este es su resumen de pago:';
    }
  
    // Recopila los datos de la tabla de productos
    const rows = document.querySelectorAll('.TableProducts tr');
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      if (cells.length > 0) {
        const codigo = cells[0].innerText.trim();
        const producto = cells[1].innerText.trim();
        const cantidad = parseInt(cells[2].innerText.trim(), 10);
        const precioUnitario = parseFloat(cells[3].innerText.trim());
        const productoSubtotal = cantidad * precioUnitario;
  
        if (!isNaN(productoSubtotal)) {
          subtotal += productoSubtotal;
  
          // Agrega una fila al modal
          const newRow = `
            <tr>
              <td>${codigo}</td>
              <td>${producto}</td>
              <td>${cantidad}</td>
              <td>${productoSubtotal.toFixed(2)}</td>
            </tr>
          `;
          modalTableBody.insertAdjacentHTML('beforeend', newRow);
        }
      }
    });
  
    // Cálculo del IVA (19%) y total
    const iva = subtotal * 0.19;
    const total = subtotal + iva;
  
    // Mostrar valores en el modal
    modalSubtotal.textContent = `$ ${subtotal.toFixed(2)}`;
    modalIVA.textContent = `$ ${iva.toFixed(2)}`;
    modalTotal.textContent = `$ ${total.toFixed(2)}`;
  
    // Muestra el modal
    modal.show();
  });
  
 //  botón "Confirmar" en el modal
 document.getElementById('confirmarPago').addEventListener('click', () => {
    // Recopilar datos del formulario
    const numFactura = document.getElementById('numFact').value.trim();
    const nameTeam = document.getElementById('nameTeam').value.trim();
    const lastName = document.getElementById('Lastname').value.trim();
    const address = document.getElementById('address').value.trim();
  
    // Recopilar datos de los productos
    const products = [];
    const rows = document.querySelectorAll('.TableProducts tr');
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      if (cells.length > 0) {
        const codigo = cells[0].innerText.trim();
        const producto = cells[1].innerText.trim();
        const cantidad = parseInt(cells[2].innerText.trim(), 10);
        const subtotal = parseFloat(cells[3].innerText.trim());
  
        products.push({
          codigo,
          producto,
          cantidad,
          subtotal,
        });
      }
    });
  
    // Crear un objeto con todos los datos
    const newData = {
      numFactura,
      cliente: `${nameTeam} ${lastName}`,
      direccion: address,
      productos: products,
      fecha: new Date().toLocaleString(),
    };
  
    // Guardar los datos en el array del archivo `data.js`
    formData.push(newData);
  
    console.log('Datos guardados:', formData); // Puedes verificar los datos en la consola del navegador
  
    // Mostrar alerta de confirmación
    alert('Pago confirmado con éxito y datos guardados.');
  
    // Limpiar los formularios
    document.getElementById('nameTeam').value = '';
    document.getElementById('Lastname').value = '';
    document.getElementById('address').value = '';
    document.getElementById('EmailUsuario').value = '';
  
    // Limpiar la tabla de productos
    const tableProducts = document.querySelector('.TableProducts');
    tableProducts.innerHTML = ''; // Borra todas las filas
  
    // Ocultar el modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalPagar'));
    modal.hide();
  });
  
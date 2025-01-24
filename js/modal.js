// Escuchar el evento del botón "Pagar"
document.querySelector('.btn-success').addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe por defecto
  
    const modal = new bootstrap.Modal(document.getElementById('modalPagar'));
  
    // Limpia el contenido del modal antes de agregar nuevos datos
    const modalTableBody = document.getElementById('modalTableBody');
    modalTableBody.innerHTML = '';
  
    const modalTotal = document.getElementById('modalTotal');
    let total = 0;
  
    // Recopila los datos de la tabla de productos
    const rows = document.querySelectorAll('.TableProducts tr');
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      if (cells.length > 0) {
        const codigo = cells[0].innerText;
        const producto = cells[1].innerText;
        const cantidad = cells[2].innerText;
        const subtotal = parseFloat(cells[4].innerText); // Subtotal está en la última celda
  
        // Sumar el subtotal al total general
        total += subtotal;
  
        // Agrega una fila al modal
        const newRow = `
          <tr>
            <td>${codigo}</td>
            <td>${producto}</td>
            <td>${cantidad}</td>
            <td>${subtotal}</td>
          </tr>
        `;
        modalTableBody.insertAdjacentHTML('beforeend', newRow);
      }
    });
  
    // Muestra el total calculado
    modalTotal.textContent = `$${total.toFixed(2)}`;
  
    // Muestra el modal
    modal.show();
  });
  
  // Lógica para el botón "Confirmar" en el modal
  document.getElementById('confirmarPago').addEventListener('click', () => {
    alert('Pago confirmado con éxito');
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalPagar'));
    modal.hide(); // Oculta el modal después de confirmar
  });
  
const divContainerTable = document.querySelector('.TableProducts'); 

document.addEventListener('DOMContentLoaded', (e) => {
    // Aquí podrías inicializar algo al cargar la página
});



const crearMdHTML = () => {
    let id = Date.now().toString(16); // Genera un id único basado en la fecha actual
    let skillHTML = /* html */ `
            <tr>
                            <th scope="row">1</th>
                            <td>Juan Pérez</td>
                            <td>25</td>
                            <td>juan@example.com</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Ana Gómez</td>
                            <td>30</td>
                            <td>ana@example.com</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Pedro Martínez</td>
                            <td>22</td>
                            <td>pedro@example.com</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Pedro Martínez</td>
                            <td>22</td>
                            <td>pedro@example.com</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Pedro Martínez</td>
                            <td>22</td>
                            <td>pedro@example.com</td>
                          </tr>
            
    `;
    return skillHTML; // Devuelve el HTML del médico
};

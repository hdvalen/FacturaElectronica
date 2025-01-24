export class TeamComponent extends HTMLElement {
  constructor() {
      super();
      this.render();
  }
  render(){
    let id = Date.now().toString(16);
      this.innerHTML = /* html */ `
      <style rel="stylesheet">
        @import "./src/style.css";
      </style>
      <div class="row g-3">
      <div class="col-md-12">
              <label for="nameTeam" class="form-label">Numero de Factura</label>
              <input type="text" class="form-control" placeholder=${id} name="nameTeam" id="numFact" disabled>
          </div>
          <div class="col-md-6">
              <label for="nameTeam" class="form-label">Nombre</label>
              <input type="text" class="form-control" name="nameTeam" id="nameTeam">
          </div>
          <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Apellido</label>
              <input type="text" class="form-control" name="Lastname" id="Lastname">
          </div>
          <div class="col-12">
              <label for="inputAddress" class="form-label">Direccion</label>
              <input type="text" class="form-control" name="address" id="address">
          </div>
          <div class="col-md-12">
              <label for="inputAddress" class="form-label">Correo Electronico</label>
              <input type="email" class="form-control" name="address" id="address">
          </div>
      </div>
      `
  }
}
customElements.define("team-component",TeamComponent);

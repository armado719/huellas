

const header = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
          <ul class="nav justify-content-center">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/paginawweb/src/paginas/inicio.js">inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/paginawweb/src/paginas/miembros.js">Miembros</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/paginawweb/src/paginas/nosotros.js">nosotros</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/paginawweb/src/paginas/servicios.js">servicios</a>
                  </li>
                </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default header;

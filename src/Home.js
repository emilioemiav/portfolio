import React from "react";

//este es mi home pero tengo la info de los proyectos nomas,,tendria q cambiarlo de nombre a proyectos, y usar el app como home que es el que cumple la funcion de home

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Descripción del proyecto 3",
      image: "https://via.placeholder.com/300x200",
    },
  ];
  return (
    <section id="proyectos">
      <div className="container">
        <h1 className="text-center mb-4 m-4">Portfolio de proyectos</h1>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4 " key={project.id}>
              <div className="card mb-4 mt-4 m-2 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top "
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import { Container } from "react-bootstrap";

const Contacto = () => {
  return (
    <section id="contacto">
      <Container>
        <div className="d-flex flex-column align-items-center mb-5 mt-5">
          <h1>Encuentra más información sobre mí aquí:</h1>
          <ul>
            <li>
              <a href="https://github.com/emilioemiav">
                Explora mi perfil en GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/emilio-ezequiel-aguirre-vicentin-246379138/">
                Conéctate conmigo en LinkedIn
              </a>
            </li>
            <li>
              <a href="ruta-a-tu-cv">CV</a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Contacto;

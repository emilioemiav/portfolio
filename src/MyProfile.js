import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Habilidades = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <img
          src="logo192.png"
          alt="Mi foto"
          width="200"
          className="img-fluid"
        />
        <div>
          <h2 className="text-center mb-5 mt-5">Habilidades de programación</h2>
          <Row className="mb-5">
            <Col md={4}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Node.js</h4>
                  <p className="card-text">
                    Amplio conocimiento y experiencia en Node.js, incluyendo el
                    uso de frameworks como Express y Koa para construir
                    aplicaciones web y APIs.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">React</h4>
                  <p className="card-text">
                    Conocimiento profundo y experiencia en el desarrollo de
                    aplicaciones web con React y Redux. Familiaridad con otros
                    frameworks de UI como Material UI, Ant Design y Tailwind
                    CSS.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Bases de datos</h4>
                  <p className="card-text">
                    Amplio conocimiento en bases de datos como MongoDB y MySQL,
                    incluyendo la creación y optimización de esquemas, consultas
                    y transacciones.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Habilidades;

import React from "react";
import { Button, Form, Container } from "react-bootstrap";

function Formulario() {
  return (
    <Container>
      <h4 style={{ marginBottom: "5vh", color: "white" }}>Envianos un correo</h4>
      <Form
        target="_self"
        action="https://formsubmit.co/dr.jesusavila777@hotmail.com"
        method="POST"
      >
        <div className="row" style={{ marginTop: "5vh" }}>
          <div className="col-lg-6 col-md-12">
            <Form.Group controlId="name">
              <Form.Label>Ingresa tu nombre para contactarte</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                name="Nombre"
                required
              />
            </Form.Group>
          </div>
          <div className="col-lg-6 col-md-12">
            <Form.Group controlId="email">
              <Form.Label>Ingresa tu correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
                name="Correo de origen"
                required
              />
            </Form.Group>
          </div>
        </div>
        <Form.Group controlId="dep" style={{ marginTop: "2vh" }}>
          <Form.Label>Seleccione el departamento a donde deseas contactar</Form.Label>
            <select class="form-control" name="Tipo de servicio" id="dep">
              <option value="Medico">Seleccione un servicio especializado</option>
              <option value="Servicio nutricional">Servicio Nutricional</option>
              <option value="Medico Familiar">Consulta de Medicina familiar</option>
              <option value="Servicio psicológico">Servicio Psicológico</option>
              <option value="Terapia de la comunicación">Terapia de la Comunicacion</option>
              <option value="Terapia de la rehabilitación">Terapia de Rehabilitación</option>
              <option value="Servicio de SPA">Servicio de SPA</option>
              <option value="Servicio de Rayos X">Servicio de Rayos X</option>
              <option value="Servicio de Laboratorio">Laboratorio</option>
              <option value="Farmacia">Cotización farmaceutitca</option>
            </select>
        </Form.Group>
        <Form.Group controlId="message" style={{ marginTop: "2vh" }}>
          <Form.Label>Ingresa tu mensaje completo</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Ingrese su mensaje"
            required
          />
        </Form.Group>

        <Button
          type="submit"
          className="btn-sm btn-secondary my-4"
        >
          Enviar mi solicitud
        </Button>
      </Form>
    </Container>
  );
}

export default Formulario;

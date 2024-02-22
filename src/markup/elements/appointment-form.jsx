import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

class appointmentForm extends Component {
  render() {
    return (
      <>
        <div className="appointment-form form-wraper">
          <h3 style={{ marginBottom: "5vh" }}>Envianos un correo</h3>
          <Form
            target="_self"
            action="https://formsubmit.co/dr.jesusavila777@hotmail.com"
            method="POST"
          >
            <Row style={{ marginTop: "5vh" }}>
              <Col>
                <Form.Group controlId="name" className="form-group">
                  <Form.Label className="text-info font-weight-bold">
                    Ingresa tu nombre
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="Nombre"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email" className="form-group">
                  <Form.Label className="text-info font-weight-bold">
                    Ingresa tu correo electrónico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    name="Correo de origen"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="dep" className="form-group">
                  <Form.Label className="text-info font-weight-bold">
                    Seleccione el servicio que deseas
                  </Form.Label>
                  <div>	
                    <select
                      class="form-control"
                      name="Tipo de servicio"
                      id="dep"
                    >
                      <option value="Medico">
                        Seleccione un servicio especializado
                      </option>
                      <option value="Servicio nutricional">
                        Servicio Nutricional
                      </option>
                      <option value="Medico Familiar">
                        Consulta de Medicina familiar
                      </option>
                      <option value="Servicio psicológico">
                        Servicio Psicológico
                      </option>
                      <option value="Terapia de la comunicación">
                        Terapia de la Comunicacion
                      </option>
                      <option value="Terapia de la rehabilitación">
                        Terapia de Rehabilitación
                      </option>
                      <option value="Servicio de SPA">Servicio de SPA</option>
                      <option value="Servicio de Rayos X">
                        Servicio de Rayos X
                      </option>
                      <option value="Servicio de Laboratorio">
                        Laboratorio
                      </option>
                      <option value="Farmacia">Cotización farmaceutitca</option>
					  <option value="Otros">Otra (favor de especificar)</option>
                    </select>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="message" className="form-group" style={{ marginTop: "1vh" }}>
              <Form.Label className="text-info font-weight-bold">Ingresa tu mensaje completo</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="Ingrese su mensaje"
                required
              />
            </Form.Group>

            <Button type="submit" className="btn-sm btn-secondary mt-4">
              Enviar mi solicitud
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default appointmentForm;

import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Fade from "react-reveal/Fade"
import Wobble from "react-reveal/Wobble"

function TestimonialSection() {
	return (
		<>
			<Fade left>
				<div className='my-5 container'>
					<div className="heading-bx container text-center">
						<h6 className="title-ext text-secondary">Certificaciones Medi-KT <i class="fas fa-certificate"></i> </h6>
						<h2 className="title">Conoce nuestras certificaciones</h2>
					</div>
					<Row style={{marginTop: "10vh"}}>
						<Col className='col-12 col-lg-6'>
							<Wobble>
								<Card border="dark" style={{ marginX: "12px" }}>
									<Card.Header>Primera Certificación <span class="material-symbols-outlined">
										workspace_premium
									</span></Card.Header>
									<Card.Body>
										<Card.Title>Certificación por el Colegio Mexicano de Medicina Familiar A.C.</Card.Title>

									</Card.Body>
								</Card>
							</Wobble>
						</Col>
						<Col className='col-12 col-lg-6'>
							<Wobble>
								<Card border="dark" style={{ marginX: "12px" }}>
									<Card.Header>Segunda Certificación <span class="material-symbols-outlined">
										workspace_premium
									</span></Card.Header>
									<Card.Body>
										<Card.Title>Certificación de Registro Sanitario</Card.Title>
										<Card.Text>
											Con número de registro: 106709
										</Card.Text>
									</Card.Body>
								</Card>
							</Wobble>
						</Col>
					</Row>
				</div>
			</Fade>

		</>
	);
}

export default TestimonialSection;
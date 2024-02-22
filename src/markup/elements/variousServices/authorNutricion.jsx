import React, { Component } from 'react';
import Fade from "react-reveal";

// Import Images
// import testPic2 from "../../images/testimonials/pic2.jpg";

class AuthorNutricion extends Component {
	render() {
		return (
			<>
				<Fade left>
					<div className="author-box blog-user mb-5">
						<div className="author-profile-info">
							<div className="author-profile-pic">
								<i class="fas fa-clock" style={{ fontSize: "40px" }}></i>
							</div>
							<div className="author-profile-content">
								<h5>Conoce nuestros horarios</h5>
								<ul class="list-group list-group-flush">
									<li class="list-group-item"><strong>Lunes:</strong> 7:30 a. m. – 7:00 p. m.</li>
									<li class="list-group-item"><strong>Martes:</strong> 7:30 a. m. – 7:00 p. m.</li>
									<li class="list-group-item"><strong>Miércoles:</strong>7:30 a. m. – 7:00 p. m.</li>
									<li class="list-group-item"><strong>Jueves:</strong> 7:30 a. m. – 7:00 p. m.</li>
									<li class="list-group-item"><strong>Viernes:</strong> 7:30 a. m. – 7:00 p. m.</li>
									<li class="list-group-item"><strong>Proximamente:</strong> Abierto las 24 horas</li>
								</ul>
								<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
									<a rel="noreferrer" target="_blank" className='btn btn-success text-white mx-2 mt-3' href="https://wa.me/6181452269?text=Hola,%20me%20gustaría%20que%20me%20proporcionaras%20más%20información" style={{ width: "100%", maxWidth: "300px" }}>
										<div style={{ display: "flex", alignItems: "center" }}>
											<i className="fab fa-whatsapp" style={{ fontSize: "25px" }}></i>
											<span style={{ marginLeft: "8px", textAlign: "left" }}>Solicitar más información por WhatsApp</span>
										</div>
									</a>
									<a rel="noreferrer" className='btn btn-primary text-white mx-2 mt-3' href="/contacto" style={{ width: "100%", maxWidth: "300px" }}>
										<div style={{ display: "flex", alignItems: "center" }}>
											<i className="fas fa-mail-bulk" style={{ fontSize: "25px" }}></i>
											<span style={{ marginLeft: "8px", textAlign: "left" }}>Solicitar más información por correo</span>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</Fade>
			</>
		);
	}
}

export default AuthorNutricion;
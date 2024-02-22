import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Elements
// import FeatureSection3 from "../elements/feature-section3";
// import TeamSection from "../elements/team";
// import LatestNewsSection from "../elements/latest-news-slider";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import Zoom from "react-reveal/Zoom"
import { Fade } from 'react-reveal';


class Services extends Component {

	render() {

		const styleBox = {
			p: {
				textAlign: "justify",
			},
			h3: {
				textAlign: "center",
				fontSize: "1.5rem",
				fontWeight: "bold",
				color: "#022F8E"
			},
			cell: {
				textAlign: "center"
			},
			card: {
				minHeight: "500px",
				maxHeight: "500px"
			}
		}
		return (
			<>
				<Fade left>
					<div className="page-content bg-white">
						<div className="banner-wraper">
							<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
								<div className="container">
									<div className="page-banner-entry text-center">
										<h1>Conoce nuestros servicios</h1>
										<nav aria-label="breadcrumb" className="breadcrumb-row">
											<ul className="breadcrumb">
												<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Inicio</Link></li>
												<li className="breadcrumb-item active" aria-current="page">Servicios</li>
											</ul>
										</nav>
									</div>
								</div>
								<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
								<img className="pt-img2 animate2" src={circleDots} alt="" />
								<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
							</div>
						</div>
						<section className="section-area section-sp1">
							<div className="container">
								<div className="row">
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className='feature-box-xl mb-20' >
														<span className="icon-cell" >
															<i class="fas fa-tooth fa-lg fa-fw"></i>
														</span>
													</div>
												</div>
												<div>
													<h3 style={styleBox.h3}>Dental</h3>
													<p style={styleBox.p}>Estamos comprometidos con la salud dental de tu familia, por ello ponemos a tu disposición nuestro servicio Dental especializado.</p>
													<div style={styleBox.cell}>
														<Link to="/servicio-dental" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-brain fa-lg fa-fw"></i>
														</span>
													</div>
												</div>
												<div>
													<h3 style={styleBox.h3}>Psicología</h3>
													<p style={styleBox.p}>Por una mejor salud mental y un adecuado cuidado mental y emocional, te ofrecemos servicios de psicología a tu alcance.</p>
													<div style={styleBox.cell}>
														<Link to="/psicologia" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-universal-access fa-lg fa-fw"></i>
														</span>
													</div>
												</div>
												<div>
													<h3 style={styleBox.h3}>Rehabilitación</h3>
													<p style={styleBox.p}>Renace con nosotros hacia la recuperación y la renovación. Ponemos a tu disposición nuestro servicio de rehabilitación.</p>
													<div style={styleBox.cell}>
														<Link to="/rehabilitacion" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-child fa-lg fa-fw"></i>
														</span>
													</div>
												</div>
												<div className="icon-content" >
													<h3 style={styleBox.h3}>Medicina Familiar</h3>
													<p style={styleBox.p}>Por que comprendemos el valor de la unidad familiar. Nuestro equipo de médicos está dispuesto a brindar atención integral y continua para tu familia, cuidando de su bienestar y salud periodicamente.</p>
													<div style={styleBox.cell}>
														<Link to="/blog" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature2" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-stethoscope fa-lg fa-fw"></i>
														</span>
													</div>
												</div>
												<div className="icon-content">
													<h3 style={styleBox.h3}>Medicina General</h3>
													<p style={styleBox.p}> Por una atención comprensiva y personalizada ti y tu familia. Puedes consultar más sobre nuestro servicio médico general o visitarnos en nuestra dirección en el apartado de <a href="/contacto">contacto</a> </p>
													<div style={styleBox.cell}>
														<Link to="/" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature3" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-notes-medical fa-lg fa-fw"></i>
														</span>
													</div>
												</div>
												<div className="icon-content">
													<h3 style={styleBox.h3}>Ultrasonido</h3>
													<p style={styleBox.p}>Ofrecemos servicios de ultrasonido de vanguardia para brindarte imágenes claras y detalladas de tu salud. Nuestros expertos en ultrasonidos están listos para proporcionarte diagnósticos precisos.</p>
													<div style={styleBox.cell}>
														<Link to="/blog" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-apple-alt fa-lg fa-fw"></i>
														</span>
													</div>
												</div>
												<div className="icon-content" >
													<h3 style={styleBox.h3}>Nutrición</h3>
													<p style={styleBox.p}>Nutriendo tu bienestar, transformando tu vida. ¡Descubre el poder de una alimentación saludable con nosotros!. Agenda tu cita y forma parte del poder de una alimentación sana.</p>
													<div style={styleBox.cell}>
														<Link to="/nutricion" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-language fa-lg fa-fw"></i>
														</span>
													</div>
												</div>
												<div className="icon-content " >
													<h3 style={styleBox.h3}>Terapia del Lenguaje</h3>
													<p style={styleBox.p}>Palabras que sanan, voces que florecen. En nuestro centro de terapia del lenguaje, cultivamos la comunicación para construir un mundo donde cada palabra sea un paso hacia el éxito.</p>
													<div style={styleBox.cell}>
														<Link to="/terapia-comunicacion" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-pills fa-lg fa-fw"></i>
														</span>
													</div>
												</div>
												<div className="icon-content " >
													<h3 style={styleBox.h3}>Farmacia</h3>
													<p style={styleBox.p}>Salud en cada dosis, bienestar a tu alcance. Nuestra farmacia, tu aliada para una vida plena y saludable. Te invitamos a visitar nuestra farmacia o ver más información por tu salud. Conoce más sobre nuestros servicios.</p>
													<div style={styleBox.cell}>
														<Link to="/farmacia" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-vials fa-xs fa-fw"></i>
														</span>
													</div>
												</div>
												<div className="icon-content " >
													<h3 style={styleBox.h3}>Laboratorio</h3>
													<p style={styleBox.p}>Precisiones que cuidan, resultados que confían. En nuestro laboratorio de análisis, tu salud es nuestra prioridad. Conoce más sobre nuestro servicio de análisis clínicos.</p>
													<div style={styleBox.cell}>
														<Link to="/laboratorio" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature2" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-x-ray fa-xs fa-fw"></i>
														</span>
													</div>
												</div>
												<div className="icon-content">
													<h3 style={styleBox.h3}>Rayos X</h3>
													<p style={styleBox.p}>Iluminando tu salud, diagnósticos con claridad. En nuestro servicio de rayos X, cada imagen revela el camino hacia tu bienestar. Conoce más sobre nuestros servicios de rayos X.</p>
													<div style={styleBox.cell}>
														<Link to="/rayos-x" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature3" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fa fa-venus-mars" aria-hidden="true"></i>
														</span>
													</div>
												</div>
												<div className="icon-content">
													<h3 style={styleBox.h3}>Sexología</h3>
													<p style={styleBox.p}>Conexiones que florecen, intimidad que perdura. En nuestra consulta de sexología, cultivamos relaciones saludables y felices. Conoce sobre nuestro servicio de sexología.</p>
													<div style={styleBox.cell}>
														<Link to="/blog" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fas fa-spa fa-lg fa-fw"></i>
														</span>
													</div>
												</div>
												<div className="icon-content " >
													<h3 style={styleBox.h3}>Spa</h3>
													<p style={styleBox.p}>Renueva tu ser, encuentra tu equilibrio. En nuestro spa, el bienestar es más que un lujo, es una experiencia transformadora. Has tu cita en nuestro spa y disfruta la experiencia.</p>
													<div style={styleBox.cell}>
														<Link to="/servicio-spa" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fa-solid fa-mug-hot"></i>
														</span>
													</div>
												</div>
												<div className="icon-content " >
													<h3 style={styleBox.h3}>Cafetería</h3>
													<p style={styleBox.p}>Aromas que abrazan, sabores que inspiran. En Medi KFE, cada alimento es un viaje de placer para tu paladar y un rincón acogedor para tu alma. Visita nuestra cafetería y degusta nuestro menú.</p>
													<div style={styleBox.cell}>
														<Link to="/blog" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
									<Zoom>
										<div className="col-lg-4 col-md-6 mb-30 col-xs-6">
											<div className="feature-container feature-bx2 feature1" style={styleBox.card}>
												<div style={styleBox.cell}>
													<div className="feature-box-xl mb-20">
														<span className="icon-cell">
															<i class="fa fa-heartbeat" aria-hidden="true"></i>
														</span>
													</div>
												</div>
												<div className="icon-content " >
													<h3 style={styleBox.h3}>Electrocardiograma</h3>
													<p style={styleBox.p}>Latidos en detalle, salud en primer plano. En nuestro servicio de electrocardiograma, cuidamos tu corazón con precisión y dedicación. Pregunta sobre nuestro electrocardiograma</p>
													<div style={styleBox.cell}>
														<Link to="/blog" className="btn btn-primary light">Ver Más</Link>
													</div>
												</div>
											</div>
										</div>
									</Zoom>
								</div>
							</div>
						</section>

						{/* <FeatureSection3 /> */}

						{/* <TeamSection /> */}

						{/* <LatestNewsSection /> */}

					</div>
				</Fade>
			</>
		);
	}
}

export default Services;
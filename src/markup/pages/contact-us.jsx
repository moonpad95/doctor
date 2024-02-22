import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from "react-reveal"

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import pic1 from "../../images/about/pic-1.jpg";
// import icon1 from "../../images/icon/icon1.png";
// import icon2 from "../../images/icon/icon2.png";
// import icon3 from "../../images/icon/icon3.png";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";
import Cont from '../elements/contact';
import Map from '../elements/map';


class ContactUs extends Component {

	render() {
		return (
			<>
				<div className="page-content bg-white">
					<div className="banner-wraper">
						<div className="page-banner banner-lg contact-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Contacto</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Inicio</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Contacto</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={animateWave} alt="" />
							<img className="pt-img2 animate2" src={animate2} alt="" />
							<img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
						</div>
					</div>
					<section className="text-center">
						<div className="contact-wraper">
							<div className='row'>
								<div className='col-lg-12 my-3'>
									<Fade left>
										<div className="contact-info ovpr-dark" style={{ backgroundImage: "url(" + pic1 + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
											<div className="info-inner">
												<div className="row">
													<div className="col-md-6">
														<h4 className="title mb-5">Dejamos a tu disposición nuestros datos de contacto</h4>
														<div className="icon-box">
															<h6 className="title mb-4"><i className="ti-map-alt"></i>Violeta 105, Hacienda las Flores, 34166 Durango, Dgo México</h6>
															<p>Nuestra Dirección</p>
														</div>
														<div className="icon-box">
															<h6 className="title mb-4"><i className="ti-id-badge"></i>medikt2020@gmail.com</h6>
															<p>Nuestro Email</p>
															<h6 className="title mb-4"><i className="fas fa-phone fa-xs fa-fw"></i>618-1-09-89-99</h6>
															<p>Nuestro Teléfono</p>
														</div>
													</div>
													<div className="col-md-6 py-5">
														<Map />
													</div>
												</div>
											</div>
										</div>
									</Fade>
								</div>
							</div>
							<div style={{marginTop:"20vh"}}>
								<div className="heading-bx container mt-5">
									<h6 className="title-ext text-secondary">Envianos un correo</h6>
									<h2 className="title">Formulario de contacto</h2>

								</div>
								<Cont />
							</div>
						</div>
						<div className="heading-bx container mt-5">
							<h6 className="title-ext text-secondary">Dejamos a tu disposición</h6>
							<h2 className="title">Métodos de pago</h2>
						</div>
					</section>
					{/* <section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature4">
										<div className="icon-md feature-icon">
											<img src={icon1} alt="" />
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Números de contacto</h5>
											<p>6181-00-00-00</p>
											<p>6181-00-00-00</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature3">
										<div className="icon-md feature-icon">
											<img src={icon3} alt="" />
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Correo Electrónico</h5>
											<p>MEDI-KT@gmail.com</p>
											<p>MEDI-KT@gmail.com</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature2">
										<div className="icon-md feature-icon">
											<img src={icon2} alt="" />
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Dirección</h5>
											<p>Violeta 105, Hacienda las Flores, 34166 Durango, Dgo México</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section> */}

				</div>

			</>
		);
	}
}

export default ContactUs;
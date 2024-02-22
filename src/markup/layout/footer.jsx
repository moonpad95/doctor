import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import Logo from '../../images/mediktremoved.png';
import footerBg from '../../images/background/footer.jpg';
import ptImg1 from '../../images/shap/wave-blue.png';
import ptImg2 from '../../images/shap/circle-dots.png';
import ptImg3 from '../../images/shap/plus-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';

// Social Images
// import facebook from '../../images/social/facebook.png';
// import twitter from '../../images/social/twitter.png';
// import instagram from '../../images/social/instagram.png';
// import linkedin from '../../images/social/linkedin.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<footer className="footer" style={{backgroundImage: "url("+footerBg+")"}}>
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-xl-4 col-lg-4 col-md-6">
									<div className="widget widget_info">
										<div className="footer-logo">
											<Link to="/"><img src={Logo} alt=""/></Link>
										</div>
										
										<div className="ft-contact">
											<p>MEDI-KT SERVICIO - ATENCIÓN ESPECIALIZADA - BAJO COSTO - CALIDAD Y COMPROMISO</p>
											<a href="tel:6181098999">
											<div className="contact-bx">
												<div className="icon"><i className="fas fa-phone-alt"></i></div>
												<div className="contact-number">
													<span>Contacto</span>
													<h4 className="number">618-1-09-89-99</h4>
												</div>
											</div>
											</a>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-6">
									<div className="widget footer_widget ml-50">
										<h3 className="footer-title">Páginas Frecuentes</h3>
										<ul>
											<li><Link to="/sobre-nosotros"><span>Acerca de nosotros</span></Link></li>
											<li><Link to="/servicios"><span>Servicios</span></Link></li>
											{/* <li><Link to="/booking"><span>Más</span></Link></li> */}
											<li><Link to="/preguntas"><span>Preguntas Frecuentes</span></Link></li>
											{/* <li><Link to="/blog-grid"><span>Blogs</span></Link></li> */}
											{/* <li><Link to="/team"><span>Nuestro Equipo</span></Link></li> */}
										</ul>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-6">
									<div className="widget footer_widget">
										<h3 className="footer-title">Servicios Especializados</h3>
										<ul>
											<li><Link to="/service"><span>Servicio Dental</span></Link></li>
											<li><Link to="/service"><span>Servicio Psicológico</span></Link></li>
											<li><Link to="/service"><span>Medicina General</span></Link></li>
											<li><Link to="/service"><span>Servicio de Laboratorio</span></Link></li>
											<li><Link to="/service"><span>Farmacia</span></Link></li>
											<li><Link to="/service"><span>Rayos X</span></Link></li>
										</ul>
									</div>
								</div>
								{/* <div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_form">
										<h3 className="footer-title">Redes Sociales</h3>
										
										<div className="footer-social-link">
											<ul>
												<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={facebook} alt=""/></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><img src={twitter} alt=""/></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src={instagram} alt=""/></a></li>
												<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><img src={linkedin} alt=""/></a></li>
											</ul>
										</div>
									</div>
								</div> */}
							</div>
						</div>
					</div>
					<div className="container">
						<div className="footer-bottom">
							<div className="row">
								<div className="col-12 text-center">
									<p className="copyright-text">Copyright © 2023  <a href="/" rel="noreferrer" target="_blank" className="text-secondary"> </a></p>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt=""/>
					<img className="pt-img2 animate1" src={ptImg2} alt=""/>
					<img className="pt-img3 animate-rotate" src={ptImg3} alt=""/>
					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
				</footer>
			
			</>
		);
	}
}

export default aboutSection;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fade, Flip } from "react-reveal"
import ReactPlayer from "react-player"

// Elements
import WidgetRecentPosts from "../../elements/variousServices/dentalServices";
// import CommentList from "../../elements/comment-list";
// import CommentRespond from "../../elements/comment-respond";
// import WidgetTag from "../../elements/widget-tag";
// import WidgetSearch from "../../elements/widget-search";
// import WidgetGallery from "../../elements/widget-gallery";
// import WidgetRecentPosts from "../../elements/widget-recent-posts";

// Import Images
import bnrImg1 from "../../../images/banner/img1.jpg";
import mediaDental from "../../../media/mediaDental.mp4"
import mediaDental2 from "../../../media/mediaDental2.mp4"
import waveBlue from "../../../images/shap/wave-blue.png";
import circleDots from "../../../images/shap/circle-dots.png";
import plusBlue from "../../../images/shap/plus-blue.png";
// import blogDefaultPic1 from "../../../images/blog/default/pic1.jpg";
// import testPic3 from "../../../images/testimonials/pic3.jpg";
// import galleryPic2 from "../../../images/gallery/pic2.jpg";
// import galleryPic5 from "../../../images/gallery/pic5.jpg";
import bg2 from "../../../images/dental/dental2.jpg";
import AuthorDental from "../../elements/variousServices/authorDental";

class Dental extends Component {
	render() {
		return (
			<>
				<div className="page-content bg-white">
					<div className="banner-wraper">
						<div
							className="page-banner"
							style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
						>
							<div className="container">
								<Flip top>
									<div className="page-banner-entry text-center">
										<h1>Servicio Dental</h1>
										<nav aria-label="breadcrumb" className="breadcrumb-row">
											<ul className="breadcrumb">
												<li className="breadcrumb-item">
													<Link to="/">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="22"
															height="22"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
															className="feather feather-home"
														>
															<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
															<polyline points="9 22 9 12 15 12 15 22"></polyline>
														</svg>{" "}
														Inicio
													</Link>
												</li>
												<li
													className="breadcrumb-item active"
													aria-current="page"
												>
													Servicios Especializados
												</li>
												<li
													className="breadcrumb-item active"
													aria-current="page"
												>
													Servicio Dental
												</li>
											</ul>
										</nav>
									</div>
								</Flip>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
							<img className="pt-img2 animate2" src={circleDots} alt="" />
							<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
						</div>
					</div>
					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<Fade bottom>
								<div className="row">
									<div className="col-md-12 col-lg-6 col-xl-7 mb-30 mb-md-50">
										<div className="blog-card blog-single">
											<div className="post-media">

												<ReactPlayer
													url={mediaDental}
													className='react-player'
													muted="true"
													playing="true"
													style={{ marginBottom: "5vh", borderRadius: "10%" }}
													height='100%'
													width="100%"
													pip="true"
													controls="true"
												/>
											</div>
											<div className="info-bx">
												<div className="ttr-post-title">
													<h2 className="post-title">
														¡Sonríe con confianza en nuestra Clínica Dental de
														Excelencia!
													</h2>
												</div>
												<div className="ttr-post-text">
													<blockquote className="wp-block-quote">
														<p>
															En nuestra clínica, tu salud bucal es nuestra
															prioridad número uno. Con un equipo de profesionales
															altamente capacitados y tecnología de vanguardia,
															estamos comprometidos a brindarte la mejor atención
															dental posible.
														</p>
													</blockquote>
													<p>
														En nuestra clínica, nos esforzamos por la excelencia
														en cada detalle. Utilizamos equipos de última
														generación para garantizar procedimientos precisos y
														cómodos. Además, seguimos estrictas medidas de higiene
														para tu tranquilidad y seguridad.
													</p>

													{/* <li className="blocks-gallery-item"><img alt="" src={galleryPic2} /></li> */}
												</div>
												<ReactPlayer
													url={mediaDental2}
													className='react-player'
													pip="false"
													muted="true"
													playsinline="true"
													playing="true"
													loop="true"
													style={{ marginBottom: "8vh" }}
													width='100%'
												/>
												<h6 className="mt-5">Conoce nuestro catalogo de servicios dentales.</h6>

												<WidgetRecentPosts />
												{/* <div className="ttr-post-footer">
												<div className="post-tags">
													<strong>Tags:</strong>
													<Link to="#">Health</Link> 
													<Link to="#">Growth</Link> 
													<Link to="#">Life</Link> 
												</div>
												<div className="share-post ml-auto">
													<ul className="social-media mb-0">
														<li><strong>Share:</strong></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
													</ul>
												</div>
											</div> */}
											</div>
										</div>

										<AuthorDental />


										{/* <div className="clear" id="comment-list">
										<div className="comments-area" id="comments">
											<h4 className="widget-title">8 Comments</h4>
											
											<div className="clearfix">
												
												<CommentList />
												
												<CommentRespond />
												
											</div>
										</div>
									</div> */}
									</div>
									<div className="col-md-12 col-lg-6 col-xl-5">
										<aside className="side-bar sticky-top aside-bx">
											<div>
												<div
													className="contact-info ovpr-dark"
													style={{
														backgroundImage: "url(" + bg2 + ")",
														backgroundRepeat: "no-repeat",
														backgroundSize: "cover",
														backgroundAttachment: "fixed",
													}}
												>
													<div className="info-inner">
														<h3 className="title text-center mb-3">
															Contacta a Medi-KT Dental
														</h3>
														<div className="icon-box">
															<h6 className="title mb-3">
																<i className="ti-map-alt"></i>Violeta #105,
																Hacienda las Flores 34166.
															</h6>
														</div>
														<div className="icon-box">
															<a href="mailto:medikt2020@gmail.com" title="Enviar un correo">
																<h6 className="title mb-3">
																	<i className="ti-id-badge"></i>
																	medikt2020@gmail.com
																</h6>
															</a>
															<a href="tel:6182214491" title="Llamar a C.D. Nallely Cortez Aguilera">
																<h6 className="title mb-3">
																	<i class="fas fa-phone fa-xs fa-fw"></i>
																	(618)-221-44-91
																</h6>
															</a>
															<a href="tel:6181349844" title="Llamar a C.D. Carolina Morales Guerra">
																<h6 className="title mb-3">
																	<i class="fas fa-phone fa-xs fa-fw"></i>
																	(618)-134-98-44
																</h6>
															</a>
															<a rel="noreferrer" target="_blank" href="https://wa.me/6181349844">
																<h6 className="title mb-3">
																	<i class="fab fa-whatsapp"></i>
																	C.D. Carolina Morales Guerra
																</h6>
															</a>
															<a rel="noreferrer" target="_blank" href="https://wa.me/6182214491">
																<h6 className="title mb-3">
																	<i class="fab fa-whatsapp"></i>
																	C.D. Nallely Cortez Aguilera
																</h6>
															</a>
														</div>
													</div>
												</div>
											</div>

											{/* <WidgetSearch />
										
										<WidgetRecentPosts />
										
										<WidgetGallery />
										
										<WidgetTag /> */}
										</aside>
									</div>
								</div>
							</Fade>
						</div>
					</section>
				</div>
			</>
		);
	}
}

export default Dental;

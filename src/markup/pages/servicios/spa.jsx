import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fade, Flip } from "react-reveal"
import Flash from 'react-reveal/Flash';
import ReactPlayer from 'react-player';
// Elements
// import CommentList from "../../elements/comment-list";
// import CommentRespond from "../../elements/comment-respond";
// import WidgetTag from "../../elements/widget-tag";
// import WidgetSearch from "../../elements/widget-search";
// import WidgetGallery from "../../elements/widget-gallery";
// import WidgetRecentPosts from "../../elements/widget-recent-posts";

// Import Images
import bnrImg1 from "../../../images/banner/img1.jpg";
import mediaSpa from "../../../media/mediaSpa1.mp4"
import waveBlue from "../../../images/shap/wave-blue.png";
import circleDots from "../../../images/shap/circle-dots.png";
import plusBlue from "../../../images/shap/plus-blue.png";
// import blogDefaultPic1 from "../../../images/blog/default/pic1.jpg";
// import testPic3 from "../../../images/testimonials/pic3.jpg";
import galleryPic2 from "../../../images/spa/spa2.jpg";
import bg1 from "../../../images/spa/medispa.jpg"
import AuthorSpa from '../../elements/variousServices/authorSpa';
import SpaServicesPost from "../../elements/variousServices/spaServices";


class SpaService extends Component {

	render() {
		return (
			<>
				<div className="page-content bg-white">
					<div className="banner-wraper">
						<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
							<Flip top>
								<div className="container">
									<div className="page-banner-entry text-center">
										<h1>MediSpa</h1>
										<nav aria-label="breadcrumb" className="breadcrumb-row">
											<ul className="breadcrumb">
												<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Inicio</Link></li>
												<li className="breadcrumb-item active" aria-current="page">Servicios Especializados</li>
												<li className="breadcrumb-item active" aria-current="page">MediSpa</li>

											</ul>
										</nav>
									</div>
								</div>
							</Flip>
							<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
							<img className="pt-img2 animate2" src={circleDots} alt="" />
							<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
						</div>
					</div>

					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<Fade bottom>
								<div className="row">
									<div className="col-md-12 col-lg-7 col-xl-7 mb-30 mb-md-50">
										<div className="blog-card blog-single">
											<div className="post-media">

												<Flash>
													<ReactPlayer
														url={mediaSpa}
														className='react-player'
														playing="true"
														playsinline="true"
														volume="0.1"
														style={{ marginBottom: "5vh", borderRadius: "10%" }}
														height='100%'
														width="100%"
														pip="false"
														controls="true"
													/>
												</Flash>
											</div>
											<div className="info-bx">

												<div className="ttr-post-title">
													<h2 className="post-title">Un Spa a tu alcance.</h2>
												</div>
												<div className="ttr-post-text">
													<p>Sumérgete en el oasis del bienestar en Medi-Kt Spa, donde cada sesión es una pausa rejuvenecedora para cuerpo y mente. Descubre un mundo de relajación personalizada, donde la ciencia y el cuidado se fusionan para ofrecerte una experiencia de spa única. Despídete del estrés y revive tu vitalidad en un entorno diseñado para tu completo rejuvenecimiento. En Medi-Kt Spa, el equilibrio entre la medicina y el placer redefine tu bienestar</p>
													<blockquote className="wp-block-quote">
														<p>Renueva tu ser, encuentra tu equilibrio. En nuestro spa, el bienestar es más que un lujo, es una experiencia transformadora.</p>
													</blockquote>

													<ul className="wp-block-gallery columns-6 is-cropped">
														<li className="blocks-gallery-item"><img alt="" src={galleryPic2} /></li>
													</ul>

												</div>
												<div className="ttr-post-footer">
													<div className="post-tags">
														<strong>Etiquetas:</strong>
														<Link to="#">Salud</Link>
														<Link to="#">Bienestar</Link>
														<Link to="#">Relajación</Link>
													</div>
													{/* <div className="share-post ml-auto">
													<ul className="social-media mb-0">
														<li><strong>Share:</strong></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
													</ul>
												</div> */}
												</div>
											</div>
										</div>
										<SpaServicesPost />
										<AuthorSpa />


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
									<div className="col-md-12 col-lg-5 col-xl-5 mb-30">
										<aside className="side-bar sticky-top aside-bx">
											<div>
												<div className="contact-info ovpr-dark" style={{ backgroundImage: "url(" + bg1 + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
													<div className="info-inner">
														<h4 className="title mb-5">Contacto</h4>
														<div className="icon-box">
															<h6 className="title mb-4"><i className="ti-map-alt"></i>Violeta 105, Hacienda las Flores, 34166 (planta alta).</h6>
														</div>
														<div className="icon-box">
															<a href="https://www.facebook.com/MediSpa/?paipv=0&eav=Afb468-vMHo6BBlHc9t57J_O1kaCJQyp2KKatQ3R1AMLnmZuCGlaC-dlXdTKbwOt51U&_rdr" title='Haga click para ir al perfil de Facebook' target='_blank' rel='noreferrer'><h6 className="title mb-4"><i class="fab fa-facebook fa-xs fa-fw"></i>@MediSpa</h6></a>
															<a href="tel:6183260896" title='Haga click para ir a llamar' target='_blank' rel='noreferrer'><h6 className="title mb-4"><i class="fas fa-phone fa-xs fa-fw"></i>618-326-0896</h6></a>
															<a href="https://wa.me/6183260896" title='Haga click para enviar un WhatsApp' target='_blank' rel='noreferrer'><h6 className='title mb-4'><i class="fab fa-whatsapp fa-xs fa-fw"></i>618-326-0896</h6></a>
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

export default SpaService;
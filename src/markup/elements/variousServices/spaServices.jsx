import React, { Component } from 'react';

// Import Images
import recentBlogImg1 from "../../../images/spa/promo1.jpg";
import recentBlogImg2 from "../../../images/spa/promo2.jpg";
import recentBlogImg3 from "../../../images/spa/promo3.jpg";
import recentBlogImg4 from "../../../images/spa/promo4.webp";
import recentBlogImg5 from "../../../images/spa/promo5.jpg";
import recentBlogImg6 from "../../../images/spa/promo6.jpg";
import recentBlogImg7 from "../../../images/spa/promo7.jpg";
import recentBlogImg8 from "../../../images/spa/promo8.jpg";
import recentBlogImg9 from "../../../images/spa/promo9.jpg";
import recentBlogImg10 from "../../../images/spa/promo10.jpg";

import { Fade } from 'react-reveal';


class SpaServicesPost extends Component{
	render(){
		return(
			<>
				<div className="widget recent-posts-entry">
					<h4 className="widget-title">Servicios MediSpa</h4>
					<div className="widget-post-bx">
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Retiro de:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-spa"></i>Verrugas, lunares y mezquinos</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Pedicure</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-spa"></i> Spa y clínico</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Manicure</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-spa"></i> Pregunta por nuestro servicio</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg4} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Masajes</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-spa"></i> Relajantes, descontracturantes y reductivos</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg5} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Servicios de Depilación</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-spa"></i> Depilación para pieles sensibles y con presición</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg6} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Uñas</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-spa"></i> Acrílicas y gel semipermantente</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg7} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Uñas enterradas</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-spa"></i> Tratamiento de uñas enterradas</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg8} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Faciales</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-spa"></i> Tratamientos faciales especializados</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg9} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Tratamiento y cuidado post y pre operatorios</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-spa"></i> Cuidado y tratamiento antes y despues de una operación, especialmente operaciones estéticas</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg10} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Otros servicios.</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-spa"></i> Pestañas, botox y muchas más cosas...</li>
								</ul>
							</div>
						</div>
                        </Fade>
					</div>
				</div>
				
			</>
		);
	}
}

export default SpaServicesPost;
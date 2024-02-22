import React, { Component } from 'react';

// Import Images
import recentBlogImg1 from "../../../images/xray/promo1.jpg";
import recentBlogImg2 from "../../../images/xray/promo2.jpg";
import recentBlogImg3 from "../../../images/xray/promo3.jpg";




import { Fade } from 'react-reveal';


class XrayServicesPost extends Component{
	render(){
		return(
			<>
				<div className="widget recent-posts-entry">
					<h4 className="widget-title">Principales servicios en rayos X</h4>
					<div className="widget-post-bx">
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Radiografías Convencionales:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-x-ray"></i> Imágenes tradicionales para evaluar huesos y órganos internos.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Mamografías:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-x-ray"></i> Estudios especializados para la detección temprana de enfermedades mamarias.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Ecografías:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-x-ray"></i> Imágenes utilizando ondas sonoras para visualizar tejidos y órganos.</li>
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

export default XrayServicesPost;
import React, { Component } from 'react';

// Import Images
import recentBlogImg1 from "../../../images/blog/recent-blog/pic1.jpg";
import recentBlogImg2 from "../../../images/dental/amalgama.jpg";
import recentBlogImg3 from "../../../images/dental/resinas.jpg";
import recentBlogImg4 from "../../../images/dental/coronas.png";


class WidgetRecentPosts extends Component{
	render(){
		return(
			<>
				<div className="widget recent-posts-entry">
					<h4 className="widget-title">Servicios Dentales</h4>
					<div className="widget-post-bx">
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Limpieza Dental</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-tooth"></i>Limpieza dental para lucir una sonrisa blanca y saludable</li>
								</ul>
							</div>
						</div>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Amalgamas</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-tooth"></i>Materiales y empaste de amalgamas</li>
								</ul>
							</div>
						</div>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Resinas.</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-tooth"></i>Reemplazo de estructura con resina</li>
								</ul>
							</div>
						</div>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg4} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Coronas.</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-tooth"></i>Ajuste de coronas dentales</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
			</>
		);
	}
}

export default WidgetRecentPosts;
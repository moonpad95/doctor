import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class Error extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Pagina no encontrada</h1>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					
					<section className="section-area section-sp2 error-404">
						<div className="container">
							<div className="inner-content">
								<h2 className="error-title">4<span></span>4</h2>
								<h3 className="error-text">Lo sentimos, no pudimos encontrar esta página.</h3>
								<p>Es posible que esta página no exista o este temporalmente deshabilitada.</p>
								<div className="clearfix">
									<Link to="/" className="btn btn-primary">Ir a inicio</Link>
								</div>
							</div>
						</div>
					</section>
					
				</div>
				
			</>
		);
	}
}

export default Error;
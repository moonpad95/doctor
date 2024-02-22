import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bg1 from '../../images/main-banner/bg1.jpg';
import doctorImg from '../../images/mediktremoved.png';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/square-blue.png';
import ptImg3 from '../../images/shap/chicle-blue-2.png';
import ptImg4 from '../../images/shap/plus-orange.png';
import ptImg5 from '../../images/shap/wave-orange.png';
import Fade from 'react-reveal/Fade';

class aboutSection extends Component{
	render(){
		return(
			<>
				<Fade bottom>
				<div className="main-banner" style={{backgroundImage: "url("+bg1+")"}}>
					<div className="container inner-content">
						<div className="row align-items-center">
							<div className="col-lg-8 col-md-7 col-sm-6">
								<h1>Tu familia es lo primero.</h1>
								<h2>Estamos comprometidos con brindarte un servicio de calidad y a tu alcance</h2>
								<Fade bottom>
								<Link to="/servicios" className="btn btn-secondary btn-lg shadow mt-3"><i class="fas fa-briefcase-medical fa-lg fa-fw"></i> Conoce todos nuestros servicios</Link>
								</Fade>
							</div>
							<div className='col-lg-2 col-md-1 col-sm-1'></div>
							<div className="col-lg-2 col-md-3 col-sm-5 text-center">
								<div className="banner-img">
									<img src={doctorImg} alt=""/>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate1" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate3" src={ptImg3} alt=""/>
					<img className="pt-img4 animate4" src={ptImg4} alt=""/>
					<img className="pt-img5 animate-wave" src={ptImg5} alt=""/>
				</div>
				</Fade>
			</>
		);
	}
}

export default aboutSection;
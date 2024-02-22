import React, { Component } from 'react';
import Flash from "react-reveal";

// Import Images
// import teamMember1 from '../../images/team/icon_background.jpg';
// import teamMember2 from '../../images/team/icon_background.jpg';
// import teamMember3 from '../../images/team/icon_background.jpg';
import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/square-dots-orange.png';
import ptImg3 from '../../images/shap/line-circle-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';
import ptImg5 from '../../images/shap/circle-dots.png';

const teamMembers = [
	{
		name: 'Misión',
		specialization: 'Empresa mexicana que pretende servir con calidad, prontitud y a buen precio',
		image: <i class="fa fa-rocket" aria-hidden="true"></i>,
	},
	{
		name: 'Visión',
		specialization: 'Ofrecer a nuestros pacientes la combinación perfecta de excelencia en el cuidado de su salud, atención pronta y precios accesibles.',
		image: <i class="fa fa-eye" aria-hidden="true"></i>,
	},
	{
		name: 'Valores',
		specialization: 'Atender a nuestros pacientes con humanidad, respeto, excelencia, profesionalismo y velar siempre por su salud y bienestar',
		image: <i class="fa fa-star" aria-hidden="true"></i>,
	},
];

class TeamSection extends Component {
	render() {
		return (
			<>
				<section className="section-area section-sp3 team-wraper" style={{marginBottom: "15vh"}}>
					<div className="container">
						<div className="heading-bx text-center">
							<h2 className="title">Misión, Visión y Política Empresarial</h2>
						</div>
						<div className="row">
							{teamMembers.map((teamMember, index) => (
								<Flash>
									<div key={index} className="col-lg-4 col-sm-10" style={{ marginBottom: "5vh" }} >
										<div className="team-member text-secondary" style={{ minHeight: "350px", display: "flex", justifyContent: "center", alignItems: "center" }}>
											<div style={{maxHeight: "30vh"}}>
												<div style={{ fontSize: "5vh" }}>{teamMember.image}</div>
												<div className="team-info">
													<div className="team-info-content">
														<h4 className="title">{teamMember.name}</h4>
														<h6 className="text-primary" style={{ textAlign: "left" }}>{teamMember.specialization}</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Flash>
							))}
						</div>
					</div>
					<img className="pt-img1 animate1" src={ptImg1} alt="" />
					<img className="pt-img2 animate2" src={ptImg2} alt="" />
					<img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
					<img className="pt-img4 animate-wave" src={ptImg4} alt="" />
					<img className="pt-img5 animate-wave" src={ptImg5} alt="" />
				</section>

			</>
		);
	}
}

export default TeamSection;
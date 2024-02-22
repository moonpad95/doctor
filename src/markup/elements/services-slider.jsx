import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import Jello from "react-reveal/Jello"

// Import Images
import img1 from "../../images/tips/tip1.jpeg"
import bgImage from "../../images/background/footer.jpg"
import img2 from "../../images/tips/tip2.jpeg"
import img3 from "../../images/tips/tip3.png"
import lineCircleBlue from "../../images/shap/line-circle-blue.png";
import { Component } from 'react';

class ServicesSliderSection extends Component {
	render(){
		const styleTips = {
			img: {
				height: "70vh",
				justifyContent: "center",
				display: "inline-block",
				borderRadius: '10px',
				boxShadow: '4px 8px 8px rgba(0, 0, 0, 0.3)'
			},
			box: {
				textAlign: "center",
			},
		}
		const settings = {
			dots: true,
			infinite: true,
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 591,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};

		return (
			<>
				<Fade right>
					<div className='container-fluid'>
						<section className="section-area" style={{ backgroundImage: "url(" + bgImage + ")", backgroundSize: "cover", backgroundAttachment: "fixed", minHeight: "50vh", borderRadius: "5%" }}>
							<div className="row align-items-center section-sp1 ">
								<div className='col-md-2'></div>
								<div className="col-md-4 mb-30">
									<div className="heading-bx container">
										<h6 className="title-ext text-secondary">Consejos Medi-KT</h6>
										<h2 className="title">Tips del día</h2>
										<h4 className='title text-secondary'>DESLIZA LA IMAGEN PARA VER MÁS <i class="fa fa-arrow-right" aria-hidden="true"></i></h4>
									</div>
								</div>

								<div className="col-md-6 mb-15">
									<img className="pt-img1 animate-rotate" src={lineCircleBlue} alt="" />
									<Slider {...settings} className="service-slide slick-arrow-none">
										<div className="slider-item">
											<div className="feature-container" style={styleTips.box}>
												<Jello>
													<img src={img1} alt="IMAGEN DENTAL" style={styleTips.img} />
													<div className="icon-content text-center mt-4">
														<h4 className="ttr-title">Conocer más</h4>
														<Link to="/dental" className="btn btn-primary light">Medikt Dental</Link>
													</div>
												</Jello>
											</div>
										</div>
										<div className="slider-item">
											<div className="feature-container" style={styleTips.box}>
												<Jello>
													<img src={img2} alt="IMAGEN DENTAL" style={styleTips.img} />
													<div className="icon-content text-center mt-4">
														<h4 className="ttr-title">Conocer más</h4>
														<Link to="/dental" className="btn btn-primary light">Medikt Dental</Link>
													</div>
												</Jello>
											</div>
										</div>
										<div className="slider-item">
											<div className="feature-container" style={styleTips.box}>
												<Jello>
													<img src={img3} alt="IMAGEN DENTAL" style={styleTips.img} />
													<div className="icon-content text-center mt-4">
														<h4 className="ttr-title">Conocer más</h4>
														<Link to="/servicio-spa" className="btn btn-primary light">MediSpa</Link>
													</div>
												</Jello>
											</div>
										</div>
										{/* <div className="slider-item">
										<div className="feature-container feature-bx2 feature2">
											<div className="feature-box-xl mb-20">
												<span className="icon-cell">
													<svg enableBackground="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg">
														<path d="m509.82 327.343-21.991-27.599c-1.896-2.381-4.775-3.768-7.82-3.768h-7.712l-74.353-93.385c-1.897-2.383-4.777-3.771-7.823-3.771h-22.862v-22.765c0-19.014-15.43-34.483-34.396-34.483h-97.678v-4.552c0-28.428-23.127-51.555-51.555-51.555s-51.555 23.127-51.555 51.555v4.552h-97.678c-18.966 0-34.397 15.47-34.397 34.484v251.241c0 5.523 4.478 10 10 10h22.279c4.628 22.794 24.758 39.999 48.815 39.999s44.186-17.205 48.814-39.999h250.37c4.628 22.794 24.757 39.999 48.814 39.999s44.187-17.205 48.815-39.999h24.093c5.522 0 10-4.477 10-10v-93.722c0-2.264-.769-4.461-2.18-6.232zm-124.52-108.523 61.432 77.156h-79.474v-77.156zm-233.226-81.799c0-17.399 14.155-31.555 31.555-31.555s31.555 14.156 31.555 31.555v4.552h-63.109v-4.552zm-132.074 39.035c0-7.986 6.459-14.483 14.397-14.483h298.464c7.938 0 14.396 6.497 14.396 14.483v241.241h-217.35c-4.628-22.794-24.757-39.999-48.814-39.999s-44.187 17.205-48.815 39.999h-12.278zm61.094 281.24c-16.44 0-29.816-13.458-29.816-29.999s13.376-29.999 29.816-29.999 29.815 13.458 29.815 29.999-13.375 29.999-29.815 29.999zm347.998 0c-16.44 0-29.815-13.458-29.815-29.999s13.375-29.999 29.815-29.999 29.816 13.458 29.816 29.999-13.376 29.999-29.816 29.999zm62.908-39.999h-14.093c-4.628-22.794-24.758-39.999-48.815-39.999s-44.186 17.205-48.814 39.999h-13.02v-101.321h107.932l16.81 21.096z" />
														<path d="m183.629 66.808c5.522 0 10-4.477 10-10v-12.104c0-5.523-4.478-10-10-10s-10 4.477-10 10v12.104c0 5.523 4.477 10 10 10z" />
														<path d="m236.764 94.969c1.934 1.829 4.404 2.736 6.871 2.736 2.652 0 5.299-1.048 7.266-3.127l10.626-11.229c3.796-4.011 3.621-10.341-.391-14.137s-10.341-3.621-14.137.391l-10.626 11.229c-3.796 4.012-3.621 10.341.391 14.137z" />
														<path d="m116.358 94.579c1.967 2.078 4.613 3.126 7.266 3.126 2.467 0 4.938-.907 6.871-2.737 4.012-3.796 4.187-10.125.391-14.137l-10.627-11.229c-3.796-4.011-10.126-4.187-14.137-.39-4.012 3.796-4.187 10.125-.391 14.137z" />
														<path d="m90.896 216.592h184.372v113.287h-184.372z" fill="#b2f0fb" />
													</svg>
												</span>
											</div>
											<div className="icon-content">
												<h3 className="ttr-title">Emergencias</h3>
												<p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
												<Link to="/service-detail" className="btn btn-primary light">View More</Link>
											</div>
										</div>
									</div> */}
									</Slider>
									<img className="pt-img1 animate-rotate" src={lineCircleBlue} alt="" />

								</div>
							</div>
						</section>
					</div>
				</Fade>


			</>
		);
								}
}

export default ServicesSliderSection;
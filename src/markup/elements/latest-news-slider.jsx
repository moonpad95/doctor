import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

// Import Images
import lingBg2 from "../../images/background/line-bg2.png"
import animate1 from "../../images/shap/trangle-orange.png"
import animate2 from "../../images/shap/square-dots-orange.png"
import animateRotate from "../../images/shap/line-circle-blue.png"
import animateWave from "../../images/shap/wave-blue.png"
import testPic1 from "../../images/mediktremoved.png"
import blogGridPic1 from "../../images/blog/grid/pic1.jpg"
import blogGridPic2 from "../../images/cafe.jpg"
import blogGridPic3 from "../../images/spa/promo10.jpg"


// Team Content
const content = [
	{
		thumb: blogGridPic1,
		authorPic: testPic1,
		name: "MEDI KT Dental",
		author: "Corporativo MEDI-KT",
		title: "Ya contamos con servicio de Coronas dentales",
		date: "2023",
		link: "/dental"
	},
	{
		thumb: blogGridPic2,
		authorPic: testPic1,
		name: "MEDI KFE",
		author: "Corporativo MEDI-KT",
		title: "Ya contamos con Cafeteria MEDI KFE",
		date: "2023",
		link: "/medi-kfe"
	},
	{
		thumb: blogGridPic3,
		authorPic: testPic1,
		name: "MediSpa",
		author: "Corporativo MEDI-KT",
		title: "¡Ya contamos con servicio de Botox, Pestañas y mucho más!",
		date: "2023",
		link: "/servicio-spa"
	},
]

const NewsItem = ({ item }) => {
	return (
		<div className="slider-item">
			<div className="blog-card">
				<div className="post-media">
					<Link to={item.link}><img src={item.thumb} alt="" /></Link>
				</div>
				<div className="post-info">
					<ul className="post-meta">
						<li className="author"><Link to={item.link}><img src={item.authorPic} alt="" />{item.author}</Link></li>
						<li className="date"><i className="far fa-calendar-alt"></i>{item.date}</li>
					</ul>
					<h5 className="post-title"><Link to="/blog-details">{item.title}</Link></h5>
					<Link to={item.link} className="btn btn-outline-primary btn-sm">Ir a {item.name} <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
				</div>
			</div>
		</div>
	);
};

const settings = {
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1191,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
			}
		},
	],
};


class LatestNewsSection extends Component {
	render() {
		return (
			<>
				<Fade left>
					<section className="section-area section-sp1 blog-area" style={{ backgroundImage: "url(" + lingBg2 + ")", backgroundPosition: "center", backgroundSize: "cover", }}>
						<div className="container">
							<div className="heading-bx text-center">
								<h6 className="title-ext text-secondary">ACTUALIZACIONES Y NOTICIAS</h6>
								<h2 className="title">MEDI-KT</h2>
							</div>

							<Slider {...settings} className="tt-slider blog-slide slider-sp0 slick-arrow-none">
								{content.map((item) => (
									<NewsItem key={item.title} item={item} />
								))}
							</Slider>

						</div>

						<img className="pt-img1 animate1" src={animate1} alt="" />
						<img className="pt-img2 animate2" src={animate2} alt="" />
						<img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
						<img className="pt-img4 animate-wave" src={animateWave} alt="" />
					</section>
				</Fade>
			</>
		);
	}
}

export default LatestNewsSection;

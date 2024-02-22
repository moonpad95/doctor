import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/mediktremoved.png';
// import logoWhite from '../../images/logo-white.png';

const Header = () => {

	const iconStyle = {
		i: {
			fontSize: "14px",
		},
		menuFilter: {
			backdropFilter: "blur(15px)",
			backgroundColor: "#f0f0f085"

		}
	}

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const [isSearchFormOpen, setIsSearchBtn] = useState(false);
	// // const quikSearchBtn = () => setIsSearchBtn(!isSearchFormOpen);
	// const quikSearchClose = () => setIsSearchBtn(false);
	const [activeItem, setActiveItem] = useState(null);
	const [isMobileView, setIsMobileView] = useState(false);

	const toggleSubmenu = (item) => {
		setActiveItem(item === activeItem ? null : item);
	};

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const handleMenuLinkClick = () => {
		if (window.innerWidth <= 991) {
			setIsMenuOpen(false);
		}
	};

	// const handleContactBtnClick = () => {
	// 	setIsMenuOpen(false);
	// 	// Implement the logic to toggle the contact sidebar here.
	// };

	const handleMenuCloseClick = () => {
		setIsMenuOpen(false);
	};



	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth >= 700);
		};

		// Check the screen size on initial render and whenever the window is resized
		handleResize();

		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const menuItems = [
		{
			id: 'INICIO',
			icon: <i class="fas fa-home ml-2 text-primary" style={iconStyle.i}></i>,
			name: 'Inicio',
			linkName: '',
		},
		{
			id: 'NOSOTROS',
			name: 'Nosotros',
			linkName: '#',

			subItems: [
				{
					id: 'aboutus',
					displayName: 'Nosotros',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						group
					</span>,
					linkName: 'sobre-nosotros'
				},
				// {
				// 	id: 'team',
				// 	displayName: 'Nuestro Equipo',
				// 	icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
				// 		groups_3
				// 	</span>,
				// 	linkName: 'nuestro-equipo'
				// },
				{
					id: 'faq',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						contact_support
					</span>,
					displayName: "Preguntas Frecuentes",
					linkName: 'preguntas'
				},
				// {
				// 	id: 'booking',
				// 	displayName: 'Booking',
				// 	linkName: 'booking'
				// },
				// {
				// 	id: 'error',
				// 	displayName: 'Error 404',
				// 	linkName: 'error-404'
				// },
				// {
				// 	id: 'formLogin',
				// 	displayName: 'Login / Register',
				// 	linkName: 'form-login'
				// },
			]
		},

		{
			id: 'SERVICIO',
			name: 'Servicios Especializados',
			linkName: '',
			subItems: [
				{
					id: 'SERVICIOS',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						medical_services
					</span>,
					displayName: 'Todos los Servicios',
					linkName: 'servicios',

				},
				{
					id: 'dental',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						dentistry
					</span>,
					displayName: 'Medi-KT Dental',
					linkName: 'dental'
				},
				{
					id: 'spa',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						spa
					</span>,
					displayName: 'MediSpa',
					linkName: 'servicio-spa'
				},
				{
					id: 'access',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						accessible
					</span>,
					displayName: 'Rehabilitación',
					linkName: 'rehabilitacion'
				},

				{
					id: 'psico',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						psychology
					</span>,
					displayName: 'Psicología',
					linkName: 'psicologia'
				},
				{
					id: 'nutri',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						nutrition
					</span>,
					displayName: 'Nutrición',
					linkName: 'nutricion'
				},

				{
					id: 'infra',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						infrared
					</span>,
					displayName: 'Rayos X',
					linkName: 'rayos-x'
				},
				{
					id: 'lab',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						biotech
					</span>,
					displayName: 'Laboratorio',
					linkName: 'laboratorio'
				},
				{
					id: 'pharma',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						local_pharmacy
					</span>,
					displayName: 'Farmacia',
					linkName: 'farmacia'
				},
				{
					id: 'alt',
					icon: <span class="material-symbols-outlined" style={{ verticalAlign: "-4px" }}>
						psychology_alt
					</span>,
					displayName: 'Terapia del lenguaje',
					linkName: 'terapia-comunicacion'
				},

			]
		},
		// {
		// 	id: 'REDES',
		// 	name: 'REDES',
		// 	linkName: '#',

		// 	subItems: [
		// 		{
		// 			id: 'blogGrid',
		// 			displayName: 'Aliados',
		// 			linkName: 'blog-grid'
		// 		},
		// 		{
		// 			id: 'blogDetails',
		// 			displayName: 'Redes Sociales',
		// 			linkName: 'blog-details'
		// 		},
		// 	]
		// },
		// {
		// 	id: 'INFORMACIÓN',
		// 	name: 'Novedades',
		// 	linkName: 'CONTACTANOS'
		// }

		{
			id: 'contacto',
			icon: <i class="fas fa-phone ml-2 text-primary" style={iconStyle.i}></i>,
			name: 'Contactanos',
			linkName: 'contacto',

		},
	];

	return (
		<header className="header rs-nav">
			<Sticky enabled={true} className="sticky-header navbar-expand-lg">
				<div className="menu-bar clearfix shadow" style={iconStyle.menuFilter}>
					<div className="container-fluid clearfix">
						<div className="menu-logo logo-dark">
							<Link to="/"><img src={logo} alt="" className='w-50' /></Link>
						</div>

						<button className={`navbar-toggler collapsed menuicon justify-content-end ${isMenuOpen ? 'active' : ''}`}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#menuDropdown"
							aria-controls="menuDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
							onClick={toggleMenu}>
							<span></span>
							<span></span>
							<span></span>
						</button>

						<div className={`menu-links navbar-collapse collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="menuDropdown">
							<div className="menu-logo">
								<Link to="/"><img src={logo} alt="" /></Link>
							</div>

							<ul className="nav navbar">
								{menuItems.map((item) => (
									<li
										key={item.id}
										className={`${activeItem === item.id ? 'open' : ''}`}
										onClick={() => toggleSubmenu(item.id)}
									>
										{item.subItems ? (
											<Link to="#">
												{item.name}
												<i class="fas fa-caret-right ml-2 text-primary" style={iconStyle.i}></i>
											</Link>

										) : (
											<Link to={`/${item.linkName}`} onClick={handleMenuLinkClick}>
												{item.name}
												{item.icon}
											</Link>
										)}

										{(isMobileView || activeItem === item.id) && item.subItems && (
											<ul className="sub-menu">
												{item.subItems.map((subItem, index) => (
													<li key={subItem.id}><Link to={`/${subItem.linkName}`} onClick={handleMenuLinkClick}> {subItem.icon}{"   "}<span>{subItem.displayName}</span></Link></li>
												))}

											</ul>
										)}
									</li>
								))}

							</ul>
							<div className='m-3'>
								<li>
									<a href="https://wa.me/6181098988" className='btn btn-xs btn-outline-primary' style={{ margin: "2px" }} target='_blank' rel="noreferrer"><i class="fab fa-whatsapp"></i></a>
									<a className='btn btn-xs btn-outline-primary' style={{ margin: "2px" }} href="https://www.facebook.com/people/Corporativo-Medi-kt/100009183422712/" target='_blank' rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
									<a className='btn btn-xs btn-outline-primary' style={{ margin: "2px" }} href="https://www.instagram.com/drjesusavila777/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target='_blank' rel="noreferrer"><i class="fab fa-instagram"></i></a>
								</li>
							</div>

							{/* <ul className="social-media">
								<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-whatsapp"></i></a></li>
							</ul> */}

							<div className="menu-close" onClick={handleMenuCloseClick}>
								<i className="ti-close"></i>
							</div>

						</div>
					</div>
				</div>
			</Sticky>

			{/* <div className={`nav-search-bar ${isSearchFormOpen ? 'show' : ''}`}>
				<form>
					<input type="text" className="form-control" placeholder="Type to search"/>
					<span><i className="ti-search"></i></span>
				</form>
				<span id="searchRemove" onClick={quikSearchClose}><i className="ti-close"></i></span>
			</div>
			 */}
		</header>

	);
}

export default Header;
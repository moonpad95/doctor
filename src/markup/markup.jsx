import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// Layout
import Header from "./layout/header";
import Footer from "./layout/footer";

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
// import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/dental';
import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
// import BlogDetails from './pages/blog-details';
import Error from './pages/error-404';
import Dental from './pages/servicios/dental';
import SpaService from './pages/servicios/spa';
import TerapiaComunicacion from './pages/servicios/terapiaLenguaje';
import Rehabilitacion from './pages/servicios/rehabilitación';
import ComingSoon from './pages/soonPage';
import Psicologia from './pages/servicios/psicologia';
import Nutricional from './pages/servicios/nutricion';
import Xray from './pages/servicios/xray';
import Laboratorio from './pages/servicios/laboratorio';
import Farmacia from './pages/servicios/farmacia';

class Markup extends Component {
	render() {
		return (
			<>
				{/* {<BrowserRouter basename={'/react/'}> */}
				<BrowserRouter>
					<Routes>
						<Route element={<ThemeLayout />}>
							<Route path='/' element={<Index />} />
							<Route path='/sobre-nosotros' element={<AboutUs />} />
							{/* <Route path='/nuestro-equipo' element={<Team />} /> */}
							<Route path='/servicios' element={<Services />} />
							<Route path='/servicio-dental' element={<ServiceDetail />} />
							<Route path='/servicio-spa' element={<SpaService />} />
							<Route path='/preguntas' element={<Faq />} />
							<Route path='/contacto' element={<ContactUs />} />
							<Route path='/blog' element={<ComingSoon />} />
							<Route path='/terapia-comunicacion' element={<TerapiaComunicacion />} />
							<Route path='/rehabilitacion' element={<Rehabilitacion />} />
							<Route path='/dental' element={<Dental />} />
							<Route path='/psicologia' element={<Psicologia />} />
							<Route path='/nutricion' element={<Nutricional />} />
							<Route path='/rayos-x' element={<Xray />} />
							<Route path='/laboratorio' element={<Laboratorio />} />
							<Route path='/farmacia' element={<Farmacia />} />
							{/* <Route path='/blog-details' element={<BlogDetails />} /> */}
							<Route path="*" element={<Error />} />
						</Route>
						<Route path="/form-login" element={<FormLogin />} />
						<Route path="/form-register" element={<FormRegister />} />
						<Route path='/form-forget-password' element={<FormForgetPassword />} />

					</Routes>

					<PageScrollTop />

				</BrowserRouter>

				<BackToTop />

			</>
		);
	}
}
function ThemeLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
export default Markup;
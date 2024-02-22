import React from 'react';

// Elements
import MainBannerSection from "../elements/main-banner";
// import AboutSection from "../elements/about";
// import WorkSection from "../elements/work";
import AppointmentSection from "../elements/appointment";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";
import LatestNewsSection from "../elements/latest-news-slider";
import Carrusel from '../elements/slider';

function Index(){
	
	return(
		<>
			
			<Carrusel />

			<MainBannerSection />
			
			<LatestNewsSection />
			
			{/* <AboutSection /> */}

			{/* <WorkSection /> */}
			
			<AppointmentSection />

			<TestimonialSection />
			
			<ServicesSliderSection />
						
			
		</>
		
	);
}

export default Index;
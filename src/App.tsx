import DrawerAppBar from './components/header/Header';
import Cards from './components/Cards/Cards';
import Stepper from './components/Stepper/Stepper';
import Map from './components/Map/Map';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './App.scss';

import MavzoleyImageOne from './assets/images/mavzoley-khodzhi-akhmeda-yasavi_82.jpg';
import MavzoleyImageTwo from './assets/images/mavzoley-khodzhi-akhmeda-yasavi_81.jpg';
import MavzoleyImageThree from './assets/images/mavzoley-khodzhi-akhmeda-yasavi_66.jpg';
import MavzoleyImageFour from './assets/images/mavzoley-khodzhi-akhmeda-yasavi_50.jpg';
import Video from './components/Video/Video';

function App() {
	return (
		<>
			<DrawerAppBar />
			<main className="main">
				{/* Басты бет */}
				<section id="Басты бет" className="slider-section">
					<h1 className="slider-title">Түркістан қаласының археологиялық ескерткіштері</h1>
					<Swiper
						pagination={{ dynamicBullets: true }}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
						modules={[Pagination, Autoplay]}
						className="mySwiper"
						loop={true}
					>
						<SwiperSlide>
							<img src={MavzoleyImageOne} alt="Mavzoley 1" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={MavzoleyImageTwo} alt="Mavzoley 2" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={MavzoleyImageThree} alt="Mavzoley 3" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={MavzoleyImageFour} alt="Mavzoley 4" />
						</SwiperSlide>
					</Swiper>
				</section>
				<section className="section-description"> 
					<div className="container">
						<h2 className="section-description__title">Түркістанға барудың себептер</h2>
						<Stepper />
					</div>
				</section>
				{/* Ескерткіштер */}
				<section id="Ескерткіштер" className="section-history">
					<div className="container">
						<h2 className="section-history__title">Түркістан қаласындағы маңызды тарихи-мәдени ескерткіштер</h2>
						<Cards />
					</div>
				</section>
				{/* Тарихы терең Түркістан */}
				<section id="Тарихы терең Түркістан" className="section-description">
					<div className="container">
						<h2 className="section-description__title">Тарихы терең Түркістан</h2>
						<Video />
					</div>
				</section>
				{/* Карта */}
				<section id="Карта" className="section-last">
					<div className="container">
						<h2 className="section-last__title">Тарихи-мәдени ескерткіштерің орналасқан жері</h2>
						<Map />
					</div>
				</section>
			</main >
		</>
	);
}

export default App;

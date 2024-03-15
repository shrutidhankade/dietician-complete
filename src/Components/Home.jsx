import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import 'react-circular-progressbar/dist/styles.css';
import Layout from '../Layout';
import { CircularProgressbar } from 'react-circular-progressbar'
// import Layout from '../../Layout';


export default function Home() {

	const images = [
		'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://plus.unsplash.com/premium_photo-1681826366602-439e04183042?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	];

	const [currentSlide, setCurrentSlide] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? images.length - 1 : prevSlide - 1
		);
	};

	useEffect(() => {
		let interval;

		if (!isPaused) {
			interval = setInterval(() => {
				nextSlide();
			}, 5000); // Change the interval time (in milliseconds) as needed
		}

		return () => clearInterval(interval);
	}, [isPaused]);

	const handlePause = () => {
		setIsPaused(true);
	};

	const handlePlay = () => {
		setIsPaused(false);
	};


	const [customerCountdown, setCustomerCountdown] = useState(0);
	const maxCustomerCountdown = 560;

	useEffect(() => {
		const interval = setInterval(() => {
			setCustomerCountdown((prevCountdown) => Math.min(prevCountdown + 5, maxCustomerCountdown));
		}, 100);

		return () => clearInterval(interval);
	}, []);



	const [experienceCountdown, setExperienceCountdown] = useState(0);
	const maxExperienceCountdown = 14  // 14 years in seconds

	useEffect(() => {
		const interval = setInterval(() => {
			setExperienceCountdown((prevCountdown) =>
				Math.min(prevCountdown + 1, maxExperienceCountdown)
			);
		}, 775); // One second interval

		return () => clearInterval(interval);
	}, []);

	const yearsExperience = Math.floor(experienceCountdown);

	return (
		<Layout>
			<div className="mx-auto w-screen ">

				<aside className="relative w-screen overflow-hidden text-black rounded-lg sm:px-16 sm:py-6">
					<div className="relative w-full  lg:w-[90vw] flex items-center justify-between max-sm:flex-col max-sm:p-0 z-10 max-w-screen-xl pb-20 mx-auto ">
						<div className="left  max-sm:w-full w-1/2 lg:w-[55vw] sm:mt-1 mt-80 max-sm:mt-10 text-center flex max-sm:flex-col max-sm:items-center flex-col">
							<p className="text-6xl max-sm:text-4xl max-sm:text-center font-bold text-left ">
								Trust me, your <br /> diet doesn’t <br /> have to be boring.
							</p>
							{/* font-extralight */}
							<p className="text-xl text-left py-6 pr-40 max-sm:px-10 max-sm:text-base max-sm:text-center">
								A healthy diet provides the body with essential nutrition: fluid,
								macronutrients, micronutrients, and adequate calories.
							</p>


							<a
								className="py-3"
								target="_blank"
								href="https://wa.me/+917805806867"
							>
								<button className="px-12 max-sm:px-10 py-3 text-white flex items-center gap-4 rounded-full hover:font-medium cursor-pointer hover:translate-y-1	hover:transition-all hover:ease-linear hover:duration-150 transition-all ease-linear duration-150 translate-y-1 transition-all ease-linear duration-150 " style={{ backgroundColor: "rgb(3 105 161)" }}>
									Appointment Now

								</button>
							</a>
						</div>

						<div className=" slider  w-[60%]    h-[65vh] max-sm:w-full max-sm:h-[37vh]  max-sm:p-6 max-sm:mb-3 mt-5">
							<div className="w-full h-full  max-sm:w-full max-sm:h-full max-sm:ob  rounded-[2vw] object-cover max-w-xl mx-auto relative overflow-hidden	">
								<div className="w-full h-full rounded-[2vw]  sm:h-80">
									{images.map((image, index) => (
										<div
											key={index}
											className={`absolute w-full h-full  ${index === currentSlide ? 'opacity-100' : 'opacity-0'
												} transition-opacity duration-0 ease-in-out`}
										>
											<img
												src={image}
												alt={`Slide ${index + 1}`}
												className="w-full h-full object-cover"
											/>

										</div>
									))}
								</div>
								<div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full flex justify-between items-center z-10">
									<button
										onClick={prevSlide}
										className="text-black/80 text-4xl text-black hover:text-black transition duration-0 ease-in-out"
									>
										<HiArrowCircleLeft />
									</button>


									<button
										onClick={nextSlide}
										className="text-black/80  text-4xl text-black hover:text-black transition duration-0 ease-in-out"
									>
										<HiArrowCircleRight />
									</button>
								</div>
							</div>
						</div>
					</div>
				</aside>













				<div className="circulardiv flex items-center justify-center  w-full   ">

					<div className="w-[89vw] flex items-center lg:w-[83vw] justify-around  place-items-center bg-slate-200 rounded-2xl -ml-6 max-sm:w-[85vw] max-sm:flex-col max-sm:items-center max-sm:h-fit max-sm:m-0 ">


						<div className="p-6 text-center rounded-md w-[15vw] max-sm:w-[40vw]">
							<CircularProgressbar
								value={(customerCountdown / maxCustomerCountdown) * 100}
								text={customerCountdown.toString()}
								styles={{
									path: {
										stroke: '#4CAF50',
									},
									trail: {
										stroke: '#f2f2f2',
									},
									text: {
										fill: '#4CAF50',
										fontSize: '18px',
										fontWeight: 'bold',
									},
								}}
							/>
							<p className="text-lg mt-2 font-semibold">SATISFIED CUSTOMER</p>
						</div>

						<div className="p-6 text-center rounded-md w-[15vw] max-sm:w-[40vw]">
							<CircularProgressbar
								value={(experienceCountdown / maxExperienceCountdown) * 100}
								text={`${yearsExperience} ${yearsExperience === 1 ? 'Year' : 'Years'}`}
								styles={{
									path: {
										stroke: '#4CAF50',
									},
									trail: {
										stroke: '#f2f2f2',
									},
									text: {
										fill: '#4CAF50',
										fontSize: '18px',
										fontWeight: 'bold',
									},
								}}
							/>
							<p className="text-lg font-semibold mt-2">YEARS EXPERIENCE</p>
						</div>
						<div className="p-6 text-center rounded-md w-[15vw] max-sm:w-[40vw]">
							<CircularProgressbar
								value={(customerCountdown / maxCustomerCountdown) * 100}
								text={customerCountdown.toString()}
								styles={{
									path: {
										stroke: '#4CAF50',
									},
									trail: {
										stroke: '#f2f2f2',
									},
									text: {
										fill: '#4CAF50',
										fontSize: '18px',
										fontWeight: 'bold',
									},
								}}
							/>
							<p className="text-lg font-semibold mt-2">Nutritional Expertise</p>
						</div>


						<div className="p-6 text-center rounded-md w-[15vw] max-sm:w-[40vw]">
							<CircularProgressbar
								value={(customerCountdown / maxCustomerCountdown) * 100}
								text={customerCountdown.toString()}
								styles={{
									path: {
										stroke: '#4CAF50',
									},
									trail: {
										stroke: '#f2f2f2',
									},
									text: {
										fill: '#4CAF50',
										fontSize: '18px',
										fontWeight: 'bold',
									},
								}}
							/>
							<p className="text-lg font-semibold mt-2">Analytical Thinking</p>
						</div>

					</div>



				</div>




				<div className="aboutus lg:w-[82.5vw] lg:ml-[8vw]   max-sm:h-fit max-sm:flex-col max-sm:items-center  flex text-2xl sm:text-5xl py-4 lg:mt-10 mt-8 sm:px-16 lg:flex lg:gap-16 ">
					<div className="left w-full lg:w-1/2 lg:h-[80vh] lg:mt-10  max-sm:w-full max-sm:-mt-10 max-sm:px-6 max-sm:py-8 flex items-center justify-center ">
						<div className="w-[30vw] lg:h-[100vh] max-sm:w-full h-full max-sm:h-[100vh] overflow-hidden rounded-lg ">
							<img
								className="w-full max-sm:w-full h-[70vh] lg:h-[84vh]  lg:mt-10 object-cover"
								src="https://babashivabramhiji.inextets.online/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-06-at-3.18.05-PM.jpeg"
								alt=""
							/>
						</div>
					</div>
					<div className="right  max-sm:w-full max-sm:items-center max-sm:px-6 max-sm:py-2 max-sm:leading-7 text-lg  flex flex-col max-sm:flex-col lg:gap-6 max-sm:gap-5 items-start justify-center  px-2 ml-12 max-sm:m-0 max-sm:-mt-48  ">
						<h1 className="text-4xl font-bold  ">About Us</h1>
						<p className='text-[17px] max-sm:text-center'>
							Welcome to{' '}
							<span className="font-semibold"> Mr. Atul Tiwari Ji </span>
							Nutrition!
						</p>
						<p className='text-[15px] tracking-wide max-sm:text-left'>
							We are passionate about empowering you to achieve your health and
							wellness goals through personalized nutrition guidance. With a focus
							on evidence-based practices and a compassionate approach, we are
							here to support you on your journey to optimal health.
						</p>
						<p className='text-[15px] tracking-wide' >
							Our team of experienced dietitians understands that every individual
							is unique, which is why we tailor our recommendations to suit your
							specific needs and lifestyle. Whether you’re looking to manage a
							medical condition, improve athletic performance, or simply adopt
							healthier eating habits, we’re here to provide expert guidance and
							support every step of the way.
						</p>
						<p className='text-[15px] tracking-wide'>
							At <span className="font-semibold"> Mr. Atul Tiwari Ji </span>
							Nutrition, we believe that food is medicine, and we’re committed to
							helping you harness the power of nutrition to live your best life.
							Get started on your path to wellness today!
						</p>
						<a target="_blank" href="https://wa.me/+917805806867">
							<button className="px-12 py-1 max-sm:py-3 max-sm:px-10 text-white flex items-center gap-4 rounded-full hover:font-medium max-sm:mt-5 cursor-pointer hover:translate-y- hover:transition-all hover:ease-linear hover:duration-150  transition-all ease-linear duration-150 transition-all ease-linear duration-150 translate-y-" style={{ backgroundColor: "rgb(3 105 161)" }}>

								<p className="text-3xl max-sm:text-xl">✆</p> Contact Now
							</button>
						</a>
					</div>
				</div>


				<div id="services"
					className="section relative max-sm:py-16 lg:w-[100vw]  pt-2 pb-8 md:pt-16 md:pb-0 bg-white  "
				>
					<div className="container xl:max-w-6xl mx-auto px-4  max-sm:-mt-14">
						{/* Heading start */}
						<header className="text-center mx-auto mb-12 lg:px-20">
							<h2 className=" leading-normal mb-2  text-4xl font-bold text-black font-medium">
								What We Do
							</h2>
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 100 60"
								style={{ margin: "0 auto", height: 35 }}
								xmlSpace="preserve"
							>
								<circle
									cx="50.1"
									cy="30.4"
									r={5}
									className="stroke-primary"
									style={{ fill: "transparent", strokeWidth: 2, strokeMiterlimit: 10 }}
								/>
								<line
									x1="55.1"
									y1="30.4"
									x2={100}
									y2="30.4"
									className="stroke-primary"
									style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
								/>
								<line
									x1="45.1"
									y1="30.4"
									x2={0}
									y2="30.4"
									className="stroke-primary"
									style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
								/>
							</svg>
							<p className="text-black   text-xl mx-auto -mt-8 -pb-4">
								"Transform Your Health: Comprehensive Nutritional Services for Your Unique Journey
							</p>
						</header>
						{/* End heading */}
						{/* row */}
						<div className="flex flex-wrap flex-row -mx-4 text-center">
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								style={{
									visibility: "visible",
									animationDuration: "1s",
									animationName: "fadeInUp"
								}}
							>



								{/* service block */}
								<div className="py-5  px-5 mb-12 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer  shadow-md  rounded-lg hover:shadow-md hover:shadow-slate-300 bg-gradient-to-r from-[#2BE65A] to-[#7BDE85]"  >
									{/* style={{backgroundColor: "rgb(3 105 161)"}} */}

									<div className="inline-block text-gray-900 mb-4 ">
										{/* icon */}

										<img src="https://thumbs.dreamstime.com/b/weight-lifter-silhouette-vector-illustration-weightlifting-black-white-background-editable-eps-file-available-59595049.jpg" alt="" className='h-[3rem] w-[3rem] rounded-lg' />

									</div>
									<h3 className="text-xl font-bold  leading-normal mb-2 ">
										Weight Gain
									</h3>
									<p className=" text-left  ">
										Our tailored nutrition plans focus on healthy, sustainable weight gain strategies. With personalized meal plans, expert guidance, and ongoing support, we'll help you achieve your goals and transform your body with confidence.
									</p>
								</div>
								{/* end service block */}
							</div>
							<div
								className="flex-shrink px-4 max-w-full w-full lg:w-[] sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".1s"
								style={{
									visibility: "visible",
									animationDuration: "1s",
									animationDelay: "0.1s",
									animationName: "fadeInUp"
								}}
							>
								{/* service block */}
								<div className="py-5 px-5 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer shadow-md  rounded-lg hover:shadow-md hover:shadow-slate-300 bg-gradient-to-r from-[#2BE65A] to-[#7BDE85]" >

									<div className="inline-block text-gray-900 mb-4 bg-white rounded-lg ">
										{/* icon */}


										<img src="https://static.thenounproject.com/png/637323-200.png" alt="" className='h-[3rem] w-[3rem]  ' />
									</div>
									<h3 className="text-xl font-bold leading-normal mb-2 ">
										Weight Loss
									</h3>
									<p className=" text-left ">
										Our comprehensive approach combines personalized meal plans, expert guidance, and ongoing support to help you reach your goals effectively and sustainably. Transform your health and achieve lasting results with us.
									</p>
								</div>
								{/* end service block */}
							</div>
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".3s"
								style={{
									visibility: "visible",
									animationDuration: "1s",
									animationDelay: "0.3s",
									animationName: "fadeInUp"
								}}
							>
								{/* service block */}
								<div className="py-5 px-5 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer shadow-md rounded-lg hover:shadow-md hover:shadow-slate-300 bg-gradient-to-r from-[#2BE65A] to-[#7BDE85] " >
									<div className="inline-block text-gray-900 mb-4" >
										{/* icon */}


										<img src="https://img.freepik.com/premium-vector/diabetic-diet-glyph-solid-black-illustration_120816-7915.jpg?w=2000" alt="" className='h-[3rem] w-[3rem] rounded-lg  ' />

									</div>
									<h3 className="text-xl   leading-normal mb-2 font-bold ">
										Diabetic Diet
									</h3>
									<p className="text-left ">
										Our specialized diabetic diet plans are designed to stabilize blood sugar levels, promote overall health, and enhance quality of life. With personalized guidance and ongoing support, we'll empower you to take control of your health journey.
									</p>
								</div>
								{/* end service block */}
							</div>
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								style={{
									visibility: "visible",
									animationDuration: "1s",
									animationName: "fadeInUp"
								}}
							>
								{/* service block */}
								<div className="py-5 px-5 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer shadow-md rounded-lg hover:shadow-md hover:shadow-slate-300 bg-gradient-to-r from-[#2BE65A] to-[#7BDE85] " >

									<div className="inline-block text-gray-900 mb-4 ">
										{/* icon */}
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhk_zGmtxTP5w4BIyjMR-YktQqieACfrPxCaJUtEtuXvDBd0Kf26iHwEN2Lv3oNgPxHcs&usqp=CAU" alt="" className='h-[3rem] w-[3rem] rounded-lg  ' />

									</div>
									<h3 className="text-xl  leading-normal mb-2 font-bold">
										Gym Diet
									</h3>
									<p className=" text-left ">
										Maximize Your Gym Performance with Our  tailored to your fitness goals and activity levels, our expertly crafted gym diets optimize energy, muscle growth, and recovery. Fuel your workouts and achieve peak performance with our personalized guidance and support .
									</p>
								</div>
								{/* end service block */}
							</div>
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".1s"
								style={{
									visibility: "visible",
									animationDuration: "1s",
									animationDelay: "0.1s",
									animationName: "fadeInUp"
								}}
							>
								{/* service block */}
								<div className="py-5 px-5 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer shadow-md  rounded-lg hover:shadow-md hover:shadow-slate-300 bg-gradient-to-r from-[#2BE65A] to-[#95f59f] "  >
									<div className="inline-block text-gray-900 mb-4 " >
										{/* icon */}

										<img src="https://static.thenounproject.com/png/2758515-200.png" alt="" className='h-[3rem] w-[3rem] bg-white rounded-lg ' />
									</div>
									<h3 className="text-xl leading-normal mb-2 font-bold  ">
										1 Inch Loss
									</h3>
									<p className=" text-left ">
										Transform Your Body, One Inch at a Time. Our targeted diet plans are designed to help you shed inches and achieve your body goals. With personalized nutrition guidance and support, you'll see visible results and feel confident in your journey to a slimmer, healthier you.
									</p>
								</div>
								{/* end service block */}
							</div>
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".3s"
								style={{
									visibility: "visible",
									animationDuration: "1s",
									animationDelay: "0.3s",
									animationName: "fadeInUp"
								}}
							>
								{/* service block */}
								<div className="py-5 px-5 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer shadow-md  rounded-lg hover:shadow-md hover:shadow-slate-300 bg-gradient-to-r from-[#2BE65A] to-[#7BDE85]"  >

									<div className="inline-block text-gray-900 mb-4">
										{/* icon */}

										<img src="https://static.thenounproject.com/png/3342053-200.png" alt="" className='h-[3rem] w-[3rem] bg-white rounded-lg  ' />
									</div>
									<h3 className="text-xl  leading-normal mb-2 font-bold ">
										Virtual Consultations
									</h3>
									<p className=" text-left ">
										Experience Convenient and Personalized Nutrition Guidance from Anywhere. Our virtual consultations offer one-on-one support, tailored meal plans, and expert advice tailored to your unique needs and lifestyle. Start your journey to better health today, no matter where you are.
									</p>
								</div>
								{/* end service block */}
							</div>
						</div>
						{/* end row */}
					</div>
				</div>







			</div>
		</Layout>





	);
}


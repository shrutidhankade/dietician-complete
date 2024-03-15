import React from 'react';
import Layout from '../Layout';


export default function Contact() {

	return (
		<Layout>
			<div className="relative flex w-full lg:h-auto  max-sm:mb-44 lg:w-[85vw] lg:ml-[4vw]  md:space-y-0  sm:space-y-0 max-sm:w-[100%] max-sm:h-full items-top justify-center  bg-white sm:items-center sm:pt-0  ">
				<div className="max-w-6xl mx-auto w-[180vw] lg:w-full max-sm:h-[200vh]  max-sm:mt-0  lg:px-8">
					<div>
						<h1 className='text-3xl ml-24 md:leading-[4vw]  max-sm:text-2xl max-sm:w-[100vw] max-sm:pl-20 max-sm:ml-28  text-center pt-10 capitalize font-bold leading-[3vw]'>
							Want to Learn More About Our Plans? <br /> Get in Touch.</h1>
						<div className="grid lg:gap-20 md:gap-0  mb-14 max-sm:ml-48  w-full mt-14 grid-cols-1 md:grid-cols-2  ">
							<div className="p-11   lg:w-[39vw]   bg-gray-100 sm:rounded-lg  max-sm:w-full max-sm:-ml-11 ">
								<h1 className="text-4xl ml-10 max-sm:-ml-1 sm:text-4xl text-gray-800 font-extrabold tracking-tight   ">
									Get in touch:
								</h1>
								<p className="text-normal ml-10 max-sm:-ml-1 text-lg sm:text-xl font-medium text-gray-600 mt-4">
									Fill in the form to start a conversation
								</p>

								<div className="flex ml-10 items-center mt-8 text-gray-600 max-sm:-ml-1">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										viewBox="0 0 24 24"
										className="w-8 h-8 text-gray-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<div className="ml-4 text-md tracking-wide font-semibold w-40">
										Acme Inc, Street, State, Postal Code
									</div>
								</div>

								<div className="flex ml-10 items-center mt-8 text-gray-600 max-sm:-ml-1">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										viewBox="0 0 24 24"
										className="w-8 h-8 text-gray-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<div className="ml-4 text-md tracking-wide font-semibold w-40">
										+44 1234567890
									</div>
								</div>

								<div className="flex ml-10  items-center mt-8 text-gray-600 max-sm:-ml-1">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										viewBox="0 0 24 24"
										className="w-8 h-8 text-gray-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<div className="ml-4 text-md tracking-wide font-semibold w-40">
										info@acme.org
									</div>
								</div>
							</div>

							<form className="p-6 border-2  max-sm:w-[52%] max-sm:-ml-[4.5vmax] rounded-[8px] ml-8 w-[41vw] lg:w-[38vw]  flex flex-col  justify-center max-sm:mt-9  ">
								<div className="flex flex-col ">
									<label htmlFor="name" className="hidden">
										Full Name
									</label>
									<input
										type="name"
										name="name"
										id="name"
										placeholder="Full Name"
										className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
									/>
								</div>

								<div className="flex flex-col mt-2">
									<label htmlFor="email" className="hidden">
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Email"
										className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
									/>
								</div>

								<div className="flex flex-col mt-2">
									<label htmlFor="tel" className="hidden">
										Number
									</label>
									<input
										type="tel"
										name="tel"
										id="tel"
										placeholder="Telephone Number"
										className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
									/>
								</div>
								<textarea className="w-100 mt-5 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" name="enter text" placeholder='enter text' cols="10" rows="2"></textarea>


								<button
									type="submit"
									className="md:w-32  text-white font-bold py-3 px-6 rounded-lg mt-5 transition ease-in-out duration-300" style={{ backgroundColor: "rgb(3 105 161)" }}
								>
									Submit
								</button>
							</form>
						</div>
					</div>

					<div className='map max-sm:-mt-4 lg:w-[50vw]'><iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14654.06221321371!2d79.80552024429957!3d23.333329416231855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b94d1daa2077%3A0xe6463b4949c9b68b!2sKarondi%2C%20Madhya%20Pradesh%20483113!5e0!3m2!1sen!2sin!4v1709634728112!5m2!1sen!2sin"
						width={1200}
						height={330}
						style={{ border: 0, borderRadius: "0.7vmax" }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/></div>


				</div>


			</div>
		</Layout>
	);
}


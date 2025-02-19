import React from 'react'
import AboutMe from '../assets/images/aboutMe.png'

const AboutMeSection: React.FC = () => {
	return (
		<section
			id='about'
			className='w-full bg-black text-white py-12 md:px-6 lg:p-24 flex flex-col lg:flex-row lg:justify-center items-center'
		>
			{/* Text Content */}
			<div className='lg:w-1/2 space-y-6 mb-12'>
				<h2
					className='text-4xl font-semibold leading-snug'
					data-aos='fade-up'
					data-aos-duration='500'
				>
					Turning Ideas into{' '}
					<span className='text-lime-500'>Stunning Web Experiences</span>
				</h2>
				<p className='text-gray-400' data-aos='fade-up' data-aos-duration='500'>
					Hello! 👋 I'm Ahmad, a passionate Front-End Developer with a keen eye
					for detail and a love for creating stunning, user-friendly web
					experiences. I specialize in turning ideas into functional, visually
					appealing interfaces that enhance user engagement and satisfaction.
				</p>
				<p
					className='text-gray-400 mt-5'
					data-aos='fade-up'
					data-aos-duration='500'
				>
					With expertise in HTML, CSS, JavaScript, and modern
					libraries/frameworks like React and Vue.js, I thrive on building
					responsive and accessible websites that work seamlessly across
					devices. I’m skilled in transforming complex concepts into elegant
					designs, collaborating closely with designers and back-end developers
					to deliver polished products.
				</p>

				{/* Services List */}
				{/* <ul className='grid grid-cols-2 gap-y-3 gap-x-6 text-lg'>
					<li
						className='flex items-center text-lime-500'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						<FaCheck className='mr-2' /> Branding & Design
					</li>
					<li
						className='flex items-center text-lime-500'
						data-aos='fade-up'
						data-aos-duration='1010'
					>
						<FaCheck className='mr-2' /> E-ccomerece Development
					</li>
					<li
						className='flex items-center text-lime-500'
						data-aos='fade-up'
						data-aos-duration='1020'
					>
						<FaCheck className='mr-2' /> Web Development
					</li>
					<li
						className='flex items-center text-lime-500'
						data-aos='fade-up'
						data-aos-duration='1030'
					>
						<FaCheck className='mr-2' /> Product Design
					</li>
				</ul> */}

				{/* <button
					data-aos='fade-up'
					data-aos-duration='500'
					className='mt-6 px-6 py-3 rounded-full bg-lime-500 text-black font-semibold flex items-center transition-transform transform hover:scale-105'
				>
					Learn More <FaArrowRight className='ml-2' />
				</button> */}
			</div>

			{/* Experience & Profile Cards */}
			<div className='lg:w-1/2 flex justify-center  relative'>
				<img
					src={AboutMe}
					data-aos='fade-left'
					data-aos-duration='1000'
					className='h-auto w-[500px]'
					alt=''
				/>
			</div>
		</section>
	)
}

export default AboutMeSection

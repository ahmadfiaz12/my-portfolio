import { motion } from 'framer-motion'
import smilingImage from '../assets/images/IT-Business-Benefits-Image.webp'
import './home.css'

const HeroSection = () => {
	const fadeUpVariant = (delay = 0) => ({
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.2,
				delay: delay,
			},
		},
	})

	return (
		<>
			<div id='home' className='flex h-[100%] text-white p-5 md:p-24 hero '>
				<div className='flex flex-col md:gap-10 mt-10 md:mt-0 w-full'>
					<div className='flex items-end gap-20'>
						<motion.div
							className='hello font-bold text-[40px] md:text-[190px]'
							initial='hidden'
							animate='visible'
							variants={fadeUpVariant()}
						>
							HELLO
						</motion.div>
						<motion.div
							className='im font-bold text-2xl md:text-7xl'
							style={{ color: '#yourPrimaryColor' }}
							initial='hidden'
							animate='visible'
							variants={fadeUpVariant(0.2)} // Apply a delay of 0.5 seconds
						>
							I&apos;M
						</motion.div>
					</div>
					<div className='flex w-full justify-end'>
						<motion.div
							className='name uppercase underline text-2xl md:text-8xl font-bold'
							initial='hidden'
							animate='visible'
							variants={fadeUpVariant(0.3)}
						>
							Ahmad Fiaz
						</motion.div>
					</div>
					<motion.div
						initial='hidden'
						animate='visible'
						variants={fadeUpVariant(0.4)} // Apply a delay of 0.5 seconds
					>
						<div className='blurry-bg-badge mt-10'>FRONT END DEVELOPER</div>
					</motion.div>
				</div>
			</div>
			<section className='bg-black text-white py-10 md:py-0 md:min-h-screen flex flex-col md:flex-row items-center justify-center md:px-10'>
				<div className='container-fluid md:container mx-auto p-2 md:p-10'>
					{/* Top Section */}
					<div className='md:mb-10'>
						<p
							className='text-gray-300 text-lg'
							data-aos='fade-up'
							data-aos-duration='500'
						>
							*About Me
						</p>
						<h1
							className='text-xl md:text-6xl font-bold'
							data-aos='fade-up'
							data-aos-duration='550'
						>
							I&apos;m a{' '}
							<span className='text-lime-500'>Front-End Developer</span> <br />
							crafting intuitive and high-performance <br />
							web experiences.
						</h1>
						<p
							className='text-gray-400 mt-4'
							data-aos='fade-up'
							data-aos-duration='600'
						>
							I specialize in building responsive, scalable, and user-centric
							interfaces, <br />
							merging design with cutting-edge technology to create seamless
							digital experiences. <br />
							With a strong focus on performance and accessibility, I transform
							complex ideas <br />
							into intuitive, visually compelling, and high-functioning web
							applications.
						</p>
					</div>
				</div>
				{/* Statistics Section */}
				<div className='flex justify-between items-center mt-16'></div>
			</section>
			<section className='bg-black text-white py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-56'>
				{/* Left Images Section */}
				<div className='relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-start space-y-6 lg:space-y-0 lg:space-x-6'>
					<img
						data-aos='fade-up'
						data-aos-duration='1000'
						src={smilingImage}
						alt='Person Smiling'
						className='w-48 h-48 lg:h-[500px] lg:w-full object-cover rounded-lg shadow-lg'
					/>
					<div className='absolute top-0 left-0 w-12 h-12 bg-lime-500 transform -translate-x-6 -translate-y-6'></div>
					<div className='absolute bottom-0 left-0 w-12 h-12 bg-lime-500 transform translate-x-6 translate-y-6'></div>
				</div>
				{/* Right Text Section */}
				<div className='mt-12 lg:mt-0 lg:ml-12 lg:max-w-md'>
					<h3
						className='text-xl font-light text-gray-400'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						What I Do
					</h3>
					<h2
						className='text-2xl md:text-4xl font-semibold text-white mt-2'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						Real{' '}
						<span className='text-lime-500'>Solutions for Web Development</span>{' '}
						Experience
					</h2>
					<p
						className='text-gray-400 mt-4'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						As a passionate Front End Developer, I craft beautiful, responsive,
						and intuitive user interfaces. My focus is on delivering
						high-quality, scalable web applications that provide seamless user
						experiences.
					</p>

					<ul className='mt-6 space-y-4'>
						<li
							className='flex items-center'
							data-aos='fade-up'
							data-aos-duration='1010'
						>
							<span className='w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center text-black font-semibold text-sm mr-4'>
								✓
							</span>
							2+ Years of Professional Front-End Development Experience
						</li>
						<li
							className='flex items-center'
							data-aos='fade-up'
							data-aos-duration='1020'
						>
							<span className='w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center text-black font-semibold text-sm mr-4'>
								✓
							</span>
							Expertise in HTML, CSS, JavaScript, and React
						</li>
						<li
							className='flex items-center'
							data-aos='fade-up'
							data-aos-duration='1030'
						>
							<span className='w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center text-black font-semibold text-sm mr-4'>
								✓
							</span>
							Focused on Mobile-First, Responsive Web Design
						</li>
					</ul>

					<button
						className='mt-8 py-3 px-6 bg-lime-500 text-black font-semibold rounded-full hover:bg-lime-600 transition-all'
						data-aos='fade-up'
						data-aos-duration='1040'
					>
						Learn More →
					</button>
				</div>
			</section>
		</>
	)
}

export default HeroSection

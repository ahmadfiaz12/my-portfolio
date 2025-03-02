import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import logo from '../assets/images/logo.png'
import Colors from '../contants/colors'

const Footer: React.FC = () => {
	return (
		<footer className=' text-white '>
			<div className='w-full bg-black p-5 md:px-24 py-10 md:py-0 h-full md:h-[440px] md:pb-10 xl:h-[300px] items-start xl:items-start xl:pt-14 flex flex-col xl:flex-row justify-between'>
				{/* Left Section */}
				<div className='flex flex-col'>
					<img
						src={logo}
						className='w-20 object-cover'
						alt=''
						data-aos='fade-up'
						data-aos-duration='1000'
					/>
					<p data-aos='fade-up' data-aos-duration='1000'>
						I Design Experiences, Not Just Interfaces.
					</p>
				</div>

				{/* Center Section - Menu */}

				<div className='quick-links md:mt-10 xl:mt-0'>
					<div
						className='title text-xl'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						Quick Links
					</div>
					<div className='flex flex-col mt-5'>
						<nav className='md:flex space-x-5 mb-20 md:mb-0 md:space-x-6'>
							<a
								href='#home'
								className='text-gray-300 hover:text-lime-400'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								Home
							</a>
							<a
								href='#about'
								className='text-gray-300 hover:text-lime-400'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								About
							</a>
							<a
								href='#services'
								className='text-gray-300 hover:text-lime-400'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								Service
							</a>
							<a
								href='#projects'
								className='text-gray-300 hover:text-lime-400'
								data-aos='fade-up'
								data-aos-duration='1010'
							>
								Projects
							</a>
						
						
							<a
								href='#contact'
								className='text-gray-300 hover:text-lime-400'
								data-aos='fade-up'
								data-aos-duration='1040'
							>
								Contact
							</a>
						</nav>
					</div>
				</div>
				{/*  */}
				<div className='address mt-10 xl:mt-0'>
					<div
						className='title text-xl'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						Address
					</div>
					<div className='flex flex-col gap-3 mt-5'>
						<p
							className='flex gap-2 cursor-pointer items-center text-gray-300'
							data-aos='fade-up'
							data-aos-duration='1010'
						>
							<span className='mr-2'>
								<FaLocationDot color={Colors.primaryColor} />
							</span>{' '}
							Multan, Pakistan
						</p>
						<p
							className='flex gap-2 cursor-pointer items-center text-gray-300'
							data-aos='fade-up'
							data-aos-duration='1020'
						>
							<span className='mr-2'>
								<MdEmail color={Colors.primaryColor} />
							</span>{' '}
							ahmadfiaz.9089@gmail.com
						</p>
						<p
							className='flex gap-2 cursor-pointer items-center text-gray-300'
							data-aos='fade-up'
							data-aos-duration='1030'
						>
							<span className='mr-2'>
								<FaPhoneAlt color={Colors.primaryColor} />
							</span>{' '}
							+92 306 6495894
						</p>
					</div>
				</div>
			</div>

			{/* Terms Section */}

			{/* Social Media & Copyright Section */}
			<div className='w-full py-5 text-center  bg-[#131313] px-2 md:px-24 flex flex-col md:flex-row gap-4 md:gap-0 justify-between text-gray-400'>
				<p>
					Copyright &copy;2025, Made by{' '}
					<a href='https://www.linkedin.com/in/ahmad-fiaz' target='_blank'>
						<span className='text-lime-400'>Ahmad</span>
					</a>
				</p>
				<div className='social space-x-6'>
					<a
						href='https://www.linkedin.com/in/ahmad-fiaz'
						className='border p-2 px-5 rounded-full transition ease-in-out hover:bg-white hover:text-black'
						target='_blank'
					>
						Linkdin
					</a>
					<a
						href='https://wa.me/+923066495894'
						className='border p-2 px-5 rounded-full transition ease-in-out hover:bg-white hover:text-black'
					>
						Whatsapp
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer

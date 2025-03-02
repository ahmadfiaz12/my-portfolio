import React from 'react'
import {
	FaFacebookF,
	FaLinkedinIn,
	FaPhoneAlt,
	FaWhatsapp,
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Colors from '../contants/colors'

const ContactSection: React.FC = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		alert('Form submitted successfully!')
	}

	return (
		<section id='contact' className='text-white p-5 md:p-10 md:py-24'>
			<div className='flex md:px-10 gap-14 flex-col xl:flex-row'>
				{/* Left Section - Contact Info */}
				<div className='space-y-6 w-full xl:w-[35%]'>
					<p
						className='text-gray-400 font-semibold'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						Get in Touch
					</p>
					<h2
						className='text-2xl md:text-5xl font-normal'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						Let's Talk For your{' '}
						<span className='text-lime-400'>Next Projects</span>
					</h2>
					<p
						className='text-gray-400'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						Ready to bring your ideas to life? Let's create something remarkable
						together. Reach out, and let's turn your vision into reality.
					</p>
					<div className='space-y-3'>
						<p
							className='flex gap-2 cursor-pointer items-center text-gray-300'
							data-aos='fade-up'
							data-aos-duration='1000'
						>
							<span className='mr-2'>
								<FaLocationDot color={Colors.primaryColor} />
							</span>{' '}
							<a
								target='_blank'
								href='https://maps.app.goo.gl/o4rF133rvaydZAuc6'
							>
								Multan, Pakistan
							</a>
						</p>
						<p
							className='flex gap-2 cursor-pointer items-center text-gray-300'
							data-aos='fade-up'
							data-aos-duration='1000'
						>
							<span className='mr-2'>
								<MdEmail color={Colors.primaryColor} />
							</span>{' '}
							<a href='mailto:ahmadfiaz.9089@gmail.com'>
								ahmadfiaz.9089@gmail.com
							</a>
						</p>
						<p
							className='flex gap-2 cursor-pointer items-center text-gray-300'
							data-aos='fade-up'
							data-aos-duration='1000'
						>
							<span className='mr-2'>
								<FaPhoneAlt color={Colors.primaryColor} />
							</span>{' '}
							<a href='tel:+923066495894'>+92 306 6495894</a>{' '}
						</p>
					</div>
					<div>
						<h3
							className='text-xl font-semibold'
							data-aos='fade-up'
							data-aos-duration='1000'
						>
							Contact Me
						</h3>
						<div className='flex space-x-4 mt-3'>
							<a
								href='https://www.linkedin.com/in/ahmad-fiaz'
								className='text-sm bg-white p-3 rounded-3xl hover:bg-[#c9f31d] transition-all delay-100 text-black'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								<FaLinkedinIn />
							</a>
							<a
								href='#'
								className='text-sm bg-white p-3 rounded-3xl hover:bg-[#c9f31d] transition-all delay-100 text-black'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								<FaFacebookF />
							</a>
							<a
								href='https://wa.me/+923066495894'
								className='text-sm bg-white p-3 rounded-3xl hover:bg-[#c9f31d] transition-all delay-100 text-black'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								<FaWhatsapp />
							</a>
						</div>
					</div>
				</div>

				{/* Right Section - Contact Form */}
				<div className='bg-[#1F1F1F] flex-1 p-3 md:p-8 rounded-lg shadow-lg'>
					<form className='space-y-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div data-aos='fade-up' data-aos-duration='1000'>
								<label
									htmlFor='fullName'
									className='block text-sm font-medium text-gray-300'
								>
									Full Name
								</label>
								<input
									type='text'
									id='fullName'
									placeholder='Richard D. Hammond'
									className='w-full bg-[#2F2F2F] text-gray-300 border mt-2 font-semibold border-gray-700 rounded-lg px-4 py-4 focus:bg-black focus:text-white focus:outline-none focus:border-lime-400'
								/>
							</div>
							<div data-aos='fade-up' data-aos-duration='1010'>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-300'
								>
									Email Address
								</label>
								<input
									type='email'
									id='email'
									placeholder='support@gmail.com'
									className='w-full bg-[#2F2F2F] text-gray-300 border mt-2 font-semibold border-gray-700 rounded-lg px-4 py-4 focus:bg-black focus:text-white focus:outline-none focus:border-lime-400'
								/>
							</div>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div data-aos='fade-up' data-aos-duration='1020'>
								<label
									htmlFor='phoneNumber'
									className='block text-sm font-medium text-gray-300'
								>
									Phone Number
								</label>
								<input
									type='text'
									id='phoneNumber'
									placeholder='+880 (123) 456 88'
									className='w-full bg-[#2F2F2F] text-gray-300 border mt-2 font-semibold border-gray-700 rounded-lg px-4 py-4 focus:bg-black focus:text-white focus:outline-none focus:border-lime-400'
								/>
							</div>
							<div data-aos='fade-up' data-aos-duration='1030'>
								<label
									htmlFor='subject'
									className='block text-sm font-medium text-gray-300'
								>
									Subject
								</label>
								<input
									type='text'
									id='subject'
									placeholder='Subject'
									className='w-full bg-[#2F2F2F] text-gray-300 border mt-2 font-semibold border-gray-700 rounded-lg px-4 py-4 focus:bg-black focus:text-white focus:outline-none focus:border-lime-400'
								/>
							</div>
						</div>
						<div data-aos='fade-up' data-aos-duration='1040'>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-300'
							>
								Message
							</label>
							<textarea
								id='message'
								placeholder='Write message'
								rows={4}
								className='w-full bg-[#2F2F2F] text-gray-300 border mt-2 font-semibold border-gray-700 rounded-lg px-4 py-4 focus:bg-black focus:text-white focus:outline-none focus:border-lime-400'
							></textarea>
						</div>
						<button
							data-aos='fade-up'
							data-aos-duration='1050'
							type='submit'
							onClick={handleSubmit}
							className='w-[max-content] px-10 bg-lime-400 text-black font-semibold py-3 rounded-lg shadow-md hover:bg-lime-500 transition-colors'
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactSection

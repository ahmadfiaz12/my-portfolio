import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import logo from '../assets/images/logo.png'
import { useLenis } from '../hooks/useLenis'

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [activeSection, setActiveSection] = useState('home') // Default active section

	// Listen to scroll event and update navbar state
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const { scrollTo } = useLenis()

	const handleNavClick = (sectionId: string) => {
		setActiveSection(sectionId.replace('#', '')) // Update active section
		scrollTo(sectionId)
		setIsOpen(false) // Close sidebar on click
	}

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-500 ${
				isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
			}`}
		>
			<div className='w-full lg:px-24 flex justify-between items-center md:h-[80px] md:px-6'>
				{/* Logo */}
				<div
					className='cursor-pointer'
					onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
				>
					<img src={logo} alt='Logo' className='h-16 w-auto' />
				</div>

				{/* Desktop Menu */}
				<div className='hidden md:flex items-center space-x-10'>
					{['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'].map(
						(item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className='text-white hover:text-lime-400 transition-all'
								onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
							>
								{item}
							</a>
						)
					)}
				</div>

				{/* Let's Talk Button (Desktop) */}
				<div className='hidden md:flex items-center'>
					<a
						href='#contact'
						className='bg-lime-400 text-black font-bold py-2 px-4 rounded-full hover:bg-lime-500 transition-all duration-300'
					>
						Let's Talk
					</a>
				</div>

				{/* Burger Icon (Mobile) */}
				<div className='mr-5 md:hidden'>
					<button onClick={() => setIsOpen(true)}>
						<MdOutlineMenu size={32} className='text-white' />
					</button>
				</div>
			</div>

			{/* Mobile Sidebar */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', stiffness: 200, damping: 25 }}
						className='fixed top-0 right-0 w-3/4 sm:w-2/5 h-screen bg-black bg-opacity-90 backdrop-blur-md shadow-lg flex flex-col items-center pt-20 z-50'
					>
						{/* Close Button */}
						<button
							className='absolute top-5 right-5 text-white'
							onClick={() => setIsOpen(false)}
						>
							<IoMdClose size={32} />
						</button>

						{/* Sidebar Links */}
						<div className='flex flex-col space-y-6 text-center'>
							{[
								'Home',
								'About',
								'Skills',
								'Services',
								'Projects',
								'Contact',
							].map((item) => (
								<a
									key={item}
									href={`#${item.toLowerCase()}`}
									className={`text-white hover:text-lime-400 transition-all ${
										activeSection === item.toLowerCase()
											? 'text-lime-400 font-bold'
											: ''
									}`}
									onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
								>
									{item}
								</a>
							))}
						</div>

						{/* Let's Talk Button (Mobile) */}
						<div className='mt-10'>
							<a
								href='#contact'
								className='bg-lime-400 text-black font-bold py-2 px-6 rounded-full hover:bg-lime-500 transition-all duration-300'
								onClick={() => setIsOpen(false)}
							>
								Let's Talk
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar

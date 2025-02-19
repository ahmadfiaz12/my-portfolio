import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

// Import your images
import Picture1 from '../assets/images/1.jpg'
import Picture2 from '../assets/images/2.jpg'
import Picture3 from '../assets/images/3.jpg'

// Type definitions
interface SlideProps {
	src: string // Path to the image
	direction: 'left' | 'right' // Allowed values for direction
	left: string // CSS left property value
	progress: MotionValue<number> // Progress value from `useScroll`
}

interface PhraseProps {
	src: string // Path to the image
}

export default function Animation() {
	const container = useRef<HTMLDivElement>(null) // Reference to the container element
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	})

	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		return () => lenis.destroy() // Clean up Lenis instance
	}, [])

	return (
		<main className='overflow-hidden'>
			<div className='h-[10vh] md:h-[40vh]' />
			<div ref={container}>
				<Slide
					src={Picture1}
					direction='left'
					left='-40%'
					progress={scrollYProgress}
				/>
				<Slide
					src={Picture2}
					direction='right'
					left='-25%'
					progress={scrollYProgress}
				/>
				<Slide
					src={Picture3}
					direction='left'
					left='-75%'
					progress={scrollYProgress}
				/>
			</div>
			<div className='h-[10vh] md:h-[40vh]' />
		</main>
	)
}

const Slide: React.FC<SlideProps> = ({ src, direction, left, progress }) => {
	const translateX = useTransform(
		progress,
		[0, 1],
		[
			150 * (direction === 'left' ? -1 : 1),
			-150 * (direction === 'left' ? -1 : 1),
		]
	)
	return (
		<motion.div
			style={{ x: translateX, left }}
			className='relative flex whitespace-nowrap'
		>
			<Phrase src={src} />
			<Phrase src={src} />
			<Phrase src={src} />
		</motion.div>
	)
}

const Phrase: React.FC<PhraseProps> = ({ src }) => {
	return (
		<div className='px-5 flex gap-5 items-center'>
			<p className='text-[7.5vw] text-white'>Front End Developer</p>
			<span className='relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden'>
				<img src={src} alt='image' className='object-cover w-full h-full' />
			</span>
		</div>
	)
}

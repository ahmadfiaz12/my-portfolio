import ManImage from "../assets/images/skill-man.png"
import htmlImage from "../assets/images/html.png"
import cssImage from "../assets/images/css.png"
import jsImage from "../assets/images/js.png"
import reactImage from "../assets/images/react.png"
import tailwindImage from "../assets/images/tailwindcss.png"
import typescriptImage from "../assets/images/typescript.png"
import mantineImage from "../assets/images/mantine.png"



const skills = [
    {
        name: 'Html',
        image: htmlImage
    },
    {
        name: 'CSS',
        image: cssImage
    },
    {
        name: 'JavaScript',
        image: jsImage
    },
    {
        name: 'React JS',
        image: reactImage
    },
    {
        name: 'Tailwind CSS',
        image: tailwindImage
    },
    {
        name: 'Mantine UI',
        image: mantineImage
    },
    {
        name: 'TypeScript',
        image: typescriptImage
    },
]

const Skills = () => {
    return (
			<div
				id='skills'
				className='flex w-full flex-col md:flex-row justify-center md:gap-56 items-center lg:my-36 p-5 md:p-24'
			>
				<div className='left-side  flex flex-col gap-7 text-white'>
					<p
						className='text-gray-500 mt-4 max-w-md'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						professional skill for me
					</p>
					<h2
						className='text-2xl md:text-5xl font-semibold'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						Professional Skill
					</h2>
					<img
						src={ManImage}
						className='h-auto hidden md:block w-72'
						alt=''
						data-aos='fade-up'
						data-aos-duration='1030'
					/>
				</div>
				<div className='righ-side w-[100%] md:w-[600px] mt-20 md:mt-0'>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[40px] md:gap-10'>
						{skills.map((skill, index) => {
							return (
								<div
									key={index}
									className='box flex flex-col gap-5 items-center'
									data-aos='fade-up'
									data-aos-duration='1040'
								>
									<img
										src={skill?.image}
										className='h-12 md:h-24'
										alt={skill?.name}
									/>
									<h2 className='text-white border-2 border-gray-700 bg-transparent p-2 text-center w-full md:w-40 rounded-3xl'>
										{skill?.name}
									</h2>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
}

export default Skills

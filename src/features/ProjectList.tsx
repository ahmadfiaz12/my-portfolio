import React from 'react'
import ProjectCard from '../component/ProjectCard'
import tigerIt from "../assets/images/tigerit.png"
import crazyTech from "../assets/images/crazytech.jpg"
import city17 from "../assets/images/city17.png"
import idn from "../assets/images/idnNetwork.png"
import leadSoftwares from "../assets/images/lead softwares.png"
import crazyByRasel from "../assets/images/crazy by rasel.png"

const projects = [
	{
		image: crazyByRasel,
		title: 'Crazy By Rasel',
		category: 'E-commerce Website',
		link: 'https://crazybyrasel.com/',
	},
	{
		image: tigerIt,
		title: 'Tiger It',
		category: 'E-commerce Platform',
		link: 'https://tigerit.app/',
	},
	{
		image: crazyTech,
		title: 'Crazy Tech AI',
		category: 'E-commerce Platform',
		link: 'https://crazytech.ai/',
	},
	{
		image: city17,
		title: 'City 17 Display Manager',
		category: 'E-commerce Platform',
		link: 'https://city17.betesla.com/',
	},
	{
		image: idn,
		title: 'IDN Network',
		category: 'Driver Booking Platform',
		link: 'https://book.betesla.com/',
	},
	{
		image: leadSoftwares,
		title: 'Lead Softwares',
		category: 'Company Portfolio',
		link: 'https://leadsoftwares.com/',
	},
	// Add more projects as needed
]

const ProjectList: React.FC = () => {
	return (
		<div id='projects' className='bg-black p-2 md:p-24'>
			<h2 className='text-2xl my-10 md:text-4xl font-bold text-white text-center mb-8'>
				Explore My Projects
			</h2>
			<div className='container md:mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	)
}

export default ProjectList

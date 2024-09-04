'use client'

import { Project } from '@/constants/projects'
import { m, useScroll, useTransform } from 'framer-motion'
import { FC, useRef } from 'react'

interface Props {
	project: Project
}

export const ProjectCard: FC<Props> = ({ project }) => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		smooth: 400,
		// axis: 'y',
		offset: ['end end', 'start end'],
	})
	const width = useTransform(scrollYProgress, [0, 1], ['70%', '10%'])
	// const height = useTransform(scrollYProgress, [0, 1], ['10%', '70%'], )

	return (
		<m.div
			ref={ref}
			className='flex items-center gap-20 w-full'
		>
			<m.div className='flex flex-col gap-40'>
				<p className='text-3xl'>{project.title}</p>
				<p className=''>{project.description}</p>
			</m.div>
			<m.img
				style={{ width }}
				src={project.image}
				alt={project.title}
				width={1000}
				height={1000}
				className='object-cover rounded-lg'
			/>
		</m.div>
	)
}

'use client'

import { projects } from '@/constants/projects'
import { FC, Fragment } from 'react'
import { ProjectCard } from './project-card'
import { cn } from '@/lib/utils'

export const ProjectList: FC = () => {
	return (
		<div className='flex flex-col items-center gap-40'>
			{projects.map((project) => (
				<Fragment key={project.id}>
					<ProjectCard project={project} />
          <div className={cn('w-full h-[1px] bg-white/20', +project.id % 2 === 0 ? 'self-end' : 'self-start')} />
				</Fragment>
			))}
		</div>
	)
}

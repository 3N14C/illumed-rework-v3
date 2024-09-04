'use client'

import { Title } from '@/components/ui/title'
import { FC } from 'react'
import { ProjectList } from './project-list'

export const ProjectsSection: FC = () => {
	return (
		<div className=''>
			<div className='w-full'>
				<Title>наши проекты</Title>

				<div className=''>
					<ProjectList />
				</div>
			</div>
		</div>
	)
}

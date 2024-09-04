'use client'

import { Title } from '@/components/ui/title'
import { FC } from 'react'
import { ProjectList } from './project-list'

export const ProjectsSection: FC = () => {
	return (
		<div className=''>
			<div className='flex flex-col gap-20 w-full max-w-[1440px] mx-auto'>
				<Title>наши проекты</Title>

				<div className=''>
					<ProjectList />
				</div>
			</div>
		</div>
	)
}

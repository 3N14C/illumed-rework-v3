'use client'

import { Title } from '@/components/ui/title'
import { FC } from 'react'
import { AboutList } from './about-list'

export const AboutSection: FC = () => {
	return (
		<div className='h-screen flex items-center max-w-[1440px] mx-auto'>
			<div className='flex flex-col gap-10 w-full'>
				<Title>наши качества</Title>

				<div className=''>
					<AboutList />
				</div>
			</div>
		</div>
	)
}

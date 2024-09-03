'use client'

import { Title } from '@/components/ui/title'
import { FC } from 'react'
import { AboutList } from './about-list'

export const AboutSection: FC = () => {
	return (
		<div className='h-screen flex items-center'>
			{/* <div className='flex items-center justify-between w-full'>
				<p className='text-6xl font-bold tracking-wider uppercase max-w-[700px] leading-relaxed'>
					наши качества
				</p>

				<div className=''>
					<ServicesList />
				</div>
      </div> */}

			<div className='flex flex-col gap-10 w-full'>
				<Title>наши качества</Title>

				<div className=''>
					<AboutList />
				</div>
			</div>
		</div>
	)
}

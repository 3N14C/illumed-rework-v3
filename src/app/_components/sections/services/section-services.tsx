'use client'

import { Title } from '@/components/ui/title'
import { FC } from 'react'
import { ServiceList } from './service-list'

export const ServiceSection: FC = () => {
	return (
		<div className=''>
			<div className='max-w-[1440px] mx-auto'>
				<Title>наши услуги</Title>
			</div>

			<div className='mt-20'>
				<ServiceList />
			</div>
		</div>
	)
}

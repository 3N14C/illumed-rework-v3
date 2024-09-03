'use client'

import { Title } from '@/components/ui/title'
import { FC } from 'react'
import { ServiceList } from './service-list'

export const ServiceSection: FC = () => {
	return (
		<div className=''>
			<Title>наши услуги</Title>

			<ServiceList />
		</div>
	)
}

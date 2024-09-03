'use client'

import { services } from '@/constants/services'
import { m, useScroll, useTransform } from 'framer-motion'
import { FC, useRef } from 'react'
import { ServiceCard } from './service-card'

export const ServiceList: FC = () => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})
	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%'])

	return (
		<div
			className='h-[500vh]'
			ref={targetRef}
		>
			<div className='h-[100vh] sticky top-1/4 overflow-hidden'>
				<m.div
					style={{ x }}
					className='flex items-center justify-between gap-20'
				>
					{services.map((service) => (
						<m.div key={service.id}>
							<ServiceCard service={service} />
						</m.div>
					))}
				</m.div>
			</div>
		</div>
	)
}

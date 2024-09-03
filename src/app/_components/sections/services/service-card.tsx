'use client'

import { Service } from '@/constants/services'
import { icons } from 'lucide-react'
import { FC } from 'react'

interface Props {
	service: Service
}

export const ServiceCard: FC<Props> = ({ service }) => {
	const Icon = icons[service.icon]

	return (
		<div className='border border-white/20 bg-gradient-to-tl from-[#977de6]/10 to-black/10 backdrop-blur-lg rounded-lg px-[70px] py-[50px] min-h-[600px]'>
			<div className='flex flex-col items-start gap-10'>
				<div className='border border-white/20 p-2 rounded-lg'>
					<Icon
						className='w-[60px] h-[60px]'
						strokeWidth={1}
					/>
				</div>
				<div className='flex flex-col gap-[25px]'>
					<p className='font-[500] text-[48px] max-w-[511px] tracking-[-8%]'>
						{service.title}
					</p>
					<p className='font-[200] text-lg max-w-[465px] text-white/50'>
						{service.description}
					</p>
				</div>
			</div>
		</div>
	)
}

'use client'

import { About } from '@/constants/about'
import { cn } from '@/lib/utils'
import { icons } from 'lucide-react'
import { FC, SetStateAction } from 'react'

interface Props {
	service: About
	activeService: string
	setActiveService: React.Dispatch<SetStateAction<string>>
}

export const AboutCard: FC<Props> = ({
	service,
	activeService,
	setActiveService,
}) => {
	const Icon = icons[service.icon]

	return (
		<div className='flex items-center justify-center gap-2 min-w-[100px] py-3'>
			<div
				onClick={() => setActiveService(service.id)}
				className={cn(
					'relative border border-white/20 bg-transparent p-3 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center',
					{
						'bg-white/10': activeService === service.id,
					}
				)}
			>
				<Icon
					className='w-7 h-7'
					strokeWidth={1}
				/>
			</div>
		</div>
	)
}

'use client'

import { about } from '@/constants/about'
import { cn } from '@/lib/utils'
import { m } from 'framer-motion'
import { FC, useState } from 'react'
import { AboutCard } from './about-card'
import styles from './menu-about.module.css'

export const AboutList: FC = () => {
	const [activeService, setActiveService] = useState<string>(about[0].id)

	return (
		<div className='flex items-center justify-between gap-20 relative w-full'>
			<m.div
				className={`relative flex flex-col items-center justify-center max-w-fit p-2 gap-4 border border-white/20 rounded-lg transition-all duration-300 ${
					styles[about[+activeService - 1].color]
				}`}
			>
				{about.map((item) => (
					<AboutCard
						key={item.id}
						service={item}
						activeService={activeService}
						setActiveService={setActiveService}
					/>
				))}
			</m.div>

			<m.div className='w-full absolute top-[47px] left-20'>
				{about.map((item, idx) => (
					<m.div
						key={item.id}
						className={cn(
							'border border-white/20 bg-gradient-to-tl from-[#977de6]/10 to-black /10 rounded-lg w-full p-7 absolute h-[500px] backdrop-blur-lg',
							activeService === item.id &&
								styles[about[+activeService - 1].color]
						)}
						style={{
							transformOrigin: 'top center',
						}}
						animate={{
							top: idx * -10,
							scale: activeService === item.id ? 0.85 : 0.75 - idx * 0.06,
							zIndex: activeService === item.id ? 10 : about.length - idx,
						}}
					>
						<div className='flex flex-col gap-10'>
							<p className='font-[500] text-8xl max-w-[511px] tracking-[-8%]'>
								{item.title}
							</p>
							<p className='font-light text-3xl text-white/50'>
								{item.description}
							</p>
						</div>
					</m.div>
				))}
			</m.div>
		</div>
	)
}

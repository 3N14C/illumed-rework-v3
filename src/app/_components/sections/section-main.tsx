'use client'

import { AnimatedText } from '@/components/ui/animations/animate-text'
import { Title } from '@/components/ui/title'
import { m } from 'framer-motion'
import { FC } from 'react'

export const MainSection: FC = () => {
	return (
		<div className='h-screen flex items-center justify-between max-w-[1440px] mx-auto'>
			<div className='flex flex-col gap-20'>
				<m.div
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className=''
				>
					<Title>Студия разработки</Title>
					<AnimatedText />
				</m.div>
				<m.p
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='max-w-[550px] text-xl text-[#797979] font-extralight leading-normal'
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sed
					eos, eius perferendis ad porro a aliquid eum aliquam at voluptates
					fuga harum doloremque soluta ducimus facilis laboriosam placeat
					magnam?
				</m.p>
			</div>

			<div className=''>
				<m.div
					initial={{ x: 0, y: 0 }}
					animate={{ x: [20, 5, 20], y: [5, 10, 5] }}
					transition={{
						repeat: Infinity,
						duration: 2,
						repeatType: 'reverse',
						ease: 'easeInOut',
					}}
					className=''
				>
					<m.img
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						src={'/images/svg/ellipse.svg'}
						alt='hero'
						width={1000}
						height={1000}
						className='w-[200px]'
					/>
				</m.div>

				<m.div
					initial={{ x: 0, y: 0 }}
					animate={{ x: [-20, 5, -20], y: [-5, -10, -5] }}
					transition={{
						repeat: Infinity,
						duration: 2,
						repeatType: 'reverse',
						ease: 'easeInOut',
					}}
					className='relative -left-72'
				>
					<m.img
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						src={'/images/svg/ellipse.svg'}
						alt='hero'
						width={1000}
						height={1000}
						className='w-[200px]'
					/>
				</m.div>
			</div>
		</div>
	)
}

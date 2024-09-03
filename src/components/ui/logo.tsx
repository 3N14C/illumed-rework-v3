'use client'

import { cn } from '@/lib/utils'
import { m } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { FC, useState } from 'react'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const Logo: FC = () => {
	const [hover, setHover] = useState<boolean>(false)

	return (
		<div
			className='flex items-center gap-2 cursor-pointer'
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<m.div
				initial={{ x: 0 }}
				animate={{ x: hover ? 10 : 0 }}
				transition={{ duration: 0.5 }}
				className=''
			>
				<Image
					src={'/images/svg/ellipse.svg'}
					alt='logo'
					width={1000}
					height={1000}
					className='w-[50px]'
				/>
			</m.div>
			<p className={cn(poppins.className, 'text-xl font-semibold')}>
				illumed<span className='text-primary-purple'>Web</span>
			</p>
		</div>
	)
}

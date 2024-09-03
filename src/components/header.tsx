'use client'

import { navbar } from '@/constants/navbar'
import { m } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'
import { Button } from './ui/button'
import { Logo } from './ui/logo'

export const Header: FC = () => {
	return (
		<m.div
			initial={{ opacity: 0, y: -40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className='relative z-20'
		>
			<m.div
				className='flex items-center justify-between h-[80px]
      border border-white/20 bg-[#0e0f11]/10 backdrop-blur-md rounded-lg px-4
      fixed left-1/2 -translate-x-1/2 right-1/2 w-[1440px] border-b-primary-purple/40'
			>
				<Logo />

				<div className='flex items-center gap-10'>
					{navbar.map((nav) => (
						<div
							key={nav.id}
							className=''
						>
							<Link href={nav.link}>{nav.title}</Link>
						</div>
					))}
				</div>

				<div className=''>
					<Button className=''>Связаться с нами</Button>
				</div>
			</m.div>
		</m.div>
	)
}

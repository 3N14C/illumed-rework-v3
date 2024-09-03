'use client'

import { forwardRef } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, Props>(
	({ children, ...props }, ref) => {
		return (
			<button
				{...props}
				ref={ref}
				className='rounded-lg bg-gradient-to-tl from-[#977de6]/20 to-black/10 border border-white/20 backdrop-blur-md px-4 py-2 text-white'
			>
				{children}
			</button>
		)
	}
)

'use client'

import { cn } from '@/lib/utils'
import { m, useScroll, useSpring, useTransform } from 'framer-motion'
import { FC, useEffect, useRef, useState } from 'react'

interface Props {
	children: React.ReactNode
}

export const AnimatedProgressBar: FC<Props> = ({ children }) => {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	const contentRef = useRef<HTMLDivElement>(null)
	const [svgHeight, setSvgHeight] = useState<number>(0)

	useEffect(() => {
		if (contentRef.current) {
			setSvgHeight(contentRef.current.offsetHeight)
		}
	}, [])

	const y1 = useSpring(
		useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
		{
			stiffness: 500,
			damping: 90,
		}
	)
	const y2 = useSpring(
		useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
		{
			stiffness: 500,
			damping: 90,
		}
	)

	return (
		<m.div
			ref={ref}
			className={cn('relative w-full max-w-[1440px] mx-auto h-full')}
		>
			<div className='absolute -left-40'>
				<svg
					viewBox={`0 0 20 ${svgHeight}`}
					width='20'
					height={svgHeight} // Set the SVG height
					className=' ml-4 block'
					aria-hidden='true'
				>
					<m.path
						d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
						fill='none'
						stroke='#9091A0'
						strokeOpacity='0.16'
						transition={{
							duration: 10,
						}}
					></m.path>
					<m.path
						d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
						fill='none'
						stroke='url(#gradient)'
						strokeWidth='1.25'
						className='motion-reduce:hidden'
						transition={{
							duration: 10,
						}}
					></m.path>
					<defs>
						<m.linearGradient
							id='gradient'
							gradientUnits='userSpaceOnUse'
							x1='0'
							x2='0'
							y1={y1} // set y1 for gradient
							y2={y2} // set y2 for gradient
						>
							<stop
								stopColor='#9d81ed'
								stopOpacity='0'
							></stop>
							<stop stopColor='#9d81ed'></stop>
							<stop
								offset='0.325'
								stopColor='#9d81ed'
							></stop>
							<stop
								offset='1'
								stopColor='#9d81ed'
								stopOpacity='0'
							></stop>
						</m.linearGradient>
					</defs>
				</svg>
			</div>
			<div ref={contentRef}>{children}</div>
		</m.div>
	)
}

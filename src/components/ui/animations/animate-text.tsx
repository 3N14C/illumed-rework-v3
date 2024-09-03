'use client'

import { AnimatePresence, m } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

const words = ['лендингов', 'сайтов', 'портфолио', 'проектов']

export const AnimatedText: FC = () => {
	const [wordIdx, setWordIdx] = useState<number>(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setWordIdx((prev) => (prev + 1) % words.length)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<m.div>
			<AnimatePresence mode='wait'>
				<m.div key={wordIdx}>
					{Array.from(words[wordIdx]).map((char, idx) => (
						<m.span
							key={idx}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className='text-6xl uppercase font-bold text-primary-purple'
						>
							{char}
						</m.span>
					))}
				</m.div>
			</AnimatePresence>
		</m.div>
	)
}

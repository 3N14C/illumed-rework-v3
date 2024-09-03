'use client'

import { FC } from "react"

interface Props {
  children: React.ReactNode
}

export const Title: FC<Props> = ({children}) => {
  return (
		<p className='text-6xl font-bold tracking-wider uppercase max-w-[700px] leading-relaxed'>
			{children}
		</p>
	)
}

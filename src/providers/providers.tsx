'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { domAnimation, LazyMotion } from 'framer-motion'
import { FC } from 'react'
import {ReactLenis, useLenis} from 'lenis/react'

interface Props {
	children: React.ReactNode
}

export const Providers: FC<Props> = ({ children }) => {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<LazyMotion features={domAnimation}>
				<ReactLenis root>{children}</ReactLenis>
			</LazyMotion>
		</QueryClientProvider>
	)
}

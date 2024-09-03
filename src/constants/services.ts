import { icons } from 'lucide-react'

export interface Service {
	id: string
	title: string
	description: string
	icon: keyof typeof icons
}

export const services: Service[] = [
	{
		id: '1',
		title: 'Разработка плана и дизайна',
		description:
			'Полное информационное заполнение и структурирование сайта/приложения. Разработка современного и эстетичного дизайна...',
		icon: 'Rocket',
	},
	{
		id: '2',
		title: 'Разработка сайта',
		description:
			'Практическая реализация веб-проекта. Программирование всего функционала, анимирование, разработка внутренней и внешней частей сайта/приложения...',
		icon: 'Rocket',
	},
	{
		id: '3',
		title: 'Запуск и продвижение сайта',
		description:
			'Регистрация домена, подбор и оформление качественного хостинга, грамотная настройка системы поиска и рекламы...',
		icon: 'Rocket',
	},
	{
		id: '4',
		title: 'Запуск и продвижение сайта',
		description:
			'Регистрация домена, подбор и оформление качественного хостинга, грамотная настройка системы поиска и рекламы...',
		icon: 'Rocket',
	},
	{
		id: '5',
		title: 'Запуск и продвижение сайта',
		description:
			'Регистрация домена, подбор и оформление качественного хостинга, грамотная настройка системы поиска и рекламы...',
		icon: 'Rocket',
	},
]

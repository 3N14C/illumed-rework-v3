import { AboutSection } from './_components/sections/about/section-about'
import { MainSection } from './_components/sections/section-main'
import { ServiceSection } from './_components/sections/services/section-services'

export default function Home() {
	return (
		<div className=''>
			<MainSection />
			<AboutSection />
			<ServiceSection />
			<MainSection />
			<MainSection />
		</div>
	)
}

import { AboutSection } from './_components/sections/about/section-about'
import { ProjectsSection } from './_components/sections/projects/section-projects'
import { MainSection } from './_components/sections/section-main'
import { ServiceSection } from './_components/sections/services/section-services'

export default function Home() {
	return (
		<div className=''>
			<MainSection />
			<AboutSection />
			<ServiceSection />
			<ProjectsSection />
			<MainSection />
		</div>
	)
}

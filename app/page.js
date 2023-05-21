
import Landing from './components/sections/Landing'



import Landing_about from './components/sections/Landing_about'
import Landing_services from './components/sections/Landing_services'
import Testimonials from './components/sections/Testimonials'
import Clinic_gallery from './components/sections/Clinic_gallery'
import UnderConstruction from './components/UnderConstruction'

export default function Home() {

  return (
  <main>
  <Landing />
  <Landing_about />
  <Landing_services />
  <Clinic_gallery />
  <Testimonials />
  
  </main>
  )
}

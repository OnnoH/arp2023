import { Routes, Route } from 'react-router-dom'
import Meetups from '../../pages/Meetups'
import About from '../../pages/About'
import Rentakit from '../../pages/Rentakit'
import Contact from '../../pages/Contact'
import Chapters from '../../pages/Chapters'
import Manifesto from '../../pages/Manifesto'
import Testimonials from '../../pages/Testimonials'
import Projects from '../../pages/Projects'
import NoMatch from '../../pages/NoMatch'

function AppRouter() {
    return (
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="chapters" element={<Chapters />} />
          <Route path="manifesto" element={<Manifesto />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="projects" element={<Projects />} />
          <Route path="rentakit" element={<Rentakit />} />
          <Route path="meetups" element={<Meetups />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}

export default AppRouter

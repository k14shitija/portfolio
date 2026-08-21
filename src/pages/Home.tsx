import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function Home() {
  const location = useLocation()

  // Support scrolling to a section when navigating home with { state: { scrollTo } }.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (target) {
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location.state])

  return (
    <main>
      <Hero />
      <Projects />
    </main>
  )
}

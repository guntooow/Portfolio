import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Skills from './components/Skills'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <About />
    <Skills />
  </StrictMode>,
)

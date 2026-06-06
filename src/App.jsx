import { useEffect, useState } from 'react'
import { HomePage } from './pages/HomePage.jsx'
import { NovaDermPage } from './pages/NovaDermPage.jsx'
import { BrainLiftPage } from './pages/BrainLiftPage.jsx'
import { EngineeringWork } from './pages/EngineeringWork.jsx'

function App() {
  const path = window.location.pathname
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'pl')

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  const languageProps = {
    language,
    onLanguageChange: setLanguage,
  }

  if (path === '/novaderm') {
    return <NovaDermPage {...languageProps} />
  }

  if (path === '/brainlift') {
    return <BrainLiftPage {...languageProps} />
  }

  if (path === '/engineering-work') {
    return <EngineeringWork {...languageProps} />
  }

  return <HomePage {...languageProps} />
}

export default App

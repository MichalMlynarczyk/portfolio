import { HomePage } from './pages/HomePage.jsx'
import { NovaDermPage } from './pages/NovaDermPage.jsx'
import { BrainLiftPage } from './pages/BrainLiftPage.jsx'
import { EngineeringWork } from './pages/EngineeringWork.jsx'

function App() {
  const path = window.location.pathname

  if (path === '/novaderm') {
    return <NovaDermPage />
  }

  if (path === '/brainlift') {
    return <BrainLiftPage />
  }

  if (path === '/engineering-work') {
    return <EngineeringWork />
  }

  return <HomePage />
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Planning from './pages/Planning'
import Memories from './pages/Memories'
import NotFound from './pages/NotFound'

import Overview from './pages/PlanningPages/Overview'
import Destinations from './pages/PlanningPages/Destinations'
import Budget from './pages/PlanningPages/Budget'
import Eat from './pages/PlanningPages/Eat'
import Packing from './pages/PlanningPages/Packing'
import Beach from './pages/Beach'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="*" element={<NotFound />} />

            {/*  planning routes  */}
            <Route path="/planning/overview" element={<Overview />} />
            <Route path="/planning/destination" element={<Destinations />} />
            <Route path="/planning/budget" element={<Budget />} />
            <Route path="/planning/eat" element={<Eat />} />
            <Route path="/planning/packing" element={<Packing />} />

            {/* beach routes */}
            <Route path = "/planning/beach/:name" element={<Beach />} />

        </Routes>
    </Router>
  )
}

export default App

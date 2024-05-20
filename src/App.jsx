import {Routes, Route} from 'react-router-dom'
import { Header } from './assets/components/Header/Header.jsx'
import { Home } from "./assets/pages/Home/Home.jsx"
import { BasicOperations } from "./assets/pages/BasicOperations/BasicOperations.jsx"
import { RandomizerBG } from "./assets/pages/RandomizerBG/RandomizerBG.jsx"
import { Registry } from "./assets/pages/Registry/Registry.jsx"
import { TaskManager } from "./assets/pages/TaskManager/TaskManager.jsx"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calc' element={<BasicOperations />} />
        <Route path='/randombg' element={<RandomizerBG />} />
        <Route path='/register' element={<Registry />} />
        <Route path='/listwrks' element={<TaskManager />} />
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch from './Fetch'
import Axios from './Axios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-between items-center h-96'>
      <Axios/>
      <Fetch/>
    </div>
  )
}

export default App

import './App.css'
import { Alert } from './Components/Alert/Alert'
import { Bigbox } from './Components/Bigbox/Bigbox'
import { Socrates } from './Components/Socrates/Socrates'
import { Upgrade } from './Components/Upgrade/Upgrade'

function App() {

  return (
    <div className="app">
      <div className="app-left">
        <Socrates/>
        <Upgrade/>
      </div>
      <div className="app-right">
        <Alert/>
        <Bigbox/>
      </div>
    </div>
  )
}

export default App

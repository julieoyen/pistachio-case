

import LoginForm from './components/LoginForm'
import familyImg from './assets/images/family.avif'
import './App.css'

function App() {
  return (
    <><div className='flex flex-col lg:flex-row-reverse'>
      <div>
      <img src={familyImg} alt="" /></div>
      <LoginForm />
      
      </div>
    </>
  )
}

export default App

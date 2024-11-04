import './App.css'
import Menu from './rutas/Menu'
import { AuthProvider } from './components/AuthComponents'

function App() {
  return (
    <AuthProvider>
      <Menu />
    </AuthProvider>
  )
}

export default App
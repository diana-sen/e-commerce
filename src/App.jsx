
import { BrowserRouter } from 'react-router-dom'
import { Header } from '@/components'
import RoutesIndex from '@/routes'
import '@/App.css'
import { AuthProvider } from '@/context/AuthContext'

function App () {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <RoutesIndex />
        </AuthProvider>
      </BrowserRouter>
    </>

  )
}

export default App

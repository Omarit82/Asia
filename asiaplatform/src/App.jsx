import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login.jsx'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'
import { Home } from './Pages/Home.jsx'

function App() {


  return (

    <Routes>
      {/**Rutas Publicas */}
      <Route path="/login" element={<Login />} />

      {/**Rutas Protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App

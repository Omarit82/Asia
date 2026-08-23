import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './Authentication/Login.jsx'
import { ProtectedRoute } from './Authentication/ProtectedRoute.jsx'
import { Home } from './Pages/Home.jsx'

function App() {


  return (

    <BrowserRouter>
      <Routes>
        {/**Rutas Publicas */}
        <Route path="/login" element={<Login />} />

        {/**Rutas Protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

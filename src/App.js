import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// PÁGINAS
import Home from './Páginas/home'
import About from './Páginas/about'
import Error from './Páginas/error'
// COMPONENTES
import Navbar from './Componentes/navbar'
import Loading from './Componentes/loading'

function App() {
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)
    setTimeout(() => {
      setCargando(false)
    }, 4000)
  }, [])

  console.log(cargando)
  return (
    <div>
      <Router>
        {cargando ? <Loading /> : null}
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/nosotros'>
              <About />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App

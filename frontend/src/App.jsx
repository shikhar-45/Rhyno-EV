/*import { useState } from 'react'*/
import { Footer, Navbar, About, Contact, Rentals, Home, Compare, Products, Form } from './components'
import "./index.css"
function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Compare />
      <Form />
      <About />
      <Contact />
      <Rentals />
      <Footer />
    </>
  )
}

export default App

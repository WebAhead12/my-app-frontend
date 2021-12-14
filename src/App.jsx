import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <div>
        navbar
        <h1>Welcome to React Router!</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

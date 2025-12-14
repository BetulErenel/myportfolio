import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Admin from './components/Admin'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App

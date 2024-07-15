import { useEffect } from 'react'
import './App.css'
import { Movie } from './components/Movies'

function App() {

  useEffect(() => {
    getMovies()
  }
  , [])

  const getMovies =  () => {
    fetch('https://www.omdbapi.com/?apikey=9d243264&t=avengers')
      .then(response => response.json())
      .then(data=> console.log(data))
  }

  return (
    <div className="page">
      <header>
        <h2>Buscar película</h2>
        <div className="search">
          <input type='text' placeholder='Titanic, Shrek...'></input>
          <button type='submit'>Buscar</button>
        </div>
      </header>

      <main>
        <Movie title="The Godfather" poster="" />
      </main>
    </div>
    
  )
}

export default App

import { useState } from 'react'
import { Link, Route } from 'wouter'
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResult from './pages/SearchResult'
import logo from './logo.png'
import StaticContext from './context/StaticContext'
import './App.css'
import { GifsContextProvider } from './context/GifsContext'

export default function App() {
  const [keyword, setKeyword] = useState('mapache')

  return (
    <StaticContext.Provider value={{name: 'JTCode',
    Leaning: true}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" src={logo} alt="Gifty logo" />
          </Link>
          <GifsContextProvider>
            <Route
              path='/'
              component={Home}
            />
            <Route
              path='/search/:keyword'
              component={SearchResult}
            />
            <Route
              path='/gif/:id'
              component={Detail}
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

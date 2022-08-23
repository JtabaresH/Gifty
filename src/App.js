import { useState } from 'react';
import { Link, Route } from 'wouter'
import ListOfGifs from './components/ListOfGifs'
import Home from './pages/Home';
import Detail from './pages/Detail';
import logo from './logo.png'
import './App.css'

export default function App() {
  const [keyword, setKeyword] = useState('mapache')

  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" src={logo} alt="Gifty logo" />
        </Link>
        <Route
          path='/'
          component={Home}
        />
        <Route
          path='/search/:keyword'
          component={ListOfGifs}
        />
        <Route
          path='/gif/:id'
          component={Detail}
        />
      </section>
    </div>
  );
}

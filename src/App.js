import { useState } from 'react';
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'

export default function App() {
  const [keyword, setKeyword] = useState('mapache')

  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/mapache">Gifs de mapaches</Link>
        <Link to="/gif/tigre">Gifs de tigres</Link>
        <Route
          path='/gif/:keyword'
          component={ListOfGifs}
        />
      </section>
    </div>
  );
}

import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'

const POPULAR_GIFS = ["Programming", "Panda", "Mapache", "Tigre"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = e => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <>
            <h3 className="App-title">Los gifs mas populares</h3>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <input placeholder='Search a gif here...' type="text" value={keyword} />
            </form>
            <ul>
                {POPULAR_GIFS.map(popularGif => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
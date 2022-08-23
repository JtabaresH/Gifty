import React, { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'
import './Gif.css'

export default function ListOfGifs({ params }) {
    const { keyword } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])


    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
            .then(gif => {
                setLoading(false)
                setGifs(gif)
            })
    }, [keyword])

    if(loading) return (<div className="lds-ripple"><div></div><div></div></div>)

    return (
        <div>
            {
                gifs.map(singleGif =>
                    <Gif
                        key={singleGif.id}
                        title={singleGif.title}
                        url={singleGif.url}
                        id={singleGif.id} />
                )
            }
        </div>

    )
}
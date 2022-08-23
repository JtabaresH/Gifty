import React, { useState, useEffect } from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import Spinner from '../../components/Spinner'
import getGifs from '../../services/getGifs'

export default function SearchResult({ params }) {
    const { keyword } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])


    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setLoading(false)
                setGifs(gifs)
            })
    }, [keyword])

    return <>
    {loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />
    }
    </>

}
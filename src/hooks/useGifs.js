import { useContext, useEffect, useState } from "react"
import getGifs from "../services/getGifs"
import GifsContext from "../context/GifsContext"

export function useGifs({ keyword } = {keyword: null}) {

    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)
    
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword: keywordToUse })
        .then(gifs => {
            setLoading(false)
            setGifs(gifs)
            if(keyword) localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, setGifs])

    return { loading, gifs }
}
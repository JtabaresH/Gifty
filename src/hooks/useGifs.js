import { useEffect, useState } from "react"
import getGifs from "../services/getGifs"

export function useGifs({ keyword } = {keyword: null}) {

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword: keywordToUse })
        .then(gifs => {
            setLoading(false)
            setGifs(gifs)
            if(keyword) localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword])

    return { loading, gifs }
}
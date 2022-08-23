import axios from 'axios'

const apiKey = 'pmlHkp06jGp6PjZQnRwmF6KqBHqPn0Rg'

export default function getGifs({ keyword = 'morty' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return axios.get(apiURL)
        .then((res) => {
            const gifs = res.data.data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        })
}
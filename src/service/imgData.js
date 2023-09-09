import axios from './img'

const IMG_KEY = "3znn9OKw4toiLsPmpe0us9U3upq010ih4Ds9L4BIcgA"

const ImgService = {
    async getTodayData(place_id){
        const res = await axios.get(`${IMG_KEY}&page=1&query=${place_id}`) 

        return res

    }
}

export default ImgService
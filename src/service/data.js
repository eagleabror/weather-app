import axios from './api'

const API_KEY = "igvn9qxe7s8pfjfn4ib7nj8e5ph6952s6hca5oni"

const DataService = {
    async getTodayData(place_id){
        const {data} = await axios.get(`/point?place_id=${place_id}&key=${API_KEY}`)

        return data

        console.log(data);
    }
}

export default DataService
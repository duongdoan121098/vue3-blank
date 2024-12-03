import axios from 'axios'
import { useCoreStore } from '../../stores/core'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    ContentType: 'application/json',
    Accept: 'application/json',
    common: ['Access-Control-Allow-Origin', '*'],
})

// instance requests
instance.interceptors.request.use(
    (config) => {
        const core = useCoreStore()
        console.log(core)
        return config
    },
    (error) => {
        const core = useCoreStore()
        console.log(core)
        return Promise.reject(error)
    }
)

// instance responses
instance.interceptors.response.use(
    (response) => {
        const core = useCoreStore()
        console.log(core)
        return response
    },
    (error) => {
        const core = useCoreStore()
        console.log(core)
        return Promise.reject(error)
    }
)

// export axios configuration
export default instance

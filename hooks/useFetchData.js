import { getDataByOrder } from '@/services/getFromDb'
import { useEffect, useState } from 'react'

export default function useFetchData() {
    const [data, setData] = useState([])

    const fetchData = async() => {
        const response = await getDataByOrder('tours', 'title', 'asc', true)
        setData(response)
    }
  
    useEffect(() => {
        fetchData()
    }, [])

    return { data, fetchData }
}

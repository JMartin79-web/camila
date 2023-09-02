import { getData, getDataByOrder } from '@/services/getFromDb'
import { useEffect, useState } from 'react'

export default function useFetchData() {
    const [data, setData] = useState([])
    const [pageData, setPageData] = useState([])

    const fetchData = async () => {
        const [tourData, pageInfo] = await Promise.all([
            getDataByOrder('tours', 'title', 'asc', true),
            getData('page-info')
        ])
        setData(tourData)
        setPageData(pageInfo[0])
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, fetchData, pageData }
}

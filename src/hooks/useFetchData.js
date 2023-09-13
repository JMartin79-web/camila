import { getData, getDataByOrder } from '../services/getFromDb'
import { useEffect, useState } from 'react'

export default function useFetchData(language) {
    const [data, setData] = useState([])
    const [pageData, setPageData] = useState([])

    const fetchData = async () => {
        let collectionTours = 'tours'
        let collectionPageInfo = 'page-info'
        if (language) {
            collectionTours += `-${language}`
            collectionPageInfo += `-${language}`
        }
        const [tourData, pageInfo] = await Promise.all([
            getDataByOrder(collectionTours, 'title', 'asc', true),
            getData(collectionPageInfo)
        ])
        setData(tourData)
        setPageData(pageInfo[0])
    }

    const handleDeleteTour = (docId) => {
        const updateTours = data.filter(({ id }) => id !== docId)
        setData(updateTours)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, fetchData, pageData, handleDeleteTour }
}

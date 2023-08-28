import Loading from '@/components/Loading'
import NewTour from '@/components/NewTour'
import useAuth from '@/hooks/useAuth'
import { getDataByOrder } from '@/services/getFromDb'
import { Toaster } from 'react-hot-toast'
import UpdateTour from '@/components/UpdateTour'

export default function Dashboard({ data }) {
    const { logout, isLoading } = useAuth()

    return (<>
        <Loading isLoading={isLoading} />
        <Toaster />
        <div className='min-h-screen bg-gray-100 text-black p-6'>
            <button className='absolute right-4 top-2 bg-tourBrown text-white px-4 py-2 rounded hover:opacity-50' onClick={logout}>Logout</button>
            <section className='mt-8'>
                {data?.map((tour) => (
                    <UpdateTour collection="tours"
                        title={tour.title}
                        key={tour.id}
                        images={tour.images}
                        schedule={tour.schedule}
                        content={tour.content}
                        price={tour.price}
                        id={tour.id}
                        moreInfo={tour?.moreInfo}
                    />
                ))}
            </section>
            <center>
                <NewTour collection='tours' />
            </center>
        </div>
    </>)
}

export const getServerSideProps = async () => {
    const data = await getDataByOrder('tours', 'title', 'asc', true)
    //const intro = await getData('Intro')
    return {
        props: {
            data,
            //intro: intro[1],
        }
    }
}
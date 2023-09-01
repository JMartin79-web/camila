import NewTour from '@/components/NewTour'
import { getDataByOrder } from '@/services/getFromDb'
import UpdateTour from '@/components/UpdateTour'
import PageInformationEdit from '@/components/PageInformationEdit'
import AdminLayout from '@/components/AdminLayout'

export default function Dashboard({ data }) {

    return (
        <AdminLayout>
            <PageInformationEdit collection='' />

            <section className='mt-8'>
                <h2 className='text-lg font-semibold'>Tours:</h2>
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
        </AdminLayout>
    )
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
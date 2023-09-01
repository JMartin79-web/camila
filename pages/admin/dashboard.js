import NewTour from '@/components/NewTour'
import UpdateTour from '@/components/UpdateTour'
import PageInformationEdit from '@/components/PageInformationEdit'
import AdminLayout from '@/components/AdminLayout'
import useFetchData from '@/hooks/useFetchData'

export default function Dashboard() {
    const { data, fetchData } = useFetchData()

    return (
        <AdminLayout>
            <PageInformationEdit collection='page-info' />

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
                        refetch={fetchData}
                    />
                ))}
            </section>

            <NewTour collection='tours' refetch={fetchData} />
        </AdminLayout>
    )
}

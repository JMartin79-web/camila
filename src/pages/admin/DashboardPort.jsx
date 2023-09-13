import NewTour from '../../components/NewTour'
import UpdateTour from '../../components/UpdateTour'
import PageInformationEdit from '../../components/PageInformationEdit'
import AdminLayout from '../../components/AdminLayout'
import useFetchData from '../../hooks/useFetchData'

export default function DashboardPort() {
    const { data, fetchData, pageData, handleDeleteTour } = useFetchData('port')

    return (
        <AdminLayout>
            <PageInformationEdit collection='page-info-port'
                docId={pageData.id}
                aboutHeader={pageData.aboutTitle}
                aboutText={pageData.aboutUsInfo}
                whatsappNum={pageData.whatsapp}
            />

            <section className='mt-8'>
                <h2 className='text-lg font-semibold'>Tours:</h2>
                {data?.map((tour) => (
                    <UpdateTour collection="tours-port"
                        title={tour.title}
                        key={tour.id}
                        images={tour.images}
                        schedule={tour.schedule}
                        content={tour.content}
                        price={tour.price}
                        id={tour.id}
                        moreInfo={tour?.moreInfo}
                        handleDeleteTour={handleDeleteTour}
                    />
                ))}
            </section>

            <NewTour collection='tours-port' refetch={fetchData} />
        </AdminLayout>
    )
}

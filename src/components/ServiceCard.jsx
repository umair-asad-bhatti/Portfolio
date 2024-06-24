/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
export function ServiceCard({ service, alignImage = 'left' }) {
    return (
        <>

            <div className="lg:flex hidden card card-side border bg-white dark:bg-transparent  dark:border-slate-900 w-full">
                <figure className={alignImage == 'left' ? 'order-1' : 'order-2'} style={{ width: 400 }}>
                    <img className="md:w-[500px]  h-full"
                        src={service.image}
                    />
                </figure>
                <div className="order-1 card-body w-[300px]">
                    <p className="font-xl font-bold underline underline-offset-4">{service.title}</p>
                    <p className="w-full overflow-hidden">{service.description}</p>
                </div>
            </div>


            <div className="lg:hidden card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={service.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            </div>
        </>
    )
}

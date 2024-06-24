
/* eslint-disable react/prop-types */

export default function Card({ id, imageLink, title, desctiption, buttonText, technologies, projectLink }) {
    return (
        <div className="card lg:w-[30vw] md:w-96 w-80  h-auto  border-2 dark:border-neutral shadow  bg-base-100 p-3">
            <div className="w-full h-[200px]"><img className="w-full h-[200px] object-cover rounded-xl" src={imageLink} alt="Shoes" /></div>
            <div className="card-body p-3">
                <h2 className="card-title">{title}</h2>
                <p>{desctiption.substring(0, 100)}...</p>
                <div className="flex items-center justify-end gap-4">
                    <a onClick={() => document.getElementById(`my_modal_${id}`).showModal()} className="btn btn-netural">View Details</a>
                    <div className="card-actions justify-end">
                        <a href={projectLink} target="_blank" className="btn btn-primary">{buttonText}</a>
                    </div>
                </div>
            </div>
            <dialog id={`my_modal_${id}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Project Details</h3>
                    <p className="py-4">{desctiption}</p>
                    <h3 className="font-bold ">Technologies Used</h3>
                    <ul>
                        {
                            technologies.map((tech, index) => {
                                return <li key={index}><a href="">{tech}</a></li>
                            })
                        }
                    </ul>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    )
}

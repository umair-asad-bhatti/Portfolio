/* eslint-disable react/prop-types */


export default function Card({ imageLink, title, desctiption, buttonText, technologies, projectLink }) {
    return (
        <div className="card w-96 h-auto  border-2 dark:border-neutral shadow  bg-base-100 p-3">
            <div className="w-full h-[200px]"><img className="w-full h-[200px] object-cover rounded-xl" src={imageLink} alt="Shoes" /></div>
            <div className="card-body p-3">
                <h2 className="card-title">{title}</h2>
                <p>{desctiption}</p>
                <div className="card-actions justify-end">
                    <a href={projectLink} target="_blank" className="btn btn-primary">{buttonText}</a>
                </div>
            </div>
        </div>
    )
}

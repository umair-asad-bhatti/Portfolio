/* eslint-disable react/prop-types */


export default function CustomLink({ lightImg, darkImg, title, link = null }) {
    return (
        <li>
            <a href={link} target='_blank' className="link flex gap-1">
                <img src={darkImg} className='w-5 h-5 dark:block hidden' />
                <img src={lightImg} className='w-5 h-5 dark:hidden block' />
                {title}
            </a>
        </li>
    )
}

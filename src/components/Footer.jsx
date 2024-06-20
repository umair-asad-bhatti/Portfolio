import phoneLight from '../assets/icons/phoneLight.png'
import phoneDark from '../assets/icons/phoneDark.png'
import emailLight from '../assets/icons/emailLight.png'
import emailDark from '../assets/icons/emailDark.png'
export default function Footer() {
    return (
        <div>
            <footer className="footer p-10 text-neutral-content">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Mobile App development</a>
                    <a className="link link-hover">Web app development</a>
                    <a className="link link-hover">API development</a>
                    <a className="link link-hover">Backend development</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover flex justify-center items-center gap-1">
                        <img src={phoneDark} className='w-5 h-5 dark:block hidden' />
                        <img src={phoneLight} className='w-5 h-5 dark:hidden block' />
                        03154258376
                    </a>
                    <a className="link link-hover flex justify-center items-center gap-1">
                        <img src={emailDark} className='w-5 h-5 dark:block hidden' />
                        <img src={emailLight} className='w-5 h-5 dark:hidden block' />
                        aumairasad@gmail.com
                    </a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

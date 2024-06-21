import phoneLight from '../assets/icons/phoneLight.png'
import phoneDark from '../assets/icons/phoneDark.png'
import emailLight from '../assets/icons/emailLight.png'
import emailDark from '../assets/icons/emailDark.png'
import linkedinDark from '../assets/icons/linkedinDark.png'
import linkedinLight from '../assets/icons/linkedinLight.png'
import githubDark from '../assets/icons/githubDark.png'
import githubLight from '../assets/icons/githubLight.png'
import { LINKS } from '../constants/Links'
import CustomLink from './CustomLink'
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
                    <h6 className="footer-title">About Company (Team Forge App)</h6>
                    <a className="link link-hover">Google Link</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <ul className='flex flex-col gap-2'>
                        <CustomLink link={'/'} title='03154258376' lightImg={phoneLight} darkImg={phoneDark} />
                        <CustomLink link={'/'} title='aumairasad@gmail.com' lightImg={emailLight} darkImg={emailDark} />
                        <CustomLink link={LINKS.linkedIn} title='LinkedIn' lightImg={linkedinLight} darkImg={linkedinDark} />
                        <CustomLink link={LINKS.github} title='Github' lightImg={githubLight} darkImg={githubDark} />
                    </ul>
                </nav>
            </footer>
        </div>
    )
}

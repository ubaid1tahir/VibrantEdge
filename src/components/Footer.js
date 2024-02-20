import style from '@/app/projects.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <section className="info_section">
                <div className="container px-10">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="info_logo">
                                <a className="navbar-brand" href="index.html">
                                    <span> VibrantEdge </span>
                                </a>
                                <p>
                                    Elevating brands with dynamic digital strategies tailored for success in today&apos;s competitive landscape.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_links">
                                <h5>Useful Link</h5>
                                <ul>
                                    <li className={`${style.links}`}>
                                        <Link href=""> About Us </Link>
                                    </li>
                                    <li className={`${style.links}`}>
                                        <Link href=""> Our Services </Link>
                                    </li>
                                    <li className={`${style.links}`}>
                                        <Link href=""> Our Portfolio </Link>
                                    </li>
                                    <li className={`${style.links}`}>
                                        <Link href=""> Contact Us </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_info">
                                <h5>Contact Us</h5>
                            </div>
                            <div className="info_contact">
                                <a href="" className="">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span> Lorem ipsum dolor sit amet, </span>
                                </a>
                                <a href="" className="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span> Call : +01 1234567890 </span>
                                </a>
                                <a href="" className="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span> demo@gmail.com </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_form">
                                
                                <div className="social_box">
                                    <a href="">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-youtube" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="container-fluid footer_section">
                <p>
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </p>
                    
                
            </footer>
        </>
    )
}
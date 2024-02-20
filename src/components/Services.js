

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


export default function Services() {
    return (
        <section className="service_section layout_padding" id="services">
            <div className="container px-10">
                <div className="heading_container heading_center">
                    <h2>Our services</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="box" style={{minHeight: '376px'}}>
                            <div className="img-box">
                            <i classname="fa-solid fa-magnifying-glass-dollar"></i>
                            </div>
                            <div className="detail-box">
                                <h6>Search Engine Optimization (SEO)</h6>
                                <p>
                                    Detail the agency&apos;s approach to optimizing websites for
                                    improved search engine rankings and increased organic traffic.
                                </p>
                                <Link href=""> Read More </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box" style={{minHeight: '376px'}}>
                            <div className="img-box">
                            </div>
                            <div className="detail-box">
                                <h6>Pay-Per-Click (PPC) Advertising</h6>
                                <p>
                                    Describe how the agency creates targeted PPC campaigns to
                                    drive qualified leads and maximize ROI
                                </p>
                                <Link href=""> Read More </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box" style={{minHeight: '376px'}}>
                            <div className="img-box">
                               
                            </div>
                            <div className="detail-box">
                                <h6>Social Media Management</h6>
                                <p>
                                    Explain the agency&apos;s social media strategies for building
                                    brand awareness, engaging audiences, and driving conversions.
                                </p>
                                <Link href=""> Read More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
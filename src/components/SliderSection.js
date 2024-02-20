import Link from "next/link"

export default function SliderSection() {
    return (
        <section className="slider_section container">
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="detail-box pl-5">
                                    <h1>Elevate Your Online Presence <br /></h1>
                                    
                                    <p>Strategic Digital Solutions Tailored for Success</p>
                                    <div className="btn-box">
                                        <Link href="#about" className="btn-1">Learn More</Link>
                                        <Link href="" className="btn-2">Get Started Today</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="detail-box">
                                    <h1>Data-Driven Strategies <br /></h1>
                                    <p>
                                        Unlock the Power of Analytics for Enhanced Performance
                                    </p>
                                    <div className="btn-box">
                                        <Link href="" className="btn-1">Discover More</Link>
                                        <Link href="" className="btn-2">Request a Consultation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="detail-box">
                                    <h1>Engage Your Audience <br /></h1>
                                    <p>
                                        Craft Compelling Content to Connect with Your Customers
                                    </p>
                                    <div className="btn-box">
                                        <Link href="" className="btn-1">Explore Services</Link>
                                        <Link href="" className="btn-2">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container idicator_container">
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    ></li>
                </ol>
            </div>
        </div>
    </section>
    )
}
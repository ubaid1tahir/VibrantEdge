import Image from "next/image";

export default function Client() {
    return (
        <section className="client_section layout_padding">
            <div className="container px-10">
                <div className="heading_container heading_center">
                    <h2>What is says our clients</h2>
                </div>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="box">
                                <div className="img-box">
                                    <Image width={100} height={100} src="/images/client.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h4>TechTrend Innovations</h4>
                                    <p>
                                        Working with the team at TechTrend Innovations has been an
                                        absolute game-changer for our business. Their expertise in
                                        digital marketing strategies has significantly boosted our
                                        online visibility and led to tangible growth in our customer
                                        base. Highly recommend their services!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="box">
                                <div className="img-box">
                                <Image width={100} height={100} src="/images/client.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h4>GloBrite Solutions</h4>
                                    <p>
                                        GloBrite Solutions has been instrumental in helping us
                                        navigate the complex world of digital marketing. Their
                                        tailored strategies and dedicated team have consistently
                                        delivered outstanding results, driving increased website
                                        traffic and conversions. Partnering with them has been a
                                        game-changer for our business.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="box">
                                <div className="img-box">
                                <Image width={100} height={100} src="/images/client.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h4>InnoVista Tech</h4>
                                    <p>
                                        InnoVista Tech&apos;s digital marketing expertise has been
                                        invaluable to our company&apos;s growth. Their innovative
                                        strategies and attention to detail have helped us stand out
                                        in a competitive market. Their team is professional,
                                        responsive, and always goes above and beyond to deliver
                                        exceptional results. Highly recommended!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel_btn-box">
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="prev"
                        >
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="next"
                        >
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
import Image from 'next/image'
import style from '../app/projects.module.css'
import Link from 'next/link'

export default function Projects() {
    return (
        <section className="team_section layout_padding" id="projects">
            <div className="container px-10">
                <div className="heading_container heading_center">
                    <h2>Our Projects</h2>
                    <p>
                        Explore our showcase projects to witness our digital marketing prowess. From SEO triumphs to engaging social media strategies, discover how we drive success for businesses like yours.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <Image width={300} height={300} src="/images/t1.jpg" alt="" />
                            </div>

                        </div>
                        <div className={`${style.detail} detail-box`}>
                            <h5>SEO Mastery</h5>
                            <h6 className="">Driving Organic Growth for Local Retailer</h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                            <Image width={300} height={300} src="/images/t2.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${style.detail} detail-box`}>
                            <h5>Social Media Engagement</h5>
                            <h6 className="">Elevating Brand Presence for E-Commerce Giant</h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mx-auto">
                        <div className="box">
                            <div className="img-box">
                            <Image width={300} height={300} src="/images/t3.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${style.detail} detail-box`}>
                            <h5>Content Marketing Triumph</h5>
                            <h6 className="">Building Thought Leadership for B2B Tech Firm</h6>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <Link href=""> View All </Link>
                </div>
            </div>
        </section>
    )
}
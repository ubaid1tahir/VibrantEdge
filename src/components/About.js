import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="about_section layout_padding" id="about">
            <div className="container px-10">
                <div className="row">
                    <div className="col-md-6 px-0">
                        <div className="img_container">
                            <div className="img-box">
                                <Image src="/images/about-img.jpg" width={300} height={300} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>Who Are We?</h2>
                            </div>
                            <p>
                                Welcome to VibrantEdge, where innovation meets expertise. We&apos;re
                                a passionate team dedicated to crafting tailored digital
                                solutions for your success. With a focus on transparency and
                                results, we&apos;re here to elevate your online presence and drive
                                meaningful growth. Let&apos;s embark on this journey together.
                            </p>
                            <div className="btn-box">
                                <Link href=""> Read More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
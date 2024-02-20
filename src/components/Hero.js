import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import SliderSection from "./SliderSection";

export default function Hero() {
    return (
        <div className="hero_area">
            <div className="hero_bg_box">
                <div className="img-box">
                    <Image src="/images/hero-bg.jpg" alt="Background" height={500} width={500} />
                </div>
            </div>


            <Navbar />
            
            <SliderSection />
        </div>
    )
}
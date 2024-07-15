import homeStyles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>
            {/*
            <div className={homeStyles.container}>

                <div className={homeStyles.overlay}>
                    <div className={homeStyles.overlay_container}>
                        <div className={homeStyles.container}>
                            <button className={homeStyles.overlay_button}>X</button>
                            <div className={homeStyles.overlay_message}>
                                This feature is not available yet.
                            </div>
                        </div>
                    </div>
                </div> 
                */}

                
                <div id={homeStyles.hero_section}>
                    <div className={homeStyles.hero_content}>
                        <h1 id={homeStyles.hero_text}>YOUR FEET DESERVE THE BEST</h1>
                        <p className={homeStyles.para}>
                            At Shoe Zone, we have everything you need to keep your
                            feet happy and healthy. Don&apos;t settle for less when
                            it comes to your feet.
                        </p>
    
                        <div className={homeStyles.hero_btn}>
                            <button className={`${homeStyles.shop_btn} ${homeStyles.btn}`}>Shop Now </button>
                            <button className={`${homeStyles.category_btn} ${homeStyles.btn}`}>Category</button>
                        </div>
    
                        <div>
                            <p>Also Available On</p>
    
                            <div className={homeStyles.brand_icons}>
                                <Link
                                    to="https://www.amazon.com/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <img
                                        src="/images/amazon.png"
                                        alt="amazon-logo"
                                    />
                                </Link>
                                <Link
                                    to="https://www.flipkart.com/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <img
                                        src="/images/flipkart.png"
                                        alt="flipkart-logo"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={homeStyles.hero_image}>
                        <img
                            id={homeStyles.hero_img}
                            src="/images/hero-image.png"
                            alt="hero-shoe-image"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

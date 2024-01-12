import aboutStyles from "./About.module.css";

export default function About() {
    return (
        <>
            <div className={aboutStyles.container}>
                <h2 className={aboutStyles.heading}>About Us</h2>
                <div
                    className={`${aboutStyles.container} ${aboutStyles.full_section}`}
                >
                    <div className={aboutStyles.section_1}>
                        <img
                            src="images/customer-satisfaction.png"
                            alt="Customer Satisfaction image"
                            className={aboutStyles.image}
                        />
                    </div>

                    <div className={aboutStyles.section_2}>
                        <h2 className={aboutStyles.subheading}>
                            <span className={aboutStyles.small_title}>
                                Shoe Zone :
                            </span> Where You Get More Than Just Shoes
                        </h2>
                        <p className={aboutStyles.para}>
                            At Shoe Zone, we care about your feet and your
                            satisfaction. That&apos;s why we offer you a wide
                            range of shoes for every occasion, style, and
                            budget. Whether you need casual sneakers, formal
                            heels, or sports shoes, we have it all. And we
                            don&apos;t stop there. We also provide you with free
                            fitting, exchange, and delivery services. Plus, you
                            can join our loyalty program and get exclusive
                            discounts and offers.
                        </p>
                        <p
                            className={`${aboutStyles.para} ${aboutStyles.para_2}`}
                        >
                            <span className={aboutStyles.text_highlight}>
                                Come to Shoe Zone today and experience the
                                difference.
                            </span> We are more than just a shoe store. We are your shoe
                            zone.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

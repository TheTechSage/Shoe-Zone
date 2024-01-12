import Button from "../button/Button";
import cFormStyles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("(empty)");
    const [email, setEmail] = useState("(empty)");
    const [message, setMessage] = useState("(empty)");
    const [dataButton, setDataButton] = useState("Show Data");
    const [showInfo, setShowInfo] = useState(false);

    const onSubmitFunc = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        if (!event.target[2].value) {
            setMessage("(empty)");
        } else setMessage(event.target[2].value);
    };

    const showHide = (e) => {
        e.preventDefault();
        if (e.target.innerText === "Show Data") {
            setShowInfo(true);
            setDataButton("Hide Data");
        } else {
            setShowInfo(false);
            setDataButton("Show Data");
        }
    };

    return (
        <>
            <section className={cFormStyles.container}>
                <div className={cFormStyles.contact_form}>
                    <div className={cFormStyles.btn_group}>
                        <Button
                            text="VIA CHAT"
                            icon={<MdMessage fontSize="1.2rem" />}
                        />
                        <Button
                            text="VIA CALL"
                            icon={<FaPhoneAlt fontSize="1rem" />}
                        />
                    </div>
                    <Button
                        isOutline={true}
                        text="VIA EMAIL"
                        icon={<HiMail fontSize="1.3rem" />}
                    />

                    <form id={cFormStyles.form} onSubmit={onSubmitFunc}>
                        <div className={cFormStyles.form_control}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id={cFormStyles.name}
                                name="name"
                                required
                            />
                        </div>
                        <div className={cFormStyles.form_control}>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id={cFormStyles.email}
                                name="email"
                                required
                            />
                        </div>
                        <div className={cFormStyles.form_control}>
                            <label htmlFor="message">Message</label>
                            <textarea id={cFormStyles.message} name="message" />
                        </div>
                        <div className={cFormStyles.btn_group}>
                            <Button text="SUBMIT" />
                            <Button onClick={showHide} text={dataButton} />
                        </div>

                        <div
                            style={{ display: showInfo ? "block" : "none" }}
                            className={cFormStyles.entered_data_block}
                        >
                            <p id={cFormStyles.data_heading}>
                                Entered Form Data:{" "}
                            </p>
                            <p className={cFormStyles.entered_data}>
                                Name : {name} <br />
                            </p>
                            <p className={cFormStyles.entered_data}>
                                Email : {email} <br />
                            </p>
                            <p className={cFormStyles.entered_data}>
                                Message : {message} <br />
                            </p>
                        </div>
                    </form>
                </div>
                <div className={cFormStyles.contact_image}>
                    <img
                        id={cFormStyles.contact_image}
                        src="/images/contact.svg"
                        alt="contact-image"
                    />
                </div>
            </section>
        </>
    );
}

import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

export default function Contact() {
    return (
        <>
            <div className="main_container">
                <ContactHeader />
                <ContactForm />
            </div>
        </>
    );
}
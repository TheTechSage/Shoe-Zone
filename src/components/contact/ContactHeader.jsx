import cHeaderStyles from "./ContactHeader.module.css";

export default function ContactHeader() {
    return (
        <>
            <div className={cHeaderStyles.contact_section_header}>
                <h1 className={cHeaderStyles.c_header_heading}>CONTACT US</h1>
                <p className={cHeaderStyles.c_header_para}>
                    Let&apos;s connect: We&apos;re here to help, and we&apos;d
                    love to hear from you! Whether you have a question, comment,
                    or just want to chat, you can reach out to us through the
                    contact form of this page, or by phone, email, or social
                    media.
                </p>
            </div>
        </>
    );
}
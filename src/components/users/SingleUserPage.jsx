import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import userStyles from "./Users.module.css";

const SingleUserPage = ({ single }) => {
    SingleUserPage.propTypes = {
        single: PropTypes.array,
    };
    return (
        <>
            <h1 className={userStyles.heading}>Single User Detail</h1>
            {single.map((item) => {
                return (
                    <>
                        <div className={userStyles.large_body}>
                            <div className={userStyles.section_1}>
                                <img
                                    className={userStyles.large_image}
                                    src={item.image}
                                    alt={`${item.username}'s image`}
                                />
                            </div>

                            <div className={userStyles.section_2}>
                                <h4 className={`${userStyles.text} bold-700`}>
                                    {item.firstName} {item.lastName}
                                </h4>
                                <p
                                    className={`${userStyles.text} ${userStyles.dummy_link}`}
                                >
                                    @{item.username}
                                </p>
                                <p className={userStyles.text}>
                                    <b>Email :</b> {item.email}
                                </p>
                                <p className={userStyles.text}>
                                    <b>Phone :</b> {item.phone}
                                </p>
                                <p className={userStyles.text}>
                                    <b>Gender :</b> {item.gender}
                                </p>

                                <h5
                                    className={`${userStyles.underline} bold-700`}
                                >
                                    Work Information
                                </h5>
                                <p className={userStyles.text}>
                                    <b>Company Name :</b> {item.company.name}
                                </p>
                                <p className={userStyles.text}>
                                    <b>Department :</b>{" "}
                                    {item.company.department}
                                </p>
                                <p className={userStyles.text}>
                                    <b>Title :</b> {item.company.title}
                                </p>
                                <p className={userStyles.text}>
                                    <b>Address :</b>{" "}
                                    {`${item.company.address.address}, ${item.company.address.city}, 
                                    ${item.company.address.state}-${item.company.address.postalCode}`}
                                </p>
                            </div>
                        </div>
                    </>
                );
            })}

            <Link
                to={`/users`}
                className={`button-global ${userStyles.button}`}
            >
                &lt; Go Back
            </Link>
        </>
    );
};
export default SingleUserPage;

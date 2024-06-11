import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import userStyles from "./Users.module.css";

export default function UserListPage(props) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUsers = () => {
            axios
                .get("https://dummyjson.com/users?limit=8")
                .then((val) => {
                    let value = val.data.users;
                    setUser(value);
                })
                .catch((error) =>
                    console.error("Error fetching users:", error)
                );
        };
        fetchUsers();
    }, []);

    const clickHandle = (item) => {
        props.setSingle([item]);
        UserListPage.propTypes = {
            setSingle: PropTypes.func,
        };
    };

    return (
        <>
            <h1 className={userStyles.heading}>
                Our Users
                <sup>
                    <span className={userStyles.TnC}>
                        (*dummy data from api)
                    </span>
                </sup>
            </h1>
            <div className={userStyles.user_list}>
                {user.map((data) => {
                    return (
                        <div
                            className={`${userStyles.custom_card} card-border-global`}
                            key={data.id}
                        >
                            <img
                                className={userStyles.small_image}
                                src={data.image}
                                alt={`${data.username}'s thumbnail`}
                            />
                            <div>
                                <p className={`${userStyles.text} bold-700`}>
                                    {data.firstName} {data.lastName}
                                </p>
                                <a
                                    className={`${userStyles.text} ${userStyles.dummy_link}`}
                                >
                                    @{data.username}
                                </a>
                                <p className={userStyles.text}>{data.company.title}</p>
                                <p className={userStyles.text}>{data.phone}</p>
                                <Link
                                    to={`./user/${data.id}`}
                                    onClick={() => clickHandle(data)}
                                    className={`button-global ${userStyles.button}`}
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

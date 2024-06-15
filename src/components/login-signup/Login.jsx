import { Link } from "react-router-dom";
import loginStyles from "./Login.module.css";
import { useState } from "react";

export default function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    // const [Submit, setSubmit] = useState("false");

    const handleSubmit = (event) => {
        event.preventDefault();
        // setSubmit("true");
        // setTimeout(setSubmit("false"), 2000);
    };

    return (
        <>
            {/* <div
                className={
                  Submit
                      ? `${loginStyles.dataSubmit}`
                      : `${loginStyles.dataNotSubmit}`
              } 
            >
                Data submitted successfully.
            </div> */}

            <form onSubmit={handleSubmit} className={loginStyles.form}>
                <p className={loginStyles.title}>Log-In </p>
                <p className={loginStyles.message}>Welcome Back! </p>

                <label>
                    <input
                        required=""
                        placeholder=""
                        type="email"
                        className={loginStyles.input}
                        value={Email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <span>Email</span>
                </label>

                <label>
                    <input
                        required=""
                        placeholder=""
                        type="password"
                        className={loginStyles.input}
                        value={Password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <span>Password</span>
                </label>

                <button className={loginStyles.submit} type="submit">
                    Submit
                </button>

                <p className={loginStyles.signup}>
                    Don&apos;t have an acount ?{" "}
                    <Link to="/signup">
                        <span id={loginStyles.signup}>Signup</span>
                    </Link>
                </p>
            </form>
        </>
    );
}

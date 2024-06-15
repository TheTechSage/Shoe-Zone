import { Link } from "react-router-dom";
import signupStyles from "./Signup.module.css";
import { useState } from "react";

export default function Signup() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            {/* <div className="formSubmitted">
                Form submitted successfully. 
            </div> */}

            <form onSubmit={handleSubmit} className={signupStyles.form}>
                <p className={signupStyles.title}>Sign-Up </p>
                
                <p className={signupStyles.message}>
                    Signup now and get full access to our app.{" "}
                </p>

                <div className={signupStyles.flex}>
                    <label>
                        <input
                            required
                            placeholder=""
                            type="text"
                            className={signupStyles.input}
                            value={FirstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input
                            placeholder=""
                            type="text"
                            className={signupStyles.input}
                            value={LastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input
                        required
                        placeholder=""
                        type="email"
                        className={signupStyles.input}
                        value={Email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <span>Email</span>
                </label>

                <label>
                    <input
                        required
                        placeholder=""
                        type="password"
                        className={signupStyles.input}
                        value={Password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <span>Password</span>
                </label>

                <label>
                    <input
                        required
                        placeholder=""
                        type="password"
                        className={signupStyles.input}
                        value={ConfirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    <span>Confirm password</span>
                </label>

                <button className={signupStyles.submit} type="submit">Submit</button>

                <p className={signupStyles.login}>
                    Already have an acount ?{" "}
                    <Link to="/login">
                        <span id={signupStyles.login}>Login</span>
                    </Link>
                </p>

            </form>
        </>
    );
}

import React, {useState} from "react";
import "./Home.css"


const RegistrationForm = ({
                              name,
                              city,
                              password,
                              email,
                              HandleChangePass,
                              HandleChangeCity,
                              HandleChangeName,
                              HandleChangeEmail,
                              OnSubmitForm
                          }) => {

    const checkPass = (pass) => {
        const beginWithoutDigit = /^\D.*$/
        const withoutSpecialChars = /^[^-() /]*$/
        const containLetters = /^.*[a-zA-Z]+.*$/

        return beginWithoutDigit.test(pass) &&
            withoutSpecialChars.test(pass) &&
            containLetters.test(pass);
    };

    const checkEmail = (email) => {
        const emailValidation = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

        return emailValidation.test(email);
    };

    const ValidForm = () => {
        return checkEmail(email) && checkPass(password);
    }

    return (
        <div className="block">
            <p>Registration From</p>

            <form>
                <div className={"formInput"}>
                    <label>Name</label>
                    <input
                           value={name}
                           onChange={event => HandleChangeName(event)}/>
                </div>

                <div className={"formInput"}>
                    <label>City</label>
                    <input
                           value={city}
                           onChange={event => HandleChangeCity(event)}/>
                </div>
                <div className={"formInput"}>
                    <label>Email</label>
                    <input
                           value={email}
                           onChange={event => HandleChangeEmail(event)}/>
                </div>
                <div className={"formInput"}>
                    <label>Password</label>
                    <input
                        value={password}
                        onChange={event => HandleChangePass(event)}/>
                </div>
                {ValidForm() && <button onClick={OnSubmitForm}>Save</button>}
            </form>
        </div>
    );
}
export default RegistrationForm;
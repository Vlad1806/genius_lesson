import React from "react";
import "./Home.css"


const AccountCard = ({name, city, email, OnReturnForm}) => {

    return (
        <div className="block">
            <p className={"accText"}>Account card</p>
            <div className={"formInput"}>
                <p className={"formInput"}>Name:</p>
                <p className={"formInput"}>{name}</p>
            </div>

            <div className={"formInput"}>
                <p className={"formInput"}>City:</p>
                <p className={"formInput"}>{city}</p>
            </div>

            <div className={"formInput"}>
                <p className={"formInput"}>Email:</p>
                <p className={"formInput"}>{email}</p>
            </div>

            <button onClick={OnReturnForm}>Return To Form</button>
        </div>
    );
};
export default AccountCard;
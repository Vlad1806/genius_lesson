import React, {useState} from "react";
import "./Home.css"
import AccountCard from "./AccountCard";
import RegistrationForm from "./RegistrationFrom";

// const Home = () => {
//
//     const [value, useValue] = useState(0);
//
//     const Increment = () => {
//         useValue(value + 1);
//     };
//     const Decrement = () => {
//         useValue(value - 1);
//     }
//     return (
//         <div className="block">
//             <p>Counter</p>
//             <p>{value}</p>
//             <div className={"btnBlock"}>
//                 <button type={"button"} onClick={Increment}>Increment</button>
//                 <button type={"button"} onClick={Decrement}>Decrement</button>
//             </div>
//         </div>
//     );
// }

const Home = () => {

    const [name, useName] = useState("");
    const [city, useCity] = useState("");
    const [email, useEmail] = useState("");
    const [password, usePassword] = useState("");
    const [acc, useAcc] = useState(false);

    const HandleChangeEmail = (event) => {
        useEmail(event.target.value);
    };
    const HandleChangeName = (event) => {
        useName(event.target.value);
    };
    const HandleChangeCity = (event) => {
        useCity(event.target.value);
    };
    const HandleChangePassword = (event) => {
        usePassword(event.target.value);
    };

    const OnSubmitForm = () => {

        useAcc(true);
    };
    const OnReturnForm = () => {

        useAcc(false);
    };

    return (
        <div className="block">
            {
                acc ?
                    <AccountCard
                        name={name}
                        city={city}
                        email={email}
                        OnReturnForm={OnReturnForm}
                    />
                    :
                    <RegistrationForm
                    HandleChangePass={HandleChangePassword}
                    HandleChangeCity={HandleChangeCity}
                    HandleChangeName={HandleChangeName}
                    HandleChangeEmail={HandleChangeEmail}
                    OnSubmitForm={OnSubmitForm}
                    name={name}
                    city={city}
                    password={password}
                    email={email}
                    />
            }
        </div>
    );
}
export default Home;
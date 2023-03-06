'use client';

import { useState } from "react";
import UserInput from "../login/UserInput";

export default function Page() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const attemptSignUp = async () => {

    }

    return (
        <div>
            <UserInput inputName="Username" updateState={setUserName} />
            <UserInput inputName="E-mail" updateState={setEmail} />
            <UserInput inputName="Password" updateState={setPassword} />
            <UserInput inputName="Confirm password" updateState={setCPassword} />
            <button onClick={attemptSignUp}>Sign up</button>
        </div>
    )
}
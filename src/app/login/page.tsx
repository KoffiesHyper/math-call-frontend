'use client';

import { useState } from "react";
import UserInput from "./UserInput";

export default function Page() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const attemptLogin = async () => {
        
    }

    return (
        <div>
            <UserInput inputName="Username" updateState={setUserName} />
            <UserInput inputName="Password" updateState={setPassword} />
            <button onClick={attemptLogin}>Login</button>
        </div>
    )
}
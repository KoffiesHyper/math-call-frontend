'use client';

import { Dispatch, SetStateAction } from 'react';
import styles from './UserInput.module.css';

type UserInputProps = {
    inputName: string,
    updateState: Dispatch<SetStateAction<string>>
}

export default function UserInput({ inputName, updateState }: UserInputProps) {

    const update = (ev: any) => {
        updateState(ev.target.value);
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.containers}>{inputName}</h3>
            <input className={styles.input} onChange={update} />
        </div>
    )
}
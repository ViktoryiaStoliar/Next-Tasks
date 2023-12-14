'use client';
import { useState } from "react";

export default function AddTask({ setButton }) {

    const [valAdd, setValAdd] = useState('');

    return (
        <>
            <input onChange={(e) => setValAdd(e.target.value)}></input>
            <button onClick={() => setButton(valAdd)}>Добавить задачу</button >
        </>
    )
}


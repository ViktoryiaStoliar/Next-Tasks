'use client'
import { useState } from "react";

export default function Task13() {

    const arr = ['dfhgflk', 'akjbglkjfad', 'dfkjgbld'];
    const [val, setVal] = useState();

    function random() {
        let item = arr[Math.floor(Math.random() * arr.length)];
        setVal(item)
    }

    return (
        <>
            <p>3. Напишите скрипт, который при нажатии на кнопку будет выводить случайное
                сообщение из заранее заданного списка.
            </p>

            <button onClick={random}>нажми на меня</button>
            <p>{val}</p>
        </>
    )
}
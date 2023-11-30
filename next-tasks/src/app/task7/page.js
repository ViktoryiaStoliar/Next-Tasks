'use client';

import { useState } from "react";

export default function Task7() {

    const [bool, setBool] = useState(false);

    function show() {
        (!bool) ? setBool(true) : setBool(false)
    }

    return (


        <>
            <h3>7. Создайте кнопки "Показать текст", "Скрыть текст", параграф.
                Используйте useState для отслеживания текущего выбора пользователя.
                В зависимости от выбора, отображайте соответствующий контент.
            </h3>

            <h5>{(!bool) ? 'Привет!' : ''}</h5>

            <button onClick={show }>Показать текст</button>
        </>
    )
}
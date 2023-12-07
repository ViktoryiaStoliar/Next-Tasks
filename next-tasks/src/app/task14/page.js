'use client'

import { useState } from "react"

export default function Task14() {

    const [val, setVal] = useState('')

    return (
        <>
            <p>4. Напишите код для отображения всплывающего окна с сообщением при
                наведении на определенный элемент на странице. (onMouseEnter onMouseLeave)</p>

            <button onMouseEnter={() => setVal('You click on me!')} onMouseLeave={() => setVal('')}>Кнопка</button>
            <div>{val}</div>
        </>
    )
}
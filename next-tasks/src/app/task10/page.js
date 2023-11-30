'use client';
import { useMemo, useState } from "react";

export default function Task10() {

    const [val, setVal] = useState();
    const [res, setRes] = useState();

    function factorial(n) {
        return n ? n * factorial(n - 1) : 1
    }

    useMemo(() => {
        setRes (factorial(val))
    }, [val])

    return (
        <>
            <p>10. Создайте компонент, в котором пользователь может ввести число. Используйте
                useMemo, чтобы вычислить факториал введенного числа. Выведите результат
                факториала на странице.</p>

            <input onChange={(e) => setVal(e.target.value)}></input>
            <p>{res}</p>
        </>
    )
}
// import Calculator from "./Calculator";
'use client';

import { useState } from "react";

const Task16 = () => {

    const [val, setVal] = useState('');

    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', "/"]

    return (
        <div>
            <p>
                6. Создайте калькулятор, который позволяет выполнять основные математические
                операции (сложение, вычитание, умножение, деление). Реализуйте два
                компонента. page.js: Содержит калькулятор. Calculator.js: Принимает введенные
                данные и выполняет математические операции для расчета итогового результата.
            </p>

            {/* <Calculator /> */}
            {arr.map((el) =>
                <button onClick={(e) =>
                    setVal(e.target.textContent)}>{el}</button>
            )}
            <h3>{val}</h3>

        </div>
    );
}

export default Task16;

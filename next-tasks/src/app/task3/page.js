'use client';
import { useState } from 'react';
import style from './style.module.css'

export default function Task3() {

    const [value, setValue] = useState('')

    function fillInput(e) {
        setValue(e.target.value)
    }

    function doCheck() {
        console.log(value);
    }

    return (
        <>
            <h1>
                3. Создайте форму для ввода данных. По клику на кнопку получите данные из input
                и отобразите в консоль
            </h1>

            <div className={style.form}>
                <div className={style.input1}><input placeholder='введите имя' onChange={fillInput}></input></div>
                <span><button onClick={doCheck}>Зарегистрироваться</button></span>
            </div >

        </>
    )
}
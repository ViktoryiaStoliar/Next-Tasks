'use client'
import style from './style.module.css';
import { useState } from "react"

export default function Task6() {

    const [bool, setBool] = useState(true)

    return (
        <>
            <div className={bool ? style.light : style.dark}>

                <h3 className={bool ? style.lightP : style.darkP}>
                    6. Создайте кнопку, которая позволяет пользователю переключаться
                    между светлой и темной темой интерфейса. Используйте useState, чтобы
                    отслеживать текущую тему. Применяйте соответствующие стили в зависимости от выбранной темы.
                </h3>

                <button className={style.btn} onClick={() => setBool(!bool)}>{bool ? 'dark' : 'light'}</button>

            </div>
        </>
    )
}
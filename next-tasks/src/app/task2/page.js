'use client'
import { useState } from 'react'
import style from './style.module.css'

export default function Task2() {

    const [obj, setObj] = useState({})
    // { name: "name"}, { surname: "surname"}, { mail: 'mail'}, { password: "password" }

    function fillInput(e) {
        setObj({ ...obj, [e.target.name]: e.target.value })
    }

    function doCheck() {
        if (!/^[a-zA-Z-_0-9]+@[a-z]+.[a-z]{2,10}/gm.test(obj.mail) ||
            !isNaN(obj.name) || !isNaN(obj.surname) || !obj.password.length) {
            alert(false)
        }
        alert(true)
    }

    return (
        <>
            <h1>
                2. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.
                По клику на кнопку проверить вводимые данные на регулярные выражения. В
                случае успешной валидации – alert(true)
            </h1>

            <div className={style.form}>
                <div className={style.input1}><input placeholder='введите имя' name="name" onChange={fillInput}></input></div>
                <div className={style.input2}><input placeholder='введите фамилию' name='surname' onChange={fillInput}></input></div>
                <div className={style.input3}><input placeholder='введите электронную почту' name='mail' onChange={fillInput}></input></div>
                <div className={style.input3}><input placeholder='введите пароль' name='password' onChange={fillInput}></input></div>
                <span><button onClick={doCheck}>Зарегистрироваться</button></span>
            </div >

        </>
    )
}
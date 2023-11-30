'use client';
import { useEffect, useState } from "react";
import axios from 'axios';
 

export default function Task8() {

    const [value, setValue] = useState('')

    async function getIP() {
        const res = await axios.get('https://api.ipify.org/?format=json')
        setValue(res.data.ip)
    }

    useEffect(() => {
        getIP()
    }, [])

    return (
        <>
            <p>8. Создайте компонент, который выполняет запрос к API
                https://api.ipify.org/?format=json и отображает
                полученные данные в заголовок. (решить задачу через клиентский компонент)
            </p>

            <h2>{value}</h2>
        </>
    )
}
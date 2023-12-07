'use client';
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { useState } from "react";

export default function Task15() {

    const [valAdd, setValAdd] = useState('');
    const [button, setButton] = useState('');

    return (
        <>
            <p>5. Реализуйте компонент TaskList.js для отображения списка задач и AddTask.js для
                добавления новых задач. Страница page.js должна содержать оба компонента.
            </p>

            <TaskList button={button}/>
            <AddTask valAdd={valAdd} setValAdd={setValAdd} setButton={setButton}/>
        </>
    )
}
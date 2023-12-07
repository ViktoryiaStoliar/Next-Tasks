'use client'

export default function AddTask({ valAdd, setValAdd, setButton }) {

    return (
        <>
            <input onChange={(e) => setValAdd(e.target.value)}></input>
            <button onClick={() => setButton(valAdd)}>Добавить задачу</button >
        </>
    )
}
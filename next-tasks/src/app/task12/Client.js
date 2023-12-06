'use client';

export default function Client({ Input }) {
    return (
        <>
            <Input></Input>
            <Input></Input>
            <button onClick={() => alert('click')}>Зарегаться</button>

        </>
    )
}
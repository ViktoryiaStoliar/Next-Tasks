'use client'
1
export default function Task5() {

    const arr = ["New York", "London", "Tokyo", "Paris", "Berlin"];

    function onCh(e) {
        console.log(e.target.textContent);
    }

    return (
        <>
            <h1>
                5. Создайте массив данных, представляющий элементы, которые вы хотите
                отобразить в списке используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"].
                Добавить событие клика с распознаванием на какой именно li был совершен клик
            </h1>

            <ul>
                {arr.map((el, i) => (<li  onClick={onCh} key={i}>{el}</li>))}
            </ul >
        </>
    )
}
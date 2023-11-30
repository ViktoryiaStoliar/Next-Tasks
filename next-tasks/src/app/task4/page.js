export default function Task4() {

    const arr = ["New York", "London", "Tokyo", "Paris", "Berlin"];

    return (
        <>
            <h4>
                4. Создайте массив данных, представляющий элементы, 
                которые вы хотите отобразить в списке используя map. 
                ["New York", "London", "Tokyo", "Paris", "Berlin"]
            </h4>

            <ul>
                {arr.map((el) => (<li>{el}</li>))}
            </ul>
        </>
    )
}
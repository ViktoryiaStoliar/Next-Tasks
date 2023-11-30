import axios from 'axios';

export default async function Task9() {

    async function getIP() {
        const res = await axios.get('https://api.ipify.org/?format=json')
        return res.data.ip
    }

    const result = await getIP()

    return (
        <>
            <h3>9. Создайте компонент, который выполняет запрос к API
                https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
                (решить задачу через серверный компонент)
            </h3>

            <p>{result}</p>
        </>
    )
}
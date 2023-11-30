import style from './style.module.css'

export default function Task1() {
    return (
        <>
            <h3>
                1. Создайте форму для ввода имени,
                фамилии, адреса электронной почты и пароля.
            </h3>
            
            <div className={style.form}>
                <div className={style.input1}><input placeholder='введите имя'></input></div>
                <div className={style.input2}><input placeholder='введите фамилию'></input></div>
                <div className={style.input3}><input placeholder='введите электронную почту'></input></div>
                <div className={style.input3}><input placeholder='введите пароль'></input></div>
                <span><button>Зарегистрироваться</button></span>
            </div >

        </>
    )
}
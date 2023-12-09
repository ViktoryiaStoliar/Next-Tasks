import { useState } from "react";

const Calculator = () => {

    const [val, setVal] = useState(0)

    return (
        <div>
            <input onChange={(e) => setVal(e.target.value)}></input>
            {/* <button onClick={ }>Вычислить</button> */}
        </div>
    );
}

export default Calculator;

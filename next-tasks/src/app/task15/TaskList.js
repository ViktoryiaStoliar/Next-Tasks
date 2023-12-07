'use client';

import { useState, useEffect } from "react";

const TaskList = ({ button }) => {

    const [val, setVal] = useState(['dkfgk', 'kjdgf', 'sdkgkjs', 'akgfkhas']);
    useEffect(() => setVal([...val, button]), [button])

    return (
        <>
            <ul>
                {val.map((el) => (
                    <li>{el}</li>
                ))}
            </ul>
        </>
    );
}

export default TaskList;

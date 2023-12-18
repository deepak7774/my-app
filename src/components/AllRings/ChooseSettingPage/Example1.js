import React, { useState } from 'react'

export const Example1 = () => {

    const [t, setT] = useState(
        window.localStorage.getItem('t')
    )

    const setLocalStorage = value => {
        try {
            setT(value)
            window.localStorage.setItem("t", value)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <textarea
                onChange={e => setLocalStorage(e.target.value)}
                value={t}
                placeholder='gggggg'
            />
        </div>
    )
}

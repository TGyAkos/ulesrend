"use client";

import { useRef, useState } from "react"


export default function BookPage() {
    const [counter, setCounter] = useState(20);
    const [imastring, setImastring] = useState('');
    const inputRef = useRef(null);

    const increase = () => { setCounter(counter + 1) }
    const decrease = () => { setCounter(counter - 1) }
    const reset = () => { setCounter(0) }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImastring(event.target.value);

        console.log(event.target.value)
    }

    return (
        <div>
            <h1 style={{ fontSize: counter }}>Book Counter {counter}</h1>
            <button onClick={increase} className="text-xl hover:bg-white-400">+</button>
            <button onClick={decrease} className="text-xl">-</button>
            <button onClick={reset}>RESET</button>
            <br />
            <input
                className="bg-black"
                type="text"
                value={imastring}
                onChange={handleChange}
                ref={inputRef}
            />
            <BookCounter
                someString={imastring}
            />
            <BookCounter
                someString={"ASD ASD"}
            />
            <SubmitButton
                valueToSave={imastring}
                inputRef={inputRef}
            />
        </div >
    )
}

function BookCounter({
    someString

}: {
    someString: string

}) {
    return (
        <h1>Book Counter {someString}</h1>
    )
}

function SubmitButton({
    valueToSave,
    inputRef
}: {
    valueToSave: string
    inputRef: React.RefObject<HTMLInputElement>
}) {


    function handleSubmit() {
        console.log(inputRef.current?.value);
        console.log(JSON.stringify({ data: valueToSave }));

        fetch('http://localhost:3000/books/add', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ data: valueToSave }),
        })

    }

    return (
        <button
            onClick={handleSubmit}
            className="text-xl hover:bg-blue-400"
        >Submit</button>

    )
}
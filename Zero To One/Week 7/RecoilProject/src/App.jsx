import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, eventSelector } from './store/count'

function App() {
    return (
        <>
            <RecoilRoot>
                <Count></Count>
            </RecoilRoot>
        </>
    )
}

function Count() {

    return (
        <>
            <CountRenderer></CountRenderer>
            <Buttons></Buttons>
        </>
    )
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);

    return (
        <>
            {count}
            <IsEven></IsEven>
        </>
    )
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom);

    return (
        <>
            <button onClick={() => setCount((count) => count + 1)} >Increase</button>
            <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
        </>
    )
}

function IsEven() {
    const isEven = useRecoilValue(eventSelector);

    return (
        <>
            {isEven ? "It is an even number" : null}
        </>
    )
}

export default App

import { useState } from 'react'

import Die from './Die'

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function arrTenRandNumbers() {
    return Array(10).fill(0).map(x => getRandomArbitrary(1,7))
}

function App() {
    const dies = arrTenRandNumbers().map(x => <Die number={x}/>)
    return (
        <main>
            <div className="die-container">
                {dies}
            </div>  
        </main>
    )
}

export default App

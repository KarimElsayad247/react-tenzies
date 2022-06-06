import { useState } from 'react'

import Die from './Die'

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function arrTenRandNumbers() {
    return Array(10).fill(0).map(x => getRandomArbitrary(1,7))
}

function App() {

    const [dice, setDice] = useState(() => arrTenRandNumbers())

    function roll() {
        setDice(arrTenRandNumbers())
    }

    const diceElems = dice.map((x, i) => <Die key={i} number={x}/>)
    return (
        <main>
            <div className="die-container">
                {diceElems}
            </div>  
            <button className='roll-button' onClick={roll} >Roll</button>
        </main>
    )
}

export default App

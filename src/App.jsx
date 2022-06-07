import { useState } from 'react'
import { nanoid } from 'nanoid';
import Die from './Die'

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function arrTenRandNumbers() {
    return Array(10).fill(0).map(x => getRandomArbitrary(1,7));
}

function App() {
    
    function tenRandomDice() {
        return arrTenRandNumbers().map(num => {
            return {
                id: nanoid(),
                value: num,
                isHeld: true
            };
        });
    }

    const [dice, setDice] = useState(() => tenRandomDice());

    function holdDice(id) {
        setDice(prevDice => prevDice.map(die => ({
            ...die,
            isHeld: die.id == id ? !die.isHeld : die.isHeld
        })))
    }

    function roll() {
        setDice(tenRandomDice());
    }

    const diceElems = dice.map(die => (
        <Die 
            key={die.id} 
            number={die.value} 
            isHeld={die.isHeld}
            hold={() => holdDice(die.id)}
        />
    ));

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

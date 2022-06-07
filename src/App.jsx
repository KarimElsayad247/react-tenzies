import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import Confetti, { ReactConfetti } from 'react-confetti';
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
                isHeld: false
            };
        });
    }

    // Whether player won the game or not
    const [tenzies, setTenzies] = useState(false)

    // Initial values for dice
    const [dice, setDice] = useState(() => tenRandomDice());

    useEffect(() => {
        const firstNum = dice[0].value;
        const hasWon = dice.every(die => die.isHeld && die.value === firstNum);
        if (hasWon) {
            setTenzies(true)
            console.log("You win!");
        }
    }, [dice])

    // Invert the isHeld property of the clicked die
    // The clicked die is the one providing id
    function holdDice(id) {
        setDice(prevDice => prevDice.map(die => ({
            ...die,
            isHeld: die.id == id ? !die.isHeld : die.isHeld
        })))
    }

    function roll() {
        if (tenzies) {
            setDice(tenRandomDice());
            setTenzies(false);
            return;
        }
        setDice(prevDice => prevDice.map(die => ({
            ...die, 
            value: die.isHeld ? die.value : getRandomArbitrary(1, 7)
        })));
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
            {tenzies && <Confetti />}
            <div className='text-container'>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div className="die-container">
                {diceElems}
            </div>  
            <button className='roll-button' onClick={roll} >{tenzies ? "New game" : "Roll"}</button>
        </main>
    )
}

export default App

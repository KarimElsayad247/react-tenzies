import { useState } from 'react'

import Die from './Die'

function App() {
    const dies = []
    for (let i = 0; i < 10; i++) {
        dies.push(<Die number={i % 6 + 1}/>)
    }
    return (
        <main>
            <div className="die-container">
                {dies}
            </div>  
        </main>
    )
}

export default App

import { useState } from 'react';
import './App.css';
import Action from './components/Action';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="flex justify-center p-10">
                <div className="">
                    <div className="mb-5">
                        <h1 className="font-bold text-4xl">Islam info</h1>
                        <p>Free islamic info and content</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <Action title="Read the quran" emoji="📖" path="/quran"></Action>
                        <Action title="Questions and answers" emoji="❓️" path="questions"></Action>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

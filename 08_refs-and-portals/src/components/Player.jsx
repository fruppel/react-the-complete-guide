import {useState, useRef} from 'react';

export default function Player() {

    let playerName = useRef();
    let [enteredPlayerName, setEnteredPlayerName] = useState(null);


    function handleClick() {
        setEnteredPlayerName(playerName.current.value);
    }

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? 'Unknown'}!</h2>
            <p>
                <input type="text" ref={playerName} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}

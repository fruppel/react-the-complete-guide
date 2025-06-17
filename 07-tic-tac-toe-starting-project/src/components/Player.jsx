import {useState} from 'react';

export default function Player({initialName, symbol, isActive, onPlayerNameChange}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if (isEditing === true) {
            onPlayerNameChange(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive === true ? 'active' : null}>
            <span className="player">
                {isEditing === true
                    ? <input type="text" value={playerName} onChange={handleChange} required />
                    : <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

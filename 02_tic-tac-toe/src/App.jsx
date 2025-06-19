import {useState} from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import {WINNING_COMBINATIONS} from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const PLAYERS = {
    'X': 'Player 1',
    'O': 'Player 2'
}

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return currentPlayer;
}

function deriveWinner(gameBoard, players) {
    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (
            firstSquareSymbol !== null
            && firstSquareSymbol === secondSquareSymbol
            && firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol];
        }
    }

    return winner;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function App() {
    const [players, setPlayers] = useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && winner === null;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            let currentPlayer = deriveActivePlayer(prevTurns);

            return [
                {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
                ...prevTurns
            ];
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName,
            };
        });
    }

    return <main>
        <div id="game-container">
            <ol id="players" className='highlight-player'>
                <Player
                    initialName="Player 1"
                    symbol="X"
                    isActive={activePlayer === 'X'}
                    onPlayerNameChange={handlePlayerNameChange}
                />
                <Player
                    initialName="Player 2"
                    symbol="O"
                    isActive={activePlayer === 'O'}
                    onPlayerNameChange={handlePlayerNameChange}
                />
            </ol>
            {(winner || hasDraw) &&
                <GameOver
                    winner={winner}
                    onRestart={handleRestart}
                />
            }
            <GameBoard
                board={gameBoard}
                onSelectSquare={handleSelectSquare}
            />
        </div>
        <Log turns={gameTurns} />
    </main>;
}

export default App

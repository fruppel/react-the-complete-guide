export default function Log({turns}) {

    return <ol id="log">
        {turns.map(turn => {
            const {row, col} = turn.square;
            const listKey = `${row}-${col}`;

            return <li key={listKey}>{turn.player} placed at [{row}][{col}]</li>;
        })}
    </ol>;
}

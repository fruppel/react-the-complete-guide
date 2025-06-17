export default function UserInput({label, value, onChange}) {
    return <div>
        <label>{label}</label>
        <input
            type="number"
            value={value}
            onChange={(event) => onChange(parseFloat(event.target.value))}
            required
        />
    </div>;
}

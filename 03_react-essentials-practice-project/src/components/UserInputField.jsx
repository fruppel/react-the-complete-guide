export default function UserInputField({type, label, value, onChange}) {
    return <div>
        <label>{label}</label>
        <input
            type="number"
            value={value}
            onChange={(event) => onChange(type, event.target.value)}
            required
        />
    </div>;
}

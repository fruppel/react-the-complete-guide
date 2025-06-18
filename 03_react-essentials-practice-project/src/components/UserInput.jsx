import UserInputField from './UserInputField.jsx';

export default function UserInput({userInput, onChange}) {
    return <section id="user-input">
        <div className="input-group">
            <UserInputField
                type="initialInvestment"
                label="Initial Investment"
                value={userInput.initialInvestment}
                onChange={onChange}
            />
            <UserInputField
                type="annualInvestment"
                label="Annual Investment"
                value={userInput.annualInvestment}
                onChange={onChange}
            />
        </div>
        <div className="input-group">
            <UserInputField
                label="Expected Return"
                value={userInput.expectedReturn}
                onChange={onChange}
            />
            <UserInputField
                label="Duration"
                value={userInput.duration}
                onChange={onChange}
            />
        </div>
    </section>;
}

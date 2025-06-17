import {useState} from 'react';
import investementCalculatorLogo from './assets/investment-calculator-logo.png';
import {calculateInvestmentResults, formatter} from './util/investment.js';
import UserInput from './components/UserInput.jsx';

function App() {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [annualInvestment, setAnnualInvestment] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    function deriveResults() {
        let calculatedResults = calculateInvestmentResults({
            initialInvestment, annualInvestment, expectedReturn, duration
        });

        let totalInterest = 0;
        let totalInvested = parseFloat(initialInvestment);

        return calculatedResults.map(result => {
            totalInterest += result.interest;
            totalInvested += result.annualInvestment;

            return {
                ...result,
                totalInterest: totalInterest,
                totalInvested: totalInvested
            }
        });
    }

    const results = deriveResults();

    return (
        <>
            <section id="header">
                <img src={investementCalculatorLogo} alt="Calculator logo"/>
                <h1>React Investment Calculator</h1>
            </section>

            <section id="user-input">
                <div className="input-group">
                    <UserInput label="Initial Investment" value={initialInvestment} onChange={setInitialInvestment}/>
                    <UserInput label="Annual Investment" value={annualInvestment} onChange={setAnnualInvestment}/>
                </div>
                <div className="input-group">
                    <UserInput label="Expected Return" value={expectedReturn} onChange={setExpectedReturn}/>
                    <UserInput label="Duration" value={duration} onChange={setDuration}/>
                </div>
            </section>

            <section id="result">
                <table>
                    <thead>
                    <tr>
                        <td>Year</td>
                        <td>Investment Value</td>
                        <td>Interest (Year)</td>
                        <td>Total Interest</td>
                        <td>Invested Capital</td>
                    </tr>
                    </thead>
                    <tbody>
                    {results.map((row) => <tr key={row.year}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(row.totalInterest)}</td>
                        <td>{formatter.format(row.totalInvested)}</td>
                    </tr>)}
                    </tbody>
                </table>
            </section>
        </>

    )
}

export default App

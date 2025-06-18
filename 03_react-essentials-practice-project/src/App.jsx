import {useState} from 'react';
import {deriveResults} from './util/result.js';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';

function App() {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [annualInvestment, setAnnualInvestment] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    const results = deriveResults(initialInvestment, annualInvestment, expectedReturn, duration);

    return (
        <>
            <Header />
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
            <Result results={results} />
        </>

    )
}

export default App

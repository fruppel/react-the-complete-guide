import {useState} from 'react';
import {deriveResults} from './util/result.js';
import Header from './components/Header.jsx';
import Result from './components/Result.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 900,
        expectedReturn: 5.5,
        duration: 10
    });

    function updateUserInput(key, value) {
        setUserInput(prevState => {
            return {
                ...prevState,
                [key]: +value,
            };
        });
    }

    const results = deriveResults(userInput);

    return (
        <>
            <Header />
            <UserInput userInput={userInput} onChange={updateUserInput} />
            <Result results={results} />
        </>

    );
}

export default App

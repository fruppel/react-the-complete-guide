import {calculateInvestmentResults} from './investment.js';

export function deriveResults(userInput) {
    let calculatedResults = calculateInvestmentResults(userInput);

    let totalInterest = 0;

    return calculatedResults.map(result => {
        totalInterest += result.interest;

        return {
            ...result,
            totalInterest: totalInterest,
        }
    });
}

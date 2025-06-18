import {calculateInvestmentResults} from './investment.js';

export function deriveResults(initialInvestment, annualInvestment, expectedReturn, duration) {
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

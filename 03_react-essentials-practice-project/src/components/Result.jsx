import {formatter} from '../util/investment.js';

export default function Result({results}) {
    return <section id="result">
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
            {results.map((row) => {
                let totalInvested = row.valueEndOfYear - row.interest;
                return <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{formatter.format(row.valueEndOfYear)}</td>
                    <td>{formatter.format(row.interest)}</td>
                    <td>{formatter.format(row.totalInterest)}</td>
                    <td>{formatter.format(totalInvested)}</td>
                </tr>;
            })}
            </tbody>
        </table>
    </section>;
}

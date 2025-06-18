import investementCalculatorLogo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return <section id="header">
        <img src={investementCalculatorLogo} alt="Calculator logo"/>
        <h1>React Investment Calculator</h1>
    </section>
}

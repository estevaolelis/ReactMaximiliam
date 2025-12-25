import Logo from '../assets/investment-calculator-logo.png'

export default function Header() {
  return (
    <header id="header">
      <img
        src={Logo}
        alt="image of money"
      />
      <p>Investment Calculator</p>
    </header>
  );
}

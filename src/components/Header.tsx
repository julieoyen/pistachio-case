import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className="p-6">
      <img src={logo} alt="" className="max-h-10" />
    </header>
  );
}

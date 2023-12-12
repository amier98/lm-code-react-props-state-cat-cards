interface catNumber {
  catNumber: number;
  dogNumber: number;
}

const Header: React.FC<catNumber> = ({ catNumber, dogNumber }) => (
  <header className="header__container">
    <h1 className="header__title header__welcome">Welcome to React!</h1>
    <h2 className="header__title">
      Cats: {catNumber} Dogs: {dogNumber}
    </h2>
  </header>
);

export default Header;

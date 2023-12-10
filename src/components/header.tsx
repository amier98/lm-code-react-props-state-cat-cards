
interface catNumber {
	catNumber: number
}

const Header: React.FC<catNumber> = ({ catNumber }) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			{catNumber}
		</h2>
	</header>
);

export default Header;

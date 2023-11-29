function Header({ text, bgColor, color }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  color: 'red',
};

export default Header;

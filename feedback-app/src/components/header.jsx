function Header({ text }) {
  return (
    <div className="container">
      <h1>{text}</h1>
    </div>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
};
export default Header;

import "./Header.css";
const Header = () => {
  const refresheHandler = () => {
    localStorage.getItem("meme-items");
    console.log("working");
    localStorage.removeItem("meme-items");
    window.location.reload();
  };
  return (
    <header className="header">
      <button onClick={refresheHandler}>Refresh</button>
    </header>
  );
};

export default Header;

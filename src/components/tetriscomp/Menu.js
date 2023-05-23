const Menu = ({ onClick }) => {
  return (
    <div className="Menu">
      <h1>RULES</h1>
      <button className="btn" onClick={onClick}>
        Start Game!
      </button>
    </div>
  )
}

export default Menu

const Menu = ({ onClick }) => {
  return (
    <div className="Menu">
      <button className="btn" onClick={onClick}>
        Start Game!
      </button>
    </div>
  )
}

export default Menu

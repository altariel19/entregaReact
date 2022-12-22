function NavBar() {
  return (
    <nav>
      <ul>
      <img src="../img/anima.gif" alt="" />
        <li>
          <a href="/">
            <h4>Mi Tienda</h4> 
          </a>
        </li>
        <li>
          <a href="/">Micros</a>
        </li>
        <li>
          <a href="/">Placas</a>
        </li>
      </ul>
      {/* <CartWidget></CartWidget> */}
      <span>🛒</span>
    </nav>
  );
}

export default NavBar;

export function Nav() {
  return (
    <header className="nav">
      <a className="nav-brand" href="#top">
        ORRIS
      </a>
      <nav className="nav-links" aria-label="Primary">
        <a href="#ritual">Ritual</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#shop">Shop</a>
      </nav>
      <a className="nav-cta" href="#shop">
        Shop creams
      </a>
    </header>
  )
}

import { navLinks } from '../../constants'

const Navbar = () => {
  return (
    <header className="px-6 py-4">
        <nav className="flex justify-between align-center">
            <img src="/logo.svg" alt="Apple" />

            <ul className="flex gap-6">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href="#">{link.name}</a>
                    </li>
                ))}
            </ul>

            <div className="flex-center gap-3">
                <button className="icon-search">
                    <img src="/search.svg" alt="Search" />
                </button>
                <button className="icon-search">
                    <img src="/cart.svg" alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar

import "../App.css"
const Navlinks = [ {
    id: "shop",
    title: "Shop",
  },
  {
    id: "about us",
    title: "About us",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="logo">Project.Car</div>
            <ul className="nav-list">
                {Navlinks.map((Link) =>(
                    <li  key ={Link.id} className="nav-links">{Link.title}</li>
                ))}</ul>

        </nav>

    )


}
export default Navbar;
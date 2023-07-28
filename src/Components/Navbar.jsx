

import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navlinks = [
  
  {
    id: "Models",
  },
  {
    id: "Services",
  },
  {
    id: "Information",
  },
];

const Models = [
  { id: "Porsche",img:"../nav-images/8lkk68xz.png" },
  { id: "Porsche2",img:"../nav-images/jktyhsa8.png"},
  { id: "Porsche3",img:"../nav-images/ap9hhmdf.png"},
  { id: "Porsche4",img:"../nav-images/ecoyr4w8.png"},
  { id: "Porsche5",img:"../nav-images/j5tzmk3g.png"},
  { id: "Porsche6",img:"../nav-images/jktyhsa8.png"},
  
];

const Services = [
  { id: "Service1" },
  { id: "Service2" },
  { id: "Service3" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("Models"); // State to keep track of the selected link ID

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
   
   
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setTimeout(() => {
      // Perform any other cleanup or actions here if needed
    }, 300); // Adjust the delay time as needed (e.g., 300ms)
  };

  // Function to handle click on a link in sidebar1
  const handleSidebar1LinkClick = (linkId) => {
    setSelectedLink(linkId); // Update the selected link ID
  };

  // Helper function to get the links for sidebar2 based on the selected link ID
  const getLinksForSidebar2 = () => {
    // If no link is selected, return an empty array for sidebar2
    if (!selectedLink) {
      return [];
    }

    // Return the appropriate links based on the selected link ID
    if (selectedLink === "Models") {
      return Models;
    } else if (selectedLink === "Services") {
      return Services;
    } else {
      // Handle other cases or return an empty array if not needed
      return [];
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-menu sidebar-toggle" onClick={toggleSidebar}>
        <img src={"main-menu.png"} className="menu-icon" alt="Menu" />
        <p className="nav-menu">Menu</p>
      </div>

      {isSidebarOpen && (
        <div className={`sidebar ${isSidebarOpen ? "isOpen" : "isClosed"}`} onClick={toggleSidebar}>
          <button className="close-button" >
            <div className="close"></div>
          </button>
          <div className="sidebar1">
            <ul className="sidebar-links">
              {Navlinks.map((link) => (
                <li className="sidebar-link" key={link.id} onClick={() => handleSidebar1LinkClick(link.id)}>
                 
                    <div className="sidebar-line">{link.id}<img className={"right-arrow"}src={"right-arrow.png"} alt={""}/></div>
                  
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar2">
            <ul className="sidebar-links2">
              {getLinksForSidebar2().map((link) => (
                <li className="sidebar-link" key={link.id}>
                  <div className="sidebar-line2">{link.img ? <img src={link.img} alt="Link Image" /> : link.id}</div>
                </li>
              ))}
            </ul>
            
          </div>
          
        </div>
      )}

      <p className="nav-headline">Porsche</p>
      <p className="nav-login" >Login</p>
    </nav>
  );
};

export default Navbar;
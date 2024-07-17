import  { useEffect, useState } from "react";
import "./Sidebar.css";
import img1 from "../../assets/images/home (1)@2x.png";
import img2 from "../../assets/images/transaction@2x.png";
import img3 from "../../assets/images/map@2x.png";
import img4 from "../../assets/images/Group 87612@2x.png";
import img5 from "../../assets/images/Group 85063@2x.png";
import img6 from "../../assets/images/Group 84983@2x.png";
import SidebarItem from "./components/sidebaritem/SidebarItem";
// import img7 from "../../assets/images/home-devault.png";
export default function Sidebar() {
  // ***********active tage**************
  const [activeLink, setActiveLink] = useState("#home");

  // **********MouseHover Event**************

  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  useEffect(() => {
    // Set the initial active link to "Home"
    setActiveLink("#home");
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <div style={{width:"100%"}} >
        <SidebarItem img={img1} title="Home" active="#home" activeLink={activeLink} handleLinkClick={handleLinkClick} />

      <a
        href="#opertion"
        className={activeLink === "#opertion" ? "active" : ""}
        onClick={() => handleLinkClick("#opertion")}
      >
        <img src={activeLink == "#operation"? img2: img4} style={{ width: "17.69px", height: "19.08px" }} />
        <span className="sidebar-text">Opertion</span>
      </a>

      <a
        href="#map"
        className={activeLink === "#map" ? "active" : ""}
        onClick={() => handleLinkClick("#map")}
      >
        <img src={img3} style={{ width: "21.07px", height: "21.07px" }} />
        <span className="sidebar-text">Map</span>
      </a>
      <a
        href="#reports"
        className={activeLink === "#reports" ? "active" : ""}
        onClick={() => handleLinkClick("#reports")}
      >
        <img src={img4} style={{ width: "21.58px", height: "20.38px" }} />
        <span className="sidebar-text">Reports</span>
      </a>
      <a
        href="#control"
        className={activeLink === "#control" ? "active" : ""}
        onClick={() => handleLinkClick("#control")}
      >
        <img src={img5} style={{ width: "21.58px", height: "20.38px" }} />
        <span className="sidebar-text">Control Panle</span>
      </a>
      </div>

      {/* <div className="discover"></div> */}

      <div className="help-card" >
        <div className="help-icon">
          <img src={img6} alt="Need Help Icon" />
        </div>
        <div className="help-content">
          <h2>Need Help?</h2>
          <p>Click here to find Functionalities, Help, and More!</p>
          <button className="discover-button">Discover</button>
        </div>
      </div>
    </div>
  );
}

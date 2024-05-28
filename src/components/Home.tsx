import { useState } from "react";
import Sidebar from "./slider";
import ColumnChart from "./ColumnChart";
import RoundChart from "./pieChart";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../assets/logo.jpeg";

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div>
      <div className="Home-header" style={{ backgroundColor: "black" }}>
        <img src={logo} alt="image" className="logo" />
        <h1 style={{ color: "#fff", alignItems: "center", marginLeft: "30%" }}>
          ABC College!
        </h1>
        <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              DEPT base Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/cse">
                {" "}
                CSE
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/eee">
                EEE
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/it">
                IT
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/mech">
                MECH
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/ece">
                ECE
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="grid-container">
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        {/* <div className='container'> */}
        <ColumnChart />
        <RoundChart />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Home;

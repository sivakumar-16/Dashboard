interface SidebarProps {
  openSidebarToggle: boolean;
  OpenSidebar: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  openSidebarToggle,
  OpenSidebar,
}) => {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">Dashboard</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Our College</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Depts</a>
        </li>

        <li className="sidebar-list-item">
          <a href="">About US</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar
} from "react-pro-sidebar";
import {FaTachometerAlt, FaGem, FaList} from "react-icons/fa";

function SidebarComponent() {
  const {collapseSidebar, collapsed} = useProSidebar();

  return (
    <Sidebar
      rootStyles={{
        height: "100vh",
        backgroundColor: "#2c2c2c",
        color: "#fff",
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "10px 20px",
            color: "#ccc",
            [`&:hover`]: {
              backgroundColor: "#444",
              color: "#fff",
            },
          },
          icon: {
            color: "#bbb",
          },
        }}
      >
        <MenuItem
          icon={<FaTachometerAlt />}
          onClick={() => collapseSidebar()}
        >
          {collapsed ? "" : "Toggle"}
        </MenuItem>
        <MenuItem icon={<FaGem />}> Dashboard </MenuItem>
        <SubMenu label="Components" icon={<FaList />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default SidebarComponent;

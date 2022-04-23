import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "15px",
        fontWeight: "700",
        width: "100%",
        justifyContent: "center",
        marginTop: "1px",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/wallet">
        <NavLink to="/wallet">👛 SEND</NavLink>
      </Menu.Item>
      <Menu.Item key="/1inch">
        <NavLink to="/1inch">💱 SWAP</NavLink>
      </Menu.Item>
      <Menu.Item key="onramp">
        <NavLink to="/onramp">💵 Fiat</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance">💰🎁 WALLET</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers">💸 HISTORY</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">🖼 NFTs</NavLink>
      </Menu.Item>
      <Menu.Item key="/contract">
        <NavLink to="/contract">📄 Contract</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;

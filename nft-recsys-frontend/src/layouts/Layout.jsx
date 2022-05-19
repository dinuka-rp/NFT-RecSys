import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// import NavBar from "../components/NavBar";

const Layout = (props) => {
    return (
        <div>
            <section style={{ margin: "1.6em" }}>
                <Menu
                    mode="horizontal"
                    // defaultSelectedKeys={['home']}
                >
                    <Menu.Item key={"home"}>
                        <Link to={"/"}>Home</Link>
                    </Menu.Item>
                    <Menu.Item key={"rec-by-ref"}>
                        <Link to={"/reference-rec"}>
                            Recommendations by Reference
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"docs"}>
                        <Link to={"/docs"}>Docs</Link>
                    </Menu.Item>
                </Menu>
            </section>
            {props.children}
        </div>
    );
};

export default Layout;

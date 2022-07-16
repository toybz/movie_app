import { Menu } from "antd";
import React from "react";
import Link from "next/link";
import { Genre } from "../types";

const GenresList: React.FC<{ genres: Genre[] }> = ({ genres }) => {
  return (
    <Menu
      mode="inline"
      // @ts-ignore
      selectedKeys={0}
      style={{
        height: "100%",
        borderRight: 0,
      }}
    >
      {genres.map((item) => (
        <Menu.Item
          key={item.id}
          className={item.isLinkActive ? `ant-menu-item-selected` : ""}
        >
          <Link href={item.path}>{item.name}</Link>
        </Menu.Item>
      ))}
      {/*{genres.length === 0 && <Menu.Item>No data</Menu.Item>}*/}
    </Menu>
  );
};

export default GenresList;

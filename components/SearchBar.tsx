import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBar: React.FC<{
  onSubmit: (query: string) => void;
  placeholder: string;
}> = ({ onSubmit, placeholder }) => {
  return (
    <Search
      placeholder={placeholder}
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSubmit}
      style={{ paddingTop: "1vh" }}
    />
  );
};

export default SearchBar;

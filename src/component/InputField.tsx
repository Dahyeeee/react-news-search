import React from "react";
import { useState } from "react";
import { request } from "../core/request";
import { Button, TextInput } from "grommet";
import { Search } from "grommet-icons";
import { Link } from "react-router-dom";

export default function InputField() {
  const [value, setValue] = useState("");
  const [articles, setArticles] = useState([]);

  const handlOnChange = async (e: any) => {
    setValue(e.target.value);
    setArticles(await request(value));
  };

  return (
    <div className="searchField">
      <TextInput
        placeholder="type here"
        value={value}
        onChange={handlOnChange}
        icon={<Search />}
      />
      <Link to="/clip">
        <Button
          primary
          label="See Clipped Articles"
          margin={{ top: "10px" }}
        ></Button>
      </Link>
    </div>
  );
}

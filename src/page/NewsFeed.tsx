import React, { useState } from "react";
import { Button, TextInput } from "grommet";
import { Search } from "grommet-icons";
import { request } from "../core/request";
import EveryArticles from "../component/EveryArticles";

export default function NewsFeed() {
  const [value, setValue] = useState("");
  const [articles, setArticles] = useState([]);

  const handlOnChange = async (e: any) => {
    setValue(e.target.value);
    setArticles(await request(value));
    console.log(articles);
  };
  return (
    <div>
      <header>
        <h1>News Feed</h1>;
      </header>
      <div className="searchField">
        <TextInput
          placeholder="type here"
          value={value}
          onChange={handlOnChange}
          icon={<Search />}
        />
        <Button
          primary
          label="See Clipped Articles"
          margin={{ top: "10px" }}
        ></Button>
      </div>
      <EveryArticles articles={articles} />
    </div>
  );
}

import React from "react";
import { Article } from "../types";
import Articles from "./Articles";

export default function EveryArticles(props: any) {
  return (
    <div>
      {props.articles.map((article: Article) => (
        <Articles key={article._id} article={article} />
      ))}
    </div>
  );
}

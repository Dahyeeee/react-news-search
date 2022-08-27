import React from "react";
import EveryArticles from "../component/EveryArticles";
import Header from "../component/Header";
import InputField from "../component/InputField";

export default function NewsFeed() {
  return (
    <div>
      <Header />
      <InputField />
      <EveryArticles articles={[]} />
    </div>
  );
}

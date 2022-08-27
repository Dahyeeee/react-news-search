import { Article } from "../types";
const API_KEY = process.env.REACT_APP_API_KEY;

export const request = async (word: string) => {
  const url = (word: string) =>
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${word}&api-key=TJdabzukPLFuSQGAmkEliJ1fAkVgWCrm`;

  let result: [] = await fetch(url(word))
    .then((res) => res.json())
    .then((res) => {
      let outcome = res.response.docs;
      outcome = outcome.map((each: Article) => {
        return { ...each, clipped: false };
      });
      console.log(outcome);
      return outcome;
    });

  return result;
};

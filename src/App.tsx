import React from "react";
import { Grommet } from "grommet";
import NewsFeed from "./page/NewsFeed";
const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <div className="App">
      <Grommet theme={theme}>
        <NewsFeed />
      </Grommet>
    </div>
  );
}

export default App;

import { Box, Button } from "grommet";
import React from "react";

export default function Articles(props: any) {
  const {
    _id,
    pub_date,
    web_url,
    headline: { main },
    clipped,
  } = props.article;

  return (
    <Box
      border={{ color: "brand", size: "large" }}
      pad="medium"
      margin="medium"
    >
      <div data-set={_id}>
        <div>{main}</div>
        <div>{pub_date.slice(0, 10)}</div>
        <Button
          label={clipped ? "unclip this article" : "clip this article"}
          margin={{ right: "10px" }}
        ></Button>
        <a href={web_url} target="_blanck">
          <Button label="see detail"></Button>
        </a>
      </div>
    </Box>
  );
}

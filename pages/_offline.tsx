import { Result } from "antd";
import Page from "../components/Page";
import React from "react";

// Fallback page if there is no internet and cached data
const Error = () => {
  return (
    <Page>
      <Result
        status="error"
        title="Network Error"
        subTitle="There is no cached data for this page at the moment.Please connect to a network to view data"
      ></Result>{" "}
    </Page>
  );
};

export default Error;

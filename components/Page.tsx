import React from "react";
import Head from "next/head";
import { Result } from "antd";

type PageProps = {
  children: React.ReactNode;
  title?: string;
  serverErrorOccurred?: boolean;
  serverErrorMessage?: string;
};

const Page: React.FC<PageProps> = ({
  children,
  title,
  serverErrorOccurred,
  serverErrorMessage,
}: PageProps) => {
  if (serverErrorOccurred) {
    return (
      <>
        <Result
          status="error"
          title="Server Error"
          subTitle={serverErrorMessage}
        ></Result>
      </>
    );
  }
  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}

      {children}
    </>
  );
};

export default Page;

import React from "react";
import { useLocation } from "react-router-dom";
import OnlyOfficeEditor from "@site/src/components/BrowserWindow/OnlyofficeEditor";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const NoHeaderFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.noHeaderFooter}>{children}</div>;
};

function Editor() {
  const query = useQuery();
  const format = query.get("format").toLowerCase();
  const type = query.get("type").toLowerCase();
  const category = query.get("category").toLowerCase();

  return (
    <NoHeaderFooter>
      <Layout>
        <OnlyOfficeEditor fileType={format} code={""} height={"100%"} />
      </Layout>
    </NoHeaderFooter>
  );
}

export default Editor;

import React from "react";
import Layout from "@theme/Layout";
import { useLocation } from "react-router-dom";
import OnlyOfficeEditor from "@site/src/components/BrowserWindow/OnlyofficeEditor";
import { code } from "@site/src/components/Modal/TryNowCodeModal/CodeBlock/types";
import codeblocksData from "@site/src/components/TryNow/codeblocksData.json";
import styles from "./styles.module.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Editor() {
  const query = useQuery();
  const format = query.get("format");
  const type = query.get("type");
  const category = query.get("category");
  const codeIndex = query.get("codeIndex");

  const config: code = codeblocksData[format][category][codeIndex];

  return (
    <div className={styles.noHeaderFooter}>
      <Layout>
        <OnlyOfficeEditor fileType={format.toLowerCase()} code={""} height={"100%"} config={config} />
      </Layout>
    </div>
  );
}

export default Editor;

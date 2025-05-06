import React from "react";
import Layout from "@theme/Layout";
import { useLocation } from "react-router-dom";
import OnlyOfficeEditor from "@site/src/components/BrowserWindow/OnlyofficeEditor";
import { code } from "@site/src/components/Modal/TryNowCodeModal/CodeBlock/types";
import codeblocksData from "@site/src/components/TryNow/codeblocksData.json";
import styles from "./styles.module.css";

function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

function Editor(): React.JSX.Element {
  const query = useQuery();
  const format: string = query.get("format") || "DOCX";
  const type: string = query.get("type") || "document";
  const category: string = query.get("category") || "Edit";
  const codeIndex: number = parseInt(query.get("codeIndex")) || 0;
  const isForm: boolean = query.get("isForm")==="true";

  const config: code = codeblocksData[format][category][codeIndex];

  return (
    <div className={styles.noHeaderFooter}>
      <Layout>
        <OnlyOfficeEditor fileType={format.toLowerCase()} code={""} height={"100%"} config={config} isDemo={true} isForm={isForm} />
      </Layout>
    </div>
  );
}

export default Editor;

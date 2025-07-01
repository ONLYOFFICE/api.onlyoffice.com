import styles from "./styles.module.css";

const RepoButtons: React.FC<void> = () => {
  return (
    <>
      <ul className={styles["list-buttons"]}>
        <li>
          <a target="_blank" href="https://github.com/ONLYOFFICE/docspace-dotnet-sdk"><button id="csharp">
            C#
          </button></a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/ONLYOFFICE/docspace-typescript-sdk"><button id="typescript">
            TypeScript
          </button></a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/ONLYOFFICE/docspace-javascript-sdk"><button id="javascript">
            JavaScript
          </button></a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/ONLYOFFICE/docspace-python-sdk"><button id="python">
            Python
          </button></a>
        </li>
      </ul>
    </>
  );
};

export default RepoButtons;

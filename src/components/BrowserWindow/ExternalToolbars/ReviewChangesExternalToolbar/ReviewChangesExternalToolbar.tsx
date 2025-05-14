import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

const ReviewChangesExternalToolbar: React.FC<void> = () => {
  return (
    <>
      <ul className={styles["list-buttons"]}>
        <li>
          <button id="accept" className={styles.disabled}>
            ACCEPT
          </button>
        </li>
        <li>
          <button id="reject" className={styles.disabled}>
            REJECT
          </button>
        </li>
        <li>
          <button id="prev" className={styles.disabled}>
            &lt;
          </button>
        </li>
        <li>
          <button id="next" className={styles.disabled}>
            &gt;
          </button>
        </li>
      </ul>
      <OnlyofficeEditor
        fileType={"docx"}
        code={""}
        height="550px"
        templateUrl="https://static.onlyoffice.com/assets/docs/samples/review.docx"
        externalScript={{
          beforeDocumentReady: `            
            const contentControls = [];
            let indexComment = 0;  
          `,
          onDocumentReady: `
            document.querySelectorAll(".${styles["list-buttons"]} button").forEach(btn => {
                btn.classList.remove("${styles.disabled}");
            });
          `,
          otherFunctional: `
            document.getElementById('accept').addEventListener('click', function() {
                connector.executeMethod("AcceptReviewChanges");
            });

            document.getElementById('reject').addEventListener('click', function() {
                connector.executeMethod("RejectReviewChanges");
            });

            document.getElementById('prev').addEventListener('click', function() {
                connector.executeMethod("MoveToNextReviewChange", [false]);
            });

            document.getElementById('next').addEventListener('click', function() {
                connector.executeMethod("MoveToNextReviewChange");
            });
          `,
        }}
      />
    </>
  );
};

export default ReviewChangesExternalToolbar;

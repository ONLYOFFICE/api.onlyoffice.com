import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

const ReviewChangesExternalToolbar: React.FC = () => {
  return (
    <>
      <div className={styles["demo-section"]}>
        <div className={styles["demo-label"]}>LIVE DEMO</div>
        <div className={styles["controls-row"]}>
          <span className={styles["controls-label"]}>External controls</span>
          <button id="accept" className={`${styles.btn} ${styles.disabled}`}>
            &#x2713; Accept
          </button>
          <button id="reject" className={`${styles.btn} ${styles.disabled}`}>
            &#x2718; Reject
          </button>
          <button id="prev" className={`${styles.btn} ${styles.disabled}`}>
            &lsaquo; Prev
          </button>
          <button id="next" className={`${styles.btn} ${styles.disabled}`}>
            Next &rsaquo;
          </button>
          <span id="reviewCounter" className={styles["review-counter"]} />
        </div>
      </div>
      <OnlyofficeEditor
        fileType={"docx"}
        code={""}
        height="550px"
        templateUrl="https://static.onlyoffice.com/assets/docs/samples/review.docx"
        config={{ editorConfig: { customization: { compactToolbar: true } } }}
        externalScript={{
          beforeDocumentReady: `
            var reviewCount = 0;
            var reviewIndex = 0;
          `,
          onDocumentReady: `
            connector.callCommand(function() {
              var doc = Api.GetDocument();
              var report = doc.GetReviewReport();
              var total = 0;
              for (var user in report) {
                total += report[user].length;
              }
              return total;
            }, function(total) {
              reviewCount = total;
              reviewIndex = total > 0 ? 1 : 0;
              updateCounter();
            });

            document.querySelectorAll(".${styles.btn}").forEach(function(btn) {
              btn.classList.remove("${styles.disabled}");
            });
          `,
          otherFunctional: `
            function updateCounter() {
              var el = document.getElementById("reviewCounter");
              if (el) {
                el.textContent = reviewCount > 0
                  ? "Change " + reviewIndex + " of " + reviewCount
                  : "";
              }
              var prevBtn = document.getElementById("prev");
              var nextBtn = document.getElementById("next");
              var acceptBtn = document.getElementById("accept");
              var rejectBtn = document.getElementById("reject");
              if (reviewCount === 0) {
                acceptBtn.classList.add("${styles.disabled}");
                rejectBtn.classList.add("${styles.disabled}");
                prevBtn.classList.add("${styles.disabled}");
                nextBtn.classList.add("${styles.disabled}");
              } else {
                acceptBtn.classList.remove("${styles.disabled}");
                rejectBtn.classList.remove("${styles.disabled}");
                if (reviewIndex <= 1) {
                  prevBtn.classList.add("${styles.disabled}");
                } else {
                  prevBtn.classList.remove("${styles.disabled}");
                }
                if (reviewIndex >= reviewCount) {
                  nextBtn.classList.add("${styles.disabled}");
                } else {
                  nextBtn.classList.remove("${styles.disabled}");
                }
              }
            }

            document.getElementById('accept').addEventListener('click', function() {
              connector.executeMethod("AcceptReviewChanges", null, function() {
                if (reviewCount > 0) reviewCount--;
                if (reviewIndex > reviewCount) reviewIndex = reviewCount;
                updateCounter();
              });
            });

            document.getElementById('reject').addEventListener('click', function() {
              connector.executeMethod("RejectReviewChanges", null, function() {
                if (reviewCount > 0) reviewCount--;
                if (reviewIndex > reviewCount) reviewIndex = reviewCount;
                updateCounter();
              });
            });

            document.getElementById('prev').addEventListener('click', function() {
              connector.executeMethod("MoveToNextReviewChange", [false]);
              if (reviewIndex > 1) reviewIndex--;
              updateCounter();
            });

            document.getElementById('next').addEventListener('click', function() {
              connector.executeMethod("MoveToNextReviewChange");
              if (reviewIndex < reviewCount) reviewIndex++;
              updateCounter();
            });
          `,
        }}
      />
    </>
  );
};

export default ReviewChangesExternalToolbar;

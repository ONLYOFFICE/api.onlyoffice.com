import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

const RedactPdfExternalToolbar: React.FC = () => {
  return (
    <>
      <div className={styles["demo-section"]}>
        <div className={styles["demo-layout"]}>
          <div className={styles["redact-panel"]}>
            <div className={styles["panel-header"]}>
              <div className={styles["panel-header-left"]}>
                <span className={styles["panel-title"]}>REDACT IN PDF</span>
                <span id="redactBadge" className={styles["results-badge"]} style={{ display: "none" }}>
                  <span id="redactTotalCount">0</span> matches
                </span>
              </div>
            </div>
            <div className={styles["panel-body"]}>
              <div className={styles["search-row"]}>
                <input id="redactInput" className={styles["search-input"]} type="text" placeholder="Enter text to redact..." />
                <button id="redactSearchBtn" className={styles["search-btn"]}>Find</button>
              </div>
              <div className={styles["options-group"]}>
                <label className={styles["option-label"]}>
                  <input id="redactMatchCase" type="checkbox" />
                  Case sensitive
                </label>
                <label className={styles["option-label"]}>
                  <input id="redactWholeWords" type="checkbox" />
                  Whole word
                </label>
              </div>
              <div id="redactResultsList" className={styles["results-list"]} />
              <div id="redactEmptyState" className={styles["empty-state"]} style={{ display: "none" }}>
                No matches found.
              </div>
              <div id="redactInitialState" className={styles["empty-state"]}>
                Enter text and click Find to locate and mark it for redaction in the PDF.
              </div>
            </div>
            <div className={styles["panel-actions"]}>
              <button id="applyRedactBtn" className={`${styles.btn} ${styles["btn-danger"]} ${styles.disabled}`}>Apply redaction</button>
              <button id="clearRedactBtn" className={`${styles.btn} ${styles.disabled}`}>Clear marks</button>
            </div>
          </div>
          <div className={styles["editor-column"]}>
            <OnlyofficeEditor
              fileType={"pdf"}
              code={""}
              height="100%"
              isDemo={true}
              config={{ editorConfig: { customization: { compactToolbar: true } } }}
              externalScript={{
                beforeDocumentReady: `
                  let redactAnnotIds = [];
                  let redactCount = 0;
                `,
                onDocumentReady: ``,
                otherFunctional: `
                  var renderRedactResults = function() {
                    var list = document.getElementById("redactResultsList");
                    var badge = document.getElementById("redactBadge");
                    var empty = document.getElementById("redactEmptyState");
                    var initial = document.getElementById("redactInitialState");
                    var applyBtn = document.getElementById("applyRedactBtn");
                    var clearBtn = document.getElementById("clearRedactBtn");

                    initial.style.display = "none";
                    list.innerHTML = "";

                    if (redactCount === 0) {
                      badge.style.display = "none";
                      empty.style.display = "block";
                      applyBtn.classList.add("${styles.disabled}");
                      clearBtn.classList.add("${styles.disabled}");
                      return;
                    }

                    badge.style.display = "inline";
                    document.getElementById("redactTotalCount").textContent = redactCount;
                    empty.style.display = "none";
                    applyBtn.classList.remove("${styles.disabled}");
                    clearBtn.classList.remove("${styles.disabled}");

                    var info = document.createElement("div");
                    info.className = "${styles["result-item"]}";

                    var indexSpan = document.createElement("span");
                    indexSpan.className = "${styles["result-index"]}";
                    indexSpan.textContent = redactCount + " redaction mark" + (redactCount !== 1 ? "s" : "") + " added";
                    info.appendChild(indexSpan);

                    var statusSpan = document.createElement("span");
                    statusSpan.className = "${styles["result-page"]}";
                    statusSpan.textContent = "Pending";
                    info.appendChild(statusSpan);

                    list.appendChild(info);
                  };

                  var performRedactSearch = function() {
                    var text = document.getElementById("redactInput").value.trim();
                    if (!text) return;

                    var matchCase = document.getElementById("redactMatchCase").checked;
                    var wholeWords = document.getElementById("redactWholeWords").checked;

                    Asc.scope.redactParams = { text: text, matchCase: matchCase, wholeWords: wholeWords };

                    connector.callCommand(function() {
                      var params = Asc.scope.redactParams;
                      var doc = Api.GetDocument();
                      var annots = doc.SearchAndRedact({
                        text: params.text,
                        matchCase: params.matchCase,
                        wholeWords: params.wholeWords
                      });
                      var ids = [];
                      if (annots && annots.length > 0) {
                        for (var i = 0; i < annots.length; i++) {
                          ids.push(annots[i].GetInternalId());
                        }
                      }
                      return { count: ids.length, ids: ids };
                    }, function(result) {
                      if (result) {
                        redactCount = result.count;
                        redactAnnotIds = result.ids;
                      } else {
                        redactCount = 0;
                        redactAnnotIds = [];
                      }
                      renderRedactResults();
                    });
                  };

                  var applyRedaction = function() {
                    connector.callCommand(function() {
                      var doc = Api.GetDocument();
                      doc.ApplyRedact();
                      return true;
                    }, function() {
                      redactAnnotIds = [];
                      redactCount = 0;

                      var list = document.getElementById("redactResultsList");
                      list.innerHTML = "";

                      var info = document.createElement("div");
                      info.className = "${styles["result-item"]} ${styles["result-item-applied"]}";

                      var indexSpan = document.createElement("span");
                      indexSpan.className = "${styles["result-index"]}";
                      indexSpan.textContent = "Redaction applied";
                      info.appendChild(indexSpan);

                      var statusSpan = document.createElement("span");
                      statusSpan.className = "${styles["result-page"]}";
                      statusSpan.textContent = "Done";
                      info.appendChild(statusSpan);

                      list.appendChild(info);

                      document.getElementById("redactBadge").style.display = "none";
                      document.getElementById("applyRedactBtn").classList.add("${styles.disabled}");
                      document.getElementById("clearRedactBtn").classList.add("${styles.disabled}");
                    });
                  };

                  var clearRedactMarks = function() {
                    Asc.scope.annotIds = redactAnnotIds;
                    connector.callCommand(function() {
                      var ids = Asc.scope.annotIds;
                      var doc = Api.GetDocument();
                      var pageCount = doc.GetPagesCount();
                      for (var i = 0; i < pageCount; i++) {
                        var page = doc.GetPage(i);
                        var annots = page.GetAllAnnots();
                        for (var j = annots.length - 1; j >= 0; j--) {
                          for (var k = 0; k < ids.length; k++) {
                            if (annots[j].GetInternalId() === ids[k]) {
                              annots[j].Delete();
                              break;
                            }
                          }
                        }
                      }
                    }, function() {
                      redactAnnotIds = [];
                      redactCount = 0;
                      document.getElementById("redactBadge").style.display = "none";
                      document.getElementById("redactResultsList").innerHTML = "";
                      document.getElementById("redactEmptyState").style.display = "none";
                      document.getElementById("redactInitialState").style.display = "block";
                      document.getElementById("applyRedactBtn").classList.add("${styles.disabled}");
                      document.getElementById("clearRedactBtn").classList.add("${styles.disabled}");
                    });
                  };

                  document.getElementById("redactSearchBtn").addEventListener("click", performRedactSearch);

                  document.getElementById("redactInput").addEventListener("keydown", function(e) {
                    if (e.key === "Enter") {
                      performRedactSearch();
                    }
                  });

                  document.getElementById("applyRedactBtn").addEventListener("click", function(e) {
                    if (e.currentTarget.classList.contains("${styles.disabled}")) return;
                    applyRedaction();
                  });

                  document.getElementById("clearRedactBtn").addEventListener("click", function(e) {
                    if (e.currentTarget.classList.contains("${styles.disabled}")) return;
                    clearRedactMarks();
                  });
                `,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RedactPdfExternalToolbar;

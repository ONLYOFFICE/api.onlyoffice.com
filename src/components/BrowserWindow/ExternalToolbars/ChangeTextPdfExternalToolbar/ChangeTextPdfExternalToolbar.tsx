import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

const ChangeTextPdfExternalToolbar: React.FC = () => {
  return (
    <>
      <div className={styles["demo-section"]}>
        <div className={styles["demo-layout"]}>
          <div className={styles["replace-panel"]}>
            <div className={styles["panel-header"]}>
              <div className={styles["panel-header-left"]}>
                <span className={styles["panel-title"]}>CHANGE TEXT IN PDF</span>
                <span id="replaceBadge" className={styles["results-badge"]} style={{ display: "none" }}>
                  <span id="replaceTotalCount">0</span> replaced
                </span>
              </div>
            </div>
            <div className={styles["panel-body"]}>
              <div className={styles["input-group"]}>
                <label className={styles["input-label"]}>Find</label>
                <input id="replaceSearchInput" className={styles["text-input"]} type="text" placeholder="Enter text to find..." />
              </div>
              <div className={styles["input-group"]}>
                <label className={styles["input-label"]}>Replace with</label>
                <input id="replaceWithInput" className={styles["text-input"]} type="text" placeholder="Enter replacement text..." />
              </div>
              <div className={styles["options-group"]}>
                <label className={styles["option-label"]}>
                  <input id="replaceMatchCase" type="checkbox" />
                  Case sensitive
                </label>
              </div>
              <div id="replaceResultsList" className={styles["results-list"]} />
              <div id="replaceEmptyState" className={styles["empty-state"]} style={{ display: "none" }}>
                No matches found.
              </div>
              <div id="replaceInitialState" className={styles["empty-state"]}>
                Enter text to find and its replacement, then click Replace all to change text in the PDF.
              </div>
            </div>
            <div className={styles["panel-actions"]}>
              <button id="replaceAllBtn" className={styles["replace-btn"]}>Replace all</button>
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
                  let replaceResults = [];
                `,
                onDocumentReady: ``,
                otherFunctional: `
                  var renderReplaceResults = function() {
                    var list = document.getElementById("replaceResultsList");
                    var badge = document.getElementById("replaceBadge");
                    var empty = document.getElementById("replaceEmptyState");
                    var initial = document.getElementById("replaceInitialState");

                    initial.style.display = "none";
                    list.innerHTML = "";

                    if (replaceResults.length === 0) {
                      badge.style.display = "none";
                      empty.style.display = "block";
                      return;
                    }

                    var totalCount = 0;
                    for (var i = 0; i < replaceResults.length; i++) {
                      totalCount += replaceResults[i].count;
                    }

                    badge.style.display = "inline";
                    document.getElementById("replaceTotalCount").textContent = totalCount;
                    empty.style.display = "none";

                    for (var i = 0; i < replaceResults.length; i++) {
                      var r = replaceResults[i];
                      var item = document.createElement("div");
                      item.className = "${styles["result-item"]}";

                      var indexSpan = document.createElement("span");
                      indexSpan.className = "${styles["result-index"]}";
                      indexSpan.textContent = r.count + " replacement" + (r.count !== 1 ? "s" : "");
                      item.appendChild(indexSpan);

                      var pageSpan = document.createElement("span");
                      pageSpan.className = "${styles["result-page"]}";
                      pageSpan.textContent = "Page " + (r.pageIndex + 1);
                      item.appendChild(pageSpan);

                      list.appendChild(item);
                    }
                  };

                  var performReplaceAll = function() {
                    var findText = document.getElementById("replaceSearchInput").value.trim();
                    var replaceWith = document.getElementById("replaceWithInput").value;
                    if (!findText) return;

                    var matchCase = document.getElementById("replaceMatchCase").checked;

                    Asc.scope.replaceParams = { findText: findText, replaceWith: replaceWith, matchCase: matchCase };

                    connector.callCommand(function() {
                      var params = Asc.scope.replaceParams;
                      var regex = params.matchCase ? null : new RegExp(params.findText.replace(/[.*+?^\${}()|[\\]\\\\]/g, "\\\\$&"), "gi");
                      var doc = Api.GetDocument();
                      var pageCount = doc.GetPagesCount();
                      var results = [];

                      for (var i = 0; i < pageCount; i++) {
                        var page = doc.GetPage(i);
                        var drawings = page.RecognizeContent();
                        var pageReplacements = 0;

                        for (var d = 0; d < drawings.length; d++) {
                          var drawing = drawings[d];
                          var classType = drawing.GetClassType();

                          if (classType === "shape") {
                            var content = drawing.GetContent();
                            var elemCount = content.GetElementsCount();
                            for (var e = 0; e < elemCount; e++) {
                              var elem = content.GetElement(e);
                              if (elem.GetClassType() === "paragraph") {
                                var text = elem.GetText();
                                var newText;
                                if (params.matchCase) {
                                  var pos = 0;
                                  var count = 0;
                                  newText = "";
                                  while (pos < text.length) {
                                    var idx = text.indexOf(params.findText, pos);
                                    if (idx === -1) {
                                      newText += text.substring(pos);
                                      break;
                                    }
                                    newText += text.substring(pos, idx) + params.replaceWith;
                                    count++;
                                    pos = idx + params.findText.length;
                                  }
                                  if (count > 0) {
                                    elem.SetText(newText);
                                    pageReplacements += count;
                                  }
                                } else {
                                  var matches = text.match(regex);
                                  if (matches && matches.length > 0) {
                                    newText = text.replace(regex, params.replaceWith);
                                    elem.SetText(newText);
                                    pageReplacements += matches.length;
                                  }
                                }
                              }
                            }
                          } else if (classType === "table") {
                            var rowCount = drawing.GetRowsCount();
                            for (var row = 0; row < rowCount; row++) {
                              var tableRow = drawing.GetRow(row);
                              var cellCount = tableRow.GetCellsCount();
                              for (var cell = 0; cell < cellCount; cell++) {
                                var tableCell = tableRow.GetCell(cell);
                                var cellText = tableCell.GetText();
                                var cellNewText;
                                if (params.matchCase) {
                                  var cPos = 0;
                                  var cCount = 0;
                                  cellNewText = "";
                                  while (cPos < cellText.length) {
                                    var cIdx = cellText.indexOf(params.findText, cPos);
                                    if (cIdx === -1) {
                                      cellNewText += cellText.substring(cPos);
                                      break;
                                    }
                                    cellNewText += cellText.substring(cPos, cIdx) + params.replaceWith;
                                    cCount++;
                                    cPos = cIdx + params.findText.length;
                                  }
                                  if (cCount > 0) {
                                    tableCell.SetText(cellNewText);
                                    pageReplacements += cCount;
                                  }
                                } else {
                                  var cMatches = cellText.match(regex);
                                  if (cMatches && cMatches.length > 0) {
                                    cellNewText = cellText.replace(regex, params.replaceWith);
                                    tableCell.SetText(cellNewText);
                                    pageReplacements += cMatches.length;
                                  }
                                }
                              }
                            }
                          }
                        }

                        if (pageReplacements > 0) {
                          results.push({ pageIndex: i, count: pageReplacements });
                        }
                      }

                      return results;
                    }, function(results) {
                      replaceResults = results || [];
                      renderReplaceResults();
                    });
                  };

                  document.getElementById("replaceAllBtn").addEventListener("click", performReplaceAll);

                  document.getElementById("replaceSearchInput").addEventListener("keydown", function(e) {
                    if (e.key === "Enter") {
                      performReplaceAll();
                    }
                  });

                  document.getElementById("replaceWithInput").addEventListener("keydown", function(e) {
                    if (e.key === "Enter") {
                      performReplaceAll();
                    }
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

export default ChangeTextPdfExternalToolbar;

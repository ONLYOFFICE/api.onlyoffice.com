import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

const SearchPdfExternalToolbar: React.FC = () => {
  return (
    <>
      <div className={styles["demo-section"]}>
        <div className={styles["demo-layout"]}>
          <div className={styles["search-panel"]}>
            <div className={styles["panel-header"]}>
              <div className={styles["panel-header-left"]}>
                <span className={styles["panel-title"]}>SEARCH IN PDF</span>
                <span id="resultsBadge" className={styles["results-badge"]} style={{ display: "none" }}>
                  <span id="totalCount">0</span> results
                </span>
              </div>
              <div className={styles["panel-nav"]}>
                <button id="prevResult" className={`${styles["nav-btn"]} ${styles.disabled}`}>&lsaquo;</button>
                <button id="nextResult" className={`${styles["nav-btn"]} ${styles.disabled}`}>&rsaquo;</button>
              </div>
            </div>
            <div className={styles["panel-body"]}>
              <div className={styles["search-row"]}>
                <input id="searchInput" className={styles["search-input"]} type="text" placeholder="Enter search text..." />
                <button id="searchBtn" className={styles["search-btn"]}>Search</button>
              </div>
              <div className={styles["options-group"]}>
                <label className={styles["option-label"]}>
                  <input id="matchCase" type="checkbox" />
                  Case sensitive
                </label>
                <label className={styles["option-label"]}>
                  <input id="wholeWords" type="checkbox" />
                  Whole word
                </label>
              </div>
              <div id="resultsList" className={styles["results-list"]} />
              <div id="emptyState" className={styles["empty-state"]} style={{ display: "none" }}>
                No results found.
              </div>
              <div id="initialState" className={styles["empty-state"]}>
                Enter a search term and click Search to find and highlight text in the PDF.
              </div>
            </div>
            <div className={styles["panel-actions"]}>
              <button id="clearBtn" className={`${styles.btn} ${styles.disabled}`}>Clear highlights</button>
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
                  let searchResults = [];
                  let activeIndex = -1;
                `,
                onDocumentReady: ``,
                otherFunctional: `
                  var navigateToResult = function(index) {
                    if (index < 0 || index >= searchResults.length) return;
                    var result = searchResults[index];
                    Asc.scope.navTarget = { pageIndex: result.pageIndex, quad: result.quad };
                    connector.callCommand(function() {
                      var target = Asc.scope.navTarget;
                      var doc = Api.GetDocument();
                      var page = doc.GetPage(target.pageIndex);
                      var q = target.quad;
                      page.SetSelection({ x: q[0], y: q[1] }, { x: q[2], y: q[3] });
                    });
                  };

                  var renderResults = function() {
                    var list = document.getElementById("resultsList");
                    var badge = document.getElementById("resultsBadge");
                    var empty = document.getElementById("emptyState");
                    var initial = document.getElementById("initialState");
                    var clearBtn = document.getElementById("clearBtn");
                    var prevBtn = document.getElementById("prevResult");
                    var nextBtn = document.getElementById("nextResult");

                    initial.style.display = "none";
                    list.innerHTML = "";

                    if (searchResults.length === 0) {
                      badge.style.display = "none";
                      empty.style.display = "block";
                      clearBtn.classList.add("${styles.disabled}");
                      prevBtn.classList.add("${styles.disabled}");
                      nextBtn.classList.add("${styles.disabled}");
                      return;
                    }

                    badge.style.display = "inline";
                    document.getElementById("totalCount").textContent = searchResults.length;
                    empty.style.display = "none";
                    clearBtn.classList.remove("${styles.disabled}");

                    if (activeIndex <= 0) {
                      prevBtn.classList.add("${styles.disabled}");
                    } else {
                      prevBtn.classList.remove("${styles.disabled}");
                    }
                    if (activeIndex >= searchResults.length - 1) {
                      nextBtn.classList.add("${styles.disabled}");
                    } else {
                      nextBtn.classList.remove("${styles.disabled}");
                    }

                    searchResults.forEach(function(result, idx) {
                      var item = document.createElement("div");
                      item.className = "${styles["result-item"]}" + (idx === activeIndex ? " ${styles["result-item-active"]}" : "");
                      item.addEventListener("click", function() {
                        activeIndex = idx;
                        renderResults();
                        navigateToResult(idx);
                      });

                      var indexSpan = document.createElement("span");
                      indexSpan.className = "${styles["result-index"]}";
                      indexSpan.textContent = "Result " + (idx + 1);
                      item.appendChild(indexSpan);

                      var pageSpan = document.createElement("span");
                      pageSpan.className = "${styles["result-page"]}";
                      pageSpan.textContent = "Page " + (result.pageIndex + 1);
                      item.appendChild(pageSpan);

                      list.appendChild(item);
                    });
                  };

                  var performSearch = function() {
                    var text = document.getElementById("searchInput").value.trim();
                    if (!text) return;

                    var matchCase = document.getElementById("matchCase").checked;
                    var wholeWords = document.getElementById("wholeWords").checked;

                    Asc.scope.searchParams = { text: text, matchCase: matchCase, wholeWords: wholeWords };

                    connector.callCommand(function() {
                      var params = Asc.scope.searchParams;
                      var doc = Api.GetDocument();
                      var pageCount = doc.GetPagesCount();

                      // Clear existing search highlights
                      for (var i = 0; i < pageCount; i++) {
                        var page = doc.GetPage(i);
                        var annots = page.GetAllAnnots();
                        for (var j = annots.length - 1; j >= 0; j--) {
                          try {
                            if (annots[j].GetAuthorName() === "__search_demo__") {
                              annots[j].Delete();
                            }
                          } catch(e) {}
                        }
                      }

                      // Perform search and highlight
                      var results = [];
                      for (var i = 0; i < pageCount; i++) {
                        var page = doc.GetPage(i);
                        var quads = page.Search({
                          text: params.text,
                          matchCase: params.matchCase,
                          wholeWords: params.wholeWords
                        });

                        if (quads && quads.length > 0) {
                          for (var q = 0; q < quads.length; q++) {
                            var annot = Api.CreateHighlightAnnot([quads[q]]);
                            annot.SetAuthorName("__search_demo__");
                            annot.SetFillColor(Api.RGB(255, 234, 0));
                            page.AddObject(annot);
                            results.push({ pageIndex: i, quad: quads[q] });
                          }
                        }
                      }

                      return results;
                    }, function(results) {
                      searchResults = results || [];
                      activeIndex = searchResults.length > 0 ? 0 : -1;
                      renderResults();
                      if (activeIndex >= 0) {
                        navigateToResult(0);
                      }
                    });
                  };

                  var clearHighlights = function() {
                    connector.callCommand(function() {
                      var doc = Api.GetDocument();
                      var pageCount = doc.GetPagesCount();
                      for (var i = 0; i < pageCount; i++) {
                        var page = doc.GetPage(i);
                        var annots = page.GetAllAnnots();
                        for (var j = annots.length - 1; j >= 0; j--) {
                          try {
                            if (annots[j].GetAuthorName() === "__search_demo__") {
                              annots[j].Delete();
                            }
                          } catch(e) {}
                        }
                      }
                    }, function() {
                      searchResults = [];
                      activeIndex = -1;
                      document.getElementById("resultsBadge").style.display = "none";
                      document.getElementById("resultsList").innerHTML = "";
                      document.getElementById("emptyState").style.display = "none";
                      document.getElementById("initialState").style.display = "block";
                      document.getElementById("clearBtn").classList.add("${styles.disabled}");
                      document.getElementById("prevResult").classList.add("${styles.disabled}");
                      document.getElementById("nextResult").classList.add("${styles.disabled}");
                    });
                  };

                  document.getElementById("searchBtn").addEventListener("click", performSearch);

                  document.getElementById("searchInput").addEventListener("keydown", function(e) {
                    if (e.key === "Enter") {
                      performSearch();
                    }
                  });

                  document.getElementById("prevResult").addEventListener("click", function(e) {
                    if (e.currentTarget.classList.contains("${styles.disabled}")) return;
                    if (activeIndex > 0) {
                      activeIndex--;
                      renderResults();
                      navigateToResult(activeIndex);
                    }
                  });

                  document.getElementById("nextResult").addEventListener("click", function(e) {
                    if (e.currentTarget.classList.contains("${styles.disabled}")) return;
                    if (activeIndex < searchResults.length - 1) {
                      activeIndex++;
                      renderResults();
                      navigateToResult(activeIndex);
                    }
                  });

                  document.getElementById("clearBtn").addEventListener("click", function(e) {
                    if (e.currentTarget.classList.contains("${styles.disabled}")) return;
                    clearHighlights();
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

export default SearchPdfExternalToolbar;

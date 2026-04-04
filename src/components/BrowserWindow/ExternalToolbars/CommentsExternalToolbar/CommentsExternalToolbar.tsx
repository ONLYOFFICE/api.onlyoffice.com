import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

const CommentsExternalToolbar: React.FC = () => {
  return (
    <>
      <div className={styles["demo-section"]}>
        <div className={styles["demo-label"]}>LIVE DEMO</div>
        <div className={styles["demo-layout"]}>
          <div className={styles["editor-column"]}>
            <OnlyofficeEditor
              fileType={"docx"}
              code={""}
              height="100%"
              templateUrl="https://static.onlyoffice.com/assets/docs/samples/withcomments.docx"
              config={{ editorConfig: { customization: { compactToolbar: true } } }}
              externalScript={{
                beforeDocumentReady: `
                  let comments = [];
                  let indexComment = 0;
                `,
                onDocumentReady: `
                  const getCommentIndex = (targetComment) =>
                    comments.findIndex((c) => c["Id"] === targetComment["Id"]);

                  connector.executeMethod("GetAllComments", null, (data) => {
                    comments.push(...data);
                    renderComments();
                  });

                  connector.attachEvent("onAddComment", (targetComment) => {
                    if (getCommentIndex(targetComment) === -1) {
                      comments.unshift(targetComment);
                    }
                    indexComment = 0;
                    renderComments();
                  });

                  connector.attachEvent("onRemoveComment", (targetComment) => {
                    const index = getCommentIndex(targetComment);
                    if (index !== -1) {
                      comments.splice(index, 1);
                    }
                    if (indexComment >= comments.length && indexComment !== 0) {
                      indexComment--;
                    }
                    renderComments();
                  });

                  connector.attachEvent("onChangeCommentData", (targetComment) => {
                    const index = getCommentIndex(targetComment);
                    if (index !== -1) {
                      indexComment = index;
                      comments[index]["Data"] = targetComment["Data"];
                      renderComments();
                    }
                  });
                `,
                otherFunctional: `
                  const avatarColors = ["#E8915B", "#7BB892", "#D4B44C", "#6B9BD2", "#C47DB5"];

                  const getAvatarColor = (name) => {
                    let hash = 0;
                    for (let i = 0; i < name.length; i++) {
                      hash = name.charCodeAt(i) + ((hash << 5) - hash);
                    }
                    return avatarColors[Math.abs(hash) % avatarColors.length];
                  };

                  const getInitials = (name) =>
                    name.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase();

                  const formatDate = (time) => {
                    const d = new Date(parseInt(time, 10));
                    return d.toLocaleDateString(undefined, { month: "numeric", day: "numeric", year: "numeric" });
                  };

                  const createAvatar = (name) => {
                    const el = document.createElement("div");
                    el.className = "${styles.avatar}";
                    el.style.backgroundColor = getAvatarColor(name);
                    el.textContent = getInitials(name);
                    return el;
                  };

                  const createCardHeader = (name, time) => {
                    const header = document.createElement("div");
                    header.className = "${styles["card-header"]}";
                    header.appendChild(createAvatar(name));
                    const nameEl = document.createElement("span");
                    nameEl.className = "${styles["card-name"]}";
                    nameEl.textContent = name;
                    header.appendChild(nameEl);
                    const dateEl = document.createElement("span");
                    dateEl.className = "${styles["card-date"]}";
                    dateEl.textContent = formatDate(time);
                    header.appendChild(dateEl);
                    return header;
                  };

                  const renderComments = () => {
                    const list = document.getElementById("commentsList");
                    const countEl = document.getElementById("commentCount");
                    const emptyEl = document.getElementById("emptyComments");
                    const prevBtn = document.getElementById("prevComment");
                    const nextBtn = document.getElementById("nextComment");
                    const deleteBtn = document.getElementById("deleteComment");
                    const addReplyBtn = document.getElementById("addReply");

                    list.innerHTML = "";
                    countEl.textContent = comments.length;

                    if (comments.length === 0) {
                      emptyEl.style.display = "block";
                      prevBtn.classList.add("${styles.disabled}");
                      nextBtn.classList.add("${styles.disabled}");
                      deleteBtn.classList.add("${styles.disabled}");
                      addReplyBtn.classList.add("${styles.disabled}");
                      return;
                    }

                    emptyEl.style.display = "none";
                    deleteBtn.classList.remove("${styles.disabled}");
                    addReplyBtn.classList.remove("${styles.disabled}");

                    if (indexComment <= 0) {
                      prevBtn.classList.add("${styles.disabled}");
                    } else {
                      prevBtn.classList.remove("${styles.disabled}");
                    }
                    if (indexComment >= comments.length - 1) {
                      nextBtn.classList.add("${styles.disabled}");
                    } else {
                      nextBtn.classList.remove("${styles.disabled}");
                    }

                    comments.forEach((comment, idx) => {
                      const card = document.createElement("div");
                      card.className = "${styles.card}" + (idx === indexComment ? " ${styles["card-active"]}" : "");
                      card.addEventListener("click", () => {
                        indexComment = idx;
                        renderComments();
                        connector.executeMethod("MoveToComment", [comments[idx]["Id"]]);
                      });

                      card.appendChild(createCardHeader(comment["Data"]["UserName"], comment["Data"]["Time"]));

                      const msg = document.createElement("div");
                      msg.className = "${styles["card-message"]}";
                      msg.textContent = comment["Data"]["Text"];
                      card.appendChild(msg);

                      if (comment["Data"]["Replies"]?.length > 0) {
                        comment["Data"]["Replies"].forEach((reply) => {
                          const replyCard = document.createElement("div");
                          replyCard.className = "${styles["reply-card"]}";
                          replyCard.appendChild(createCardHeader(reply["UserName"], reply["Time"]));
                          const replyMsg = document.createElement("div");
                          replyMsg.className = "${styles["card-message"]}";
                          replyMsg.textContent = reply["Text"];
                          replyCard.appendChild(replyMsg);
                          card.appendChild(replyCard);
                        });
                      }

                      list.appendChild(card);
                    });

                    connector.executeMethod("MoveToComment", [comments[indexComment]["Id"]]);
                  };

                  document.getElementById("prevComment").addEventListener("click", (e) => {
                    if (e.currentTarget.classList.contains("${styles.disabled}")) return;
                    if (indexComment > 0) indexComment--;
                    renderComments();
                  });

                  document.getElementById("nextComment").addEventListener("click", (e) => {
                    if (e.currentTarget.classList.contains("${styles.disabled}")) return;
                    if (indexComment < comments.length - 1) indexComment++;
                    renderComments();
                  });

                  document.getElementById("addReply").addEventListener("click", (e) => {
                    const btn = e.currentTarget;
                    if (btn.classList.contains("${styles.disabled}")) return;
                    const area = document.getElementById("addReplyArea");
                    if (btn.classList.contains("${styles.active}")) {
                      const reply = area.value;
                      if (reply) {
                        const datetime = \`\${Date.now()}\`;
                        comments[indexComment]["Data"]["Replies"].push({
                          Text: reply,
                          Time: datetime,
                          UserName: "John Smith"
                        });
                        connector.executeMethod("ChangeComment", [comments[indexComment]["Id"], comments[indexComment]["Data"]]);
                        area.value = "";
                      }
                      btn.classList.remove("${styles.active}");
                      area.style.display = "none";
                    } else {
                      btn.classList.add("${styles.active}");
                      area.style.display = "block";
                    }
                  });

                  document.getElementById("addComment").addEventListener("click", (e) => {
                    const btn = e.currentTarget;
                    const area = document.getElementById("addCommentArea");
                    if (btn.classList.contains("${styles.active}")) {
                      const comment = area.value;
                      if (comment) {
                        const datetime = \`\${Date.now()}\`;
                        connector.executeMethod("AddComment", [{ Text: comment, UserName: "John Smith", Time: datetime }]);
                        area.value = "";
                      }
                      btn.classList.remove("${styles.active}");
                      area.style.display = "none";
                    } else {
                      btn.classList.add("${styles.active}");
                      area.style.display = "block";
                    }
                  });

                  document.getElementById("deleteComment").addEventListener("click", (e) => {
                    if (e.currentTarget.classList.contains("${styles.disabled}")) return;
                    connector.executeMethod("RemoveComments", [[comments[indexComment]["Id"]]]);
                    renderComments();
                  });
                `,
              }}
            />
          </div>
          <div className={styles["comments-panel"]}>
            <div className={styles["panel-header"]}>
              <span className={styles["panel-title"]}>COMMENTS (<span id="commentCount">0</span>)</span>
              <div className={styles["panel-nav"]}>
                <button id="prevComment" className={`${styles["nav-btn"]} ${styles.disabled}`}>&lsaquo;</button>
                <button id="nextComment" className={`${styles["nav-btn"]} ${styles.disabled}`}>&rsaquo;</button>
              </div>
            </div>
            <div id="commentsList" className={styles["comments-list"]} />
            <div id="emptyComments" className={styles["empty-state"]} style={{ display: "none" }}>
              There are no comments in the document.
            </div>
            <textarea id="addReplyArea" className={styles.textarea} placeholder="Enter your reply here" style={{ display: "none" }} />
            <textarea id="addCommentArea" className={styles.textarea} placeholder="Enter your comment here" style={{ display: "none" }} />
            <div className={styles["panel-actions"]}>
              <button id="addReply" className={`${styles.btn} ${styles.disabled}`}>Add Reply</button>
              <button id="deleteComment" className={`${styles.btn} ${styles.disabled}`}>Delete</button>
              <button id="addComment" className={styles.btn}>Add Comment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsExternalToolbar;

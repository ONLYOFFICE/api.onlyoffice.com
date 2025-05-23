import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

const CommentsExternalToolbar: React.FC<void> = () => {
  return (
    <>
      <div id="commentsBlock" data-easy="true" className={styles.commentsExternalToolbar} spellCheck="false" style={{ display: "none" }}>
        <div id="comment" className={styles.comment}>
          <div>
            <div className={styles["comment-author"]} title="Author" />
            <div className={styles["comment-date"]} title="Date" />
          </div>
          <div className={styles["comment-message"]} title="Message" />
        </div>
        <div id="replies" className={styles.replies} />
        <textarea id="addReplyArea" name="addReplyArea" className={styles["add-reply-area"]} placeholder="Enter your reply here" hidden />
        <div id="empty-comment" hidden style={{ display: "none" }}>
          There are no comments in the document.
        </div>
      </div>
      <textarea id="addCommentArea" name="addCommentArea" className={styles["add-comment-area"]} placeholder="Enter your comment here" hidden />
      <ul className={styles["list-buttons"]}>
        <li>
          <button id="addReply" className={styles.disabled}>
            ADD REPLY
          </button>
        </li>
        <li>
          <button id="deleteComment" className={styles.disabled}>
            DELETE
          </button>
        </li>
        <li>
          <button id="addComment" className={styles.disabled}>
            ADD COMMENT
          </button>
        </li>
        <li>
          <button id="prevComment" className={styles.disabled}>
            &lt;
          </button>
        </li>
        <li>
          <button id="nextComment" className={styles.disabled}>
            &gt;
          </button>
        </li>
      </ul>
      <OnlyofficeEditor
        fileType={"docx"}
        code={""}
        height="550px"
        templateUrl="https://static.onlyoffice.com/assets/docs/samples/withcomments.docx"
        externalScript={{
          beforeDocumentReady: `
            var comments = [];
            var indexComment = 0;
          `,
          onDocumentReady: `
            const getCommentIndex = (targetComment) => {
              return comments.findIndex((comment) => comment["Id"] === targetComment["Id"]);
            };

            connector.executeMethod("GetAllComments", null, function(data) {
              comments.push(...data);
              renderComment();
            });

            connector.attachEvent("onAddComment", function(targetComment) {
              if (getCommentIndex(targetComment) === -1) {
                comments.unshift(targetComment);             
              } 
              indexComment = 0;
              renderComment();
            });

            connector.attachEvent("onRemoveComment", function(targetComment) {
              const index = getCommentIndex(targetComment);
              if (index !== -1) {
                comments.splice(index, 1);
              }              
              if (indexComment >= comments.length && indexComment !== 0) {
                indexComment--;
              }
              renderComment();
            });

            connector.attachEvent("onChangeCommentData", function(targetComment) {
              const index = getCommentIndex(targetComment);
              if (index !== -1) {
                indexComment = index;
                comments[index]["Data"] = targetComment["Data"];
                renderComment();
              }
            });
          `,
          otherFunctional: `
            var renderComment = function() {
              const comment = document.getElementById("comment");
              const replies = document.getElementById("replies");
              const emptyComment = document.getElementById("empty-comment");
              const commentsBlock = document.getElementById("commentsBlock");

              replies.innerHTML = "";

              if (comments.length === 0) {
                comment.querySelector(".${styles["comment-date"]}").innerHTML = "";
                comment.querySelector(".${styles["comment-author"]}").innerHTML = "";
                comment.querySelector(".${styles["comment-message"]}").innerHTML = "";
                document.querySelectorAll(".${styles["list-buttons"]} button").forEach(btn => {
                  btn.classList.add("${styles.disabled}");
                });
                document.getElementById("addComment").classList.remove("${styles.disabled}");
                comment.style.display = "none";
                emptyComment.style.display = "block";
              } else {
                commentsBlock.style.display = "block";
                comment.style.display = "block";
                emptyComment.style.display = "none";

                document.querySelectorAll(".${styles["list-buttons"]} button").forEach(btn => {
                    btn.classList.remove("${styles.disabled}");
                });
                
                postComment(
                  comment,
                  comments[indexComment]["Data"]["UserName"],
                  comments[indexComment]["Data"]["Time"],
                  comments[indexComment]["Data"]["Text"]
                );

                connector.executeMethod("MoveToComment", [comments[indexComment]["Id"]]);

                for (const element of comments[indexComment]["Data"]["Replies"]) {
                  const reply = comment.cloneNode(true);
                  reply.removeAttribute("id");
                  reply.classList.add("${styles.reply}");
                  postComment(
                    reply,
                    element["UserName"],
                    element["Time"],
                    element["Text"]
                  );
                  replies.appendChild(reply);
                }
              }
            };

            var postComment = function(parent, userName, time, text) {
              const date = parent.querySelector(".${styles["comment-date"]}");
              date.textContent = date.getAttribute("title") + ": " + new Date(parseInt(time, 10)).toLocaleString();

              const author = parent.querySelector(".${styles["comment-author"]}");
              author.textContent = author.getAttribute("title") + ": " + userName;

              const message = parent.querySelector(".${styles["comment-message"]}");
              message.textContent = message.getAttribute("title") + ": " + text;                  
            };

            document.getElementById("addReply").addEventListener("click", function() {
              if (this.classList.contains("${styles.disabled}")) return;
              if (this.classList.contains("${styles.active}")) {
                const reply = document.getElementById("addReplyArea").value;
                if (reply) {
                  const currentdate = Date.now();
                  const datetime = "" + currentdate;
                  comments[indexComment]["Data"]["Replies"].push({ 
                    Text: reply,
                    Time: datetime,
                    UserName: "John Smith"
                  });
                  connector.executeMethod("ChangeComment", [comments[indexComment]["Id"], comments[indexComment]["Data"]]);
                  document.getElementById("addReplyArea").value = "";
                }
                this.classList.remove("${styles.active}");
                document.getElementById("addReplyArea").style.display = "none";
              } else {
                this.classList.add("${styles.active}");
                document.getElementById("addReplyArea").style.display = "block";
              }
            });

            document.getElementById("addComment").addEventListener("click", function() {
              if (this.classList.contains("${styles.active}")) {
                const comment = document.getElementById("addCommentArea").value;
                if (comment) {
                  const currentdate = Date.now();
                  const datetime = "" + currentdate;
                  connector.executeMethod("AddComment", [{ Text: comment, UserName: "John Smith", Time: datetime }]);
                  document.getElementById("addCommentArea").value = "";
                }
                this.classList.remove("${styles.active}");
                document.getElementById("commentsBlock").style.display = "block";
                document.getElementById("addCommentArea").style.display = "none";
                document.querySelectorAll(".${styles["list-buttons"]} button").forEach(btn => {
                  btn.classList.remove("${styles.disabled}");
                });
              } else {
                this.classList.add("${styles.active}");
                document.getElementById("commentsBlock").style.display = "none";
                document.getElementById("addReplyArea").style.display = "none";
                document.getElementById("addCommentArea").style.display = "block";
                document.querySelectorAll(".${styles["list-buttons"]} button").forEach(btn => {
                  btn.classList.add("${styles.disabled}");
                });
                document.getElementById("addReply").classList.remove("${styles.active}");
                this.classList.remove("${styles.disabled}");
              }
            })

            document.getElementById("deleteComment").addEventListener("click", function() {
              if (this.classList.contains("${styles.disabled}")) {
                return;
              }
              connector.executeMethod("RemoveComments", [[comments[indexComment]["Id"]]]);
              renderComment();
            });

            document.getElementById("nextComment").addEventListener("click", function() {
              if (this.classList.contains("${styles.disabled}")) {
                return;
              }
              if (indexComment < comments.length - 1) {
                indexComment++;
              }
              renderComment();
            });

            document.getElementById("prevComment").addEventListener("click", function() {
              if (this.classList.contains("${styles.disabled}")) {
                return;
              }
              if (indexComment > 0) {
                indexComment--;
              }
              renderComment();
            });
          `,
        }}
      />
    </>
  );
};

export default CommentsExternalToolbar;

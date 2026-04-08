---
sidebar_position: -3
hide_table_of_contents: true
description: Manage document comments from an external UI via the Automation API.
---

import { CommentsExternalToolbar } from '@site/src/components/BrowserWindow';

# Working with comments

Use the Automation API to manage document comments from an external UI — add, remove, reply, and navigate without touching the editor directly.

:::info
The document opens with existing comments. Your code calls `connector.executeMethod()` and `connector.attachEvent()` to interact with comments. The editor updates in real time.
:::

<CommentsExternalToolbar/>

## How it works

1. When the user opens a document, the [GetAllComments](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetAllComments.md) method is executed to collect all the comments from the document and display them in the custom interface. The following comment data is displayed: the comment author, the time when the comment was posted, the comment text, and the comment replies:

    ``` ts
    let comments = [];
    const onDocumentReady = () => {
      window.connector = docEditor.createConnector();

      connector.executeMethod("GetAllComments", null, (data) => {
        comments = data;
      });
    };
    ```

2. When the user clicks the **Add comment** button in the custom interface, the [AddComment](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddComment.md) method is executed to add a new comment to the document. After this method is called, the [onAddComment](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onAddComment.md) event is fired to add a new comment to an array with all the document comments:

    ``` ts
    const onDocumentReady = () => {
      connector.attachEvent("onAddComment", (val) => {
        const index = comments.findIndex((comment) => comment["Id"] === val["Id"]);
        if (index === -1) {
          comments.unshift(val);
        }
      });
    };

    document.getElementById("addComment").addEventListener("click", () => {
      const comment = document.getElementById("addCommentArea").value;
      if (comment) {
        const datetime = `${Date.now()}`;
        connector.executeMethod("AddComment", [{
          Text: comment,
          UserName: "John Smith",
          Time: datetime,
        }]);
      }
    });
    ```

3. When the user clicks the **Delete** button in the custom interface, the [RemoveComments](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/RemoveComments.md) method is executed to remove a comment from the document. After this method is called, the [onRemoveComment](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onRemoveComment.md) event is fired to remove a comment from an array with all the document comments:

    ``` ts
    const onDocumentReady = () => {
      connector.attachEvent("onRemoveComment", (val) => {
        const index = comments.findIndex((comment) => comment["Id"] === val["Id"]);
        if (index !== -1) {
          comments.splice(index, 1);
        }
      });
    };

    document.getElementById("deleteComment").addEventListener("click", () => {
      connector.executeMethod("RemoveComments", [[comments[indexComment]["Id"]]]);
    });
    ```

4. When the user clicks the **Prev / Next** buttons in the custom interface, the [MoveToComment](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/MoveToComment.md) method is executed to navigate between the comments in the document:

    ``` ts
    connector.executeMethod("MoveToComment", [comments[indexComment]["Id"]]);
    ```

5. When the user clicks the **Add reply** button in the custom interface, the [ChangeComment](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/ChangeComment.md) method is executed to add a reply to the existing comment by changing the *CommentData* object. After this method is called, the [onChangeCommentData](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onChangeCommentData.md) event is fired to add a new comment reply to an array with all the document comments:

    ``` ts
    const onDocumentReady = () => {
      connector.attachEvent("onChangeCommentData", (val) => {
        const index = comments.findIndex((comment) => comment["Id"] === val["Id"]);
        if (index !== -1) {
          comments[index]["Data"] = val["Data"];
        }
      });
    };

    document.getElementById("addReply").addEventListener("click", () => {
      const reply = document.getElementById("addReplyArea").value;
      if (reply) {
        const datetime = `${Date.now()}`;
        comments[indexComment]["Data"]["Replies"].push({
          Text: reply,
          Time: datetime,
          UserName: "John Smith",
        });

        connector.executeMethod(
          "ChangeComment",
          [comments[indexComment]["Id"],
            comments[indexComment]["Data"]],
        );
      }
    });
    ```

:::note
Please note that the connector is available only for **ONLYOFFICE Docs Developer**.

The connector is an additional feature not included by default in the ONLYOFFICE Docs Developer and is available at an extra cost. Please contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
:::

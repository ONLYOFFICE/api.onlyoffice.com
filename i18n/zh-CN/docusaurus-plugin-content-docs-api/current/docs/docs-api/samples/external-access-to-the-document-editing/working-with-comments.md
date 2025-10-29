---
sidebar_position: -3
hide_table_of_contents: true
---

import { CommentsExternalToolbar } from '@site/src/components/BrowserWindow';

# 处理评论

从文档中收集所有评论，并将其显示在自定义界面中。

<CommentsExternalToolbar/>

## 它是如何运作的

1. 当用户打开文档时，会执行 GetAllComments 方法来收集文档中的所有评论，并将其显示在自定义界面中。将显示以下评论数据：评论作者、发布评论的时间、评论文本和评论回复：

    ``` ts
    let comments = [];
    function onDocumentReady() {
      window.connector = docEditor.createConnector();
    
      connector.executeMethod("GetAllComments", null, (data) => {
        comments = data;
      });
    }
    ```

2. 当用户单击自定义界面中的 **添加评论** 按钮时，将执行 AddComment 方法向文档添加新评论。调用此方法后，会触发 onAddComment 事件，将新评论添加到包含所有文档评论的数组中：

    ``` ts
    function onDocumentReady() {
      connector.attachEvent("onAddComment", (val) => {
        const index = comments.findIndex((comment) => {
          return comment["Id"] === val["Id"];
        });
        if (index === -1) {
          comments = [val, ...comments];
        }
      });
    }

    $("#addComment").on("click", () => {
      const comment = $("#addCommentArea").val();
      if (comment) {
        const currentdate = Date.now();
        const datetime = `${currentdate}`;
        connector.executeMethod("AddComment", [{
          Text: comment,
          UserName: "John Smith",
          Time: datetime,
        }]);
      }
    });
    ```

3. 当用户单击自定义界面中的 **删除评论** 按钮时，将执行 RemoveComments 方法从文档中删除评论。调用此方法后，将触发 onRemoveComment 事件，以从包含所有文档评论的数组中删除评论：

    ``` ts
    function onDocumentReady() {
      connector.attachEvent("onRemoveComment", (val) => {
        const index = comments.findIndex((comment) => {
          return comment["Id"] === val["Id"];
        });
        if (index !== -1) {
          comments.splice(index, 1);
        }
      });
    }
    $("#deleteComment").on("click", () => {
      connector.executeMethod("RemoveComments", [[comments[indexComment]["Id"]]]);
    });
    ```

4. 当用户单击自定义界面中的箭头按钮时，将执行 MoveToComment 方法在文档中的评论之间移动：

   ``` ts
   connector.executeMethod("MoveToComment", [comments[indexComment]["Id"]]);
   ```

5. 当用户单击自定义界面中的 **添加回复** 按钮时，将执行 ChangeComment 方法，通过更改 *CommentData* 对象向现有评论添加回复。调用此方法后，会触发 onChangeCommentData 事件，将新的评论回复添加到包含所有文档评论的数组中：

    ``` ts
    function onDocumentReady() {
      connector.attachEvent("onChangeCommentData", (val) => {
        const index = comments.findIndex((comment) => {
          return comment["Id"] === val["Id"];
        });
        if (index !== -1) {
          comments[index]["Data"] = val["Data"];
        }
      });
    }
    $("#addReply").on("click", () => {
      const reply = $("#addReplyArea").val();
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
请注意，该连接器仅适用于 **ONLYOFFICE 文档开发者版本**.

此类是一项附加功能，默认情况下不包含在ONLYOFFICE文档开发者版中，需要额外付费。 如果您有任何疑问，请通过 [sales@onlyoffice.com](mailto:sales@onlyoffice.com)联系我们的销售团队。
:::

Collects all the comments from the document and displays them in the custom interface.

There are no comments in the document.

* [ADD REPLY]()
* [DELETE]()
* [ADD COMMENT]()
* [<]()
* [>]()

\


1. When the user opens a document, the [GetAllComments](/plugin/executemethod/text/getallcomments) method is executed to collect all the comments from the document and display them in the custom interface. The following comment data is displayed: the comment author, the time when the comment was posted, the comment text, and the comment replies:

   ```
   var comments = [];

   var onDocumentReady = function () {
       window.connector = docEditor.createConnector();

       ...

       connector.executeMethod("GetAllComments", null, function (data) {
           comments = data;
       });

       ...

   }
   ```

2. When the user clicks the **Add comment** button in the custom interface, the [AddComment](/plugin/executemethod/text/addcomment) method is executed to add a new comment to the document. After this method is called, the [onAddComment](/plugin/events/onaddcomment) event is fired to add a new comment to an array with all the document comments:

   ```
   var onDocumentReady = function () {

       ...

       connector.attachEvent("onAddComment", function (val) {
           var index = comments.findIndex((comment) => comment["Id"] === val["Id"]);

           if (index == -1) {
               comments = [val, ...comments];
           }
       });

       ...
   }

   ...

   $("#addComment").on("click", function () {

       ...

       var comment = $("#addCommentArea").val();

       if (Boolean(comment)) {
           var currentdate = Date.now();
           var datetime = "" + currentdate;

           connector.executeMethod("AddComment", [{ 
                   Text: comment, 
                   UserName: "John Smith", 
                   Time: datetime 
               }]
           );
       }

       ...

   });
   ```

3. When the user clicks the **Remove comment** button in the custom interface, the [RemoveComments](/plugin/executemethod/text/removecomments) method is executed to remove a comment from the document. After this method is called, the [onRemoveComment](/plugin/events/onremovecomment) event is fired to remove a comment from an array with all the document comments:

   ```
   var onDocumentReady = function () {

       ...

       connector.attachEvent("onRemoveComment", function (val) {
           const index = comments.findIndex((comment) => comment["Id"] === val["Id"]);

           if (index !== -1) {
               comments.splice(index, 1);
           }

           ...

       });

       ...
   }

   $("#deleteComment").on("click", function () {

       ...

       connector.executeMethod("RemoveComments", [[comments[indexComment]["Id"]]]);

       ...

   });
   ```

4. When the user clicks the arrow buttons in the custom interface, the [MoveToComment](/plugin/executemethod/text/movetocomment) method is executed to move between the comments in the document:

   ```

   ...

   connector.executeMethod("MoveToComment", [comments[indexComment]["Id"]]);

   ...
   ```

5. When the user clicks the **Add reply** button in the custom interface, the [ChangeComment](/plugin/executemethod/text/changecomment) method is executed to add a reply to the existing comment by changing the *CommentData* object. After this method is called, the [onChangeCommentData](/plugin/events/onchangecommentdata) event is fired to add a new comment reply to an array with all the document comments:

   ```
   var onDocumentReady = function () {

       ...

       connector.attachEvent("onChangeCommentData", function (val) {
           const index = comments.findIndex((comment) => comment["Id"] === val["Id"]);

           if (index !== -1) {
               comments[index]["Data"] = val["Data"];
           }
       });

       ...

   }

   $("#addReply").on("click", function () {

       ...

       var reply = $("#addReplyArea").val();

       if (Boolean(reply)) {
           var currentdate = Date.now();
           var datetime = "" + currentdate;

           comments[indexComment]["Data"]["Replies"].push({
               Text: reply
               Time: datetime,
               UserName: "John Smith"
           });

           connector.executeMethod(
               "ChangeComment", 
               [comments[indexComment]["Id"],
               comments[indexComment]["Data"]]
           );
       }

       ...

   });
   ```

Please note that the connector is available only for **ONLYOFFICE Developer Edition**.

This class is an additional feature which is available at extra cost. If you have any questions, please contact our sales team at <sales@onlyoffice.com>.

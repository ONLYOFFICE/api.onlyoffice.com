Manages review process from an external source.

* [ACCEPT]()
* [REJECT]()
* [<]()
* [>]()

\


1. When the user clicks the **Accept / Reject** buttons in the custom interface, the [AcceptReviewChanges](/plugin/executemethod/text/acceptreviewchanges) / [RejectReviewChanges](/plugin/executemethod/text/rejectreviewchanges) methods are executed to accept / reject the selected change in the editor:

   ```
   $("#accept").on("click", function () {
       connector.executeMethod("AcceptReviewChanges");
   });

   $("#reject").on("click", function () {
       connector.executeMethod("RejectReviewChanges");
   });
   ```

2. When the user clicks the arrow buttons in the custom interface, the [MoveToNextReviewChange](/plugin/executemethod/text/movetonextreviewchange) method is executed to move between the next and previous review changes:

   ```
   $("#prev").on("click", function () {
       connector.executeMethod("MoveToNextReviewChange", [false]);
   });

   $("#next").on("click", function () {
       connector.executeMethod("MoveToNextReviewChange");
   });
   ```

Please note that the connector is available only for **ONLYOFFICE Developer Edition**.

This class is an additional feature which is available at extra cost. If you have any questions, please contact our sales team at <sales@onlyoffice.com>.

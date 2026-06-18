# onChangeCommentData

The function called when the specified comment is changed with the [ChangeComment](../../../../../docs/plugins/interacting-with-editors/document-api/Methods/ChangeComment.md) method.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| comment | [Event_comment](../Enumeration/Event_comment.md) | Defines the comment object containing the comment data. |

## Example

```javascript
window.Asc.plugin.attachEditorEvent("onChangeCommentData", (comment) => {
    console.log("event: onChangeCommentData");
    console.log("Id: " + comment.Id);
    console.log("UserName: " + comment.Data.UserName);
    console.log("Text: " + comment.Data.Text);
    console.log("Time: " + comment.Data.Time);
    console.log("Solved: " + comment.Data.Solved);
    console.log("QuoteText: " + comment.Data.QuoteText);
});
```

# onAddComment

The function called when a comment is added to the document with the [AddComment](../../methods/text-document-api/Api/Methods/AddComment) method.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| comment | [comment](Enumeration/comment.md) | Defines the comment object containing the comment data. |

```javascript
window.Asc.plugin.attachEditorEvent("onAddComment", (comment) => {
    Comments.push(comment);
    $('#scrollable-container-id').append(makeComment(comment.Id, comment));
});
```


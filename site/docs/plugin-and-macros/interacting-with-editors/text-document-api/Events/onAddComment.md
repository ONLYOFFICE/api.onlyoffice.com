# onAddComment

The function called when a comment is added to the document with the [AddComment](../../text-document-api/Methods/AddComment.md) method.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| comment | [Event_comment](../Enumeration/Event_comment.md) | Defines the comment object containing the comment data. |

```javascript
window.Asc.plugin.attachEditorEvent("onAddComment", (comment) => {
    Comments.push(comment);
    $('#scrollable-container-id').append(makeComment(comment.Id, comment));
});
```


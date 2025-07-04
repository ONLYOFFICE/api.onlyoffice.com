# onChangeCommentData

The function called when the specified comment is changed with the [ChangeComment](../../text-document-api/Methods/ChangeComment.md) method.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| comment | [Event_comment](../Enumeration/Event_comment.md) | Defines the comment object containing the comment data. |

```javascript
window.Asc.plugin.attachEditorEvent("onChangeCommentData", (comment) => {
    changeComment(comment);
});
```


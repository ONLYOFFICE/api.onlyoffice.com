# onChangeCommentData

The function called when the specified comment is changed with the [ChangeComment](../../methods/text-document-api/Api/Methods/ChangeComment) method.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| comment | [comment](Enumeration/comment.md) | Defines the comment object containing the comment data. |

```javascript
window.Asc.plugin.attachEditorEvent("onChangeCommentData", (comment) => {
    changeComment(comment);
});
```


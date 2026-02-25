# GetContent

Returns an array of rich paragraphs from the current rich content object.

## Syntax

```javascript
expression.GetContent(getCopies);
```

`expression` - A variable that represents a [ApiRichContent](../ApiRichContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| getCopies | Required | boolean |  | Specifies if the copies of the document elements will be returned or not. |

## Returns

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)[]
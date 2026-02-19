# InsertParagraph

Inserts a paragraph at the specified position.

## Syntax

```javascript
expression.InsertParagraph(paragraph, sPosition, beRNewPara);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paragraph | Required | string \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | Text or paragraph. |
| sPosition | Required | string |  | The position where the text or paragraph will be inserted ("before" or "after" the paragraph specified). |
| beRNewPara | Required | boolean |  | Defines if this method returns a new paragraph (true) or the current paragraph (false). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null
# SetParaId

Sets the paragraph ID.

## Syntax

```javascript
expression.SetParaId(sIdentifier);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sIdentifier | Required | string |  | The paragraph ID. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set the paragraph ID.

```javascript editor-docx
// Method for changing the numerical identifier of a paragraph.

// Create a paragraph and display its updated ID.

let document = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Update inserted paragraph ID: ");
let id = "123456";
paragraph.SetParaId(id);
let id = paragraph.GetParaId();
paragraph.AddText(id);
document.InsertContent([paragraph]);
```

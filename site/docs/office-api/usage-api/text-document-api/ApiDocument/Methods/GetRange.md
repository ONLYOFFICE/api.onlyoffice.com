# GetRange

Returns a Range object that represents the part of the document contained in the specified document.

## Syntax

```javascript
expression.GetRange(Start, End);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | Required | Number |  | Start position index in the current element. |
| End | Required | Number |  | End position index in the current element. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Get a Range object that represents the part of the document contained in the specified document in a document.

```javascript editor-docx
// How to get the range using row and column indexes in a document.

// Make a range text bold using the document API in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text.");
let range = doc.GetRange(8, 11);
range.SetBold(true);
```

# GetRange

Returns a Range object that represents the part of the document contained in the specified paragraph.
The paragraph must be attached to the document before calling this method.

## Syntax

```javascript
expression.GetRange(Start, End);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | Required | Number |  | Start position index in the current element. |
| End | Required | Number |  | End position index in the current element. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Get a Range object that represents the part of the doc contained in the specified paragraph in a document.

```javascript editor-docx
// How to get the range where the paragraph is located in a document.

// Get the paragraph range and make it bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let range = paragraph.GetRange(8, 11);
range.SetBold(true);
```

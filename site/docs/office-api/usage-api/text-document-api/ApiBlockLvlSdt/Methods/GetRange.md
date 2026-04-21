# GetRange

Returns a Range object that represents the part of the document contained in the specified content control.

## Syntax

```javascript
expression.GetRange(start, end);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | Required | Number |  | Start position index in the current element. |
| end | Required | Number |  | End position index in the current element. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Get a Range object that represents the part of the document contained in the specified content control in a document.

```javascript editor-docx
// Create a block content control, add a text to it, and return a range between positions 10 and 16 of the element in a document.

// Return the range object from the container and set a bold property to it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
let range = blockLvlSdt.GetRange(10, 16);
range.SetBold(true);
```

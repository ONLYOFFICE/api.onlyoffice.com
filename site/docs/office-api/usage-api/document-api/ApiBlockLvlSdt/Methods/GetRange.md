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

Select a portion of text inside a content control and apply formatting to it in a document.

```javascript editor-docx
// How do I select a specific range of text within a content control in a document?

// Bold a section of text inside a content control by specifying start and end positions in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
let range = blockLvlSdt.GetRange(10, 16);
range.SetBold(true);
```

# GetRange

Returns a Range object that represents the document part contained in the specified range.

## Syntax

```javascript
expression.GetRange(Start, End);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | Optional | Number | 0 | Start position index in the current range. |
| End | Optional | Number | -1 | End position index in the current range (if \<= 0, then the range is taken to the end). |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Extract a narrower text selection from within an existing highlighted region in a document.

```javascript editor-docx
// How do I cut out a smaller portion of text from an already selected region in a document?

// Trim a wider selection down to a tighter span for targeted editing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 24);
range1.SetBold(true);
let range2 = range1.GetRange(0, 9);
range2.SetItalic(true);
```

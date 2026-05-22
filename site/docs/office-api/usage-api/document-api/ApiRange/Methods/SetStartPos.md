# SetStartPos

Sets the start position of the current range object.

## Syntax

```javascript
expression.SetStartPos(nPos);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number |  | Start position. |

## Returns

boolean

## Example

Move the beginning of a text selection to a different position in a document.

```javascript editor-docx
// How do I change where a text range starts without altering where it ends in a document?

// Trim or expand the leading edge of a selected region to cover a different set of words in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetStartPos(12);
range.SetBold(true);
```

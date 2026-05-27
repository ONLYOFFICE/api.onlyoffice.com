# CreateRange

Creates an element range.
If you do not specify the start and end positions, the range will be taken from the entire element.

## Syntax

```javascript
expression.CreateRange(element, start, end);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | Required |  |  | The element from which the range will be taken. |
| start | Required |  |  | Start range position. |
| end | Required |  |  | End range position. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Bold the first several characters of a paragraph by selecting a text range in a document.

```javascript editor-docx
// How do I select a specific portion of a paragraph and make it bold in a document?

// Apply bold formatting to the opening words of a paragraph without affecting the rest of the text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.CreateRange(paragraph, 0, 11).SetBold(true);
```

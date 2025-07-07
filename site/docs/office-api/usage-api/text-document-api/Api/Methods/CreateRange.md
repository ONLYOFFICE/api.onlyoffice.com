# CreateRange

Creates an element range.\
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

This example creates a range and sets bold for the first 10 characters.

```javascript editor-docx
// Creates the ApiRange object from the ApiParagraph class and sets the range to bold.

// How to create a range from the paragraph and set a bold property to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.CreateRange(paragraph, 0, 11).SetBold(true);
```

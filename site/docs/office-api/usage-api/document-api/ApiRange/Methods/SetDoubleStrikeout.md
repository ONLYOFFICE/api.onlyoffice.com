# SetDoubleStrikeout

Specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line.

## Syntax

```javascript
expression.SetDoubleStrikeout(isDoubleStrikeout);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | Required | boolean |  | Specifies if the contents of the current Range are displayed double struck through or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Draw two horizontal lines through a range of text to mark it as crossed out in a document.

```javascript editor-docx
// How do I put a double strikethrough on a section of text in a document?

// Visually cancel out words by overlaying them with two crossing lines in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetDoubleStrikeout(true);
```

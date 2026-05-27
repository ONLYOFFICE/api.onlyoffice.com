# SetStrikeout

Specifies that the contents of the current Range are displayed with a single horizontal line through the range center.

## Syntax

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean |  | Specifies if the contents of the current Range are displayed struck through or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Draw a horizontal line through the middle of selected text in a document.

```javascript editor-docx
// How do I mark a portion of text as crossed out with a single line in a document?

// Visually cancel or remove words by placing a strikethrough across them in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetStrikeout(true);
```

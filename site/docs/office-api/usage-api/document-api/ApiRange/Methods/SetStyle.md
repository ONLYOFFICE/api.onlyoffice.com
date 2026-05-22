# SetStyle

Sets the style to the current Range.

## Syntax

```javascript
expression.SetStyle(oStyle);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | The style which must be applied to the text character. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Apply a named style to a selected portion of text in a document.

```javascript editor-docx
// How do I give a range of words a predefined look such as a heading style in a document?

// Reformat highlighted text by assigning it one of the built-in styles available in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
let style = doc.GetStyle("Heading 2");
range.SetStyle(style);
```

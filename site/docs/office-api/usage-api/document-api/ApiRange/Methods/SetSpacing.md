# SetSpacing

Sets the text spacing measured in twentieths of a point.

## Syntax

```javascript
expression.SetSpacing(spacing);
```

`expression` - A variable that represents an [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| spacing | Required | [twips](../../Enumeration/twips.md) \| null |  | The value of the text spacing measured in twentieths of a point (1/1440 of an inch). Pass *null* to remove the text spacing. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Adjust the spacing between characters in a selected text range in a document.

```javascript editor-docx
// How do I spread out or tighten the letters within a highlighted portion of text in a document?

// Control the gap between individual characters to improve readability or achieve a design effect in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetSpacing(2);
```

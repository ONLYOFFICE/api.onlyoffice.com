# AddHyperlink

Adds a hyperlink to the specified range.

## Syntax

```javascript
expression.AddHyperlink(sLink, sScreenTipText);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | Required | string |  | The link address. |
| sScreenTipText | Required | string |  | The screen tip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) \| null

## Example

This example adds a hyperlink to the specified range.

```javascript editor-docx playground
// Insert a link to the range.

// Get range and add a hyperlink to it. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddHyperlink("https://www.onlyoffice.com/", "Main portal");
```

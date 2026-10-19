# SetUseHyperlinks

Specifies whether entries are formatted as hyperlinks.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetUseHyperlinks(isUseHyperlinks);
```

`expression` - A variable that represents an [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUseHyperlinks | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

Format the table of figures entries as hyperlinks.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Enable hyperlinks so each entry links to its caption.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetUseHyperlinks(true);
```

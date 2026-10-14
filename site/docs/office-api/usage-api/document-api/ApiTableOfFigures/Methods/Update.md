# Update

Updates the table of figures.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Update(bOnlyPageNumbers);
```

`expression` - A variable that represents an [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bOnlyPageNumbers | Optional | boolean | false | No description provided. |

## Returns

boolean

## Example

Refresh a table of figures after the document content changes.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Rebuild the table of figures so it reflects the current captions and page numbers.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.Update();
```

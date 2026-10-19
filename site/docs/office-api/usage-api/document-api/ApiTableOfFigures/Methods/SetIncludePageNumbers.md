# SetIncludePageNumbers

Specifies whether page numbers are shown in the table of figures.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetIncludePageNumbers(isInclude);
```

`expression` - A variable that represents an [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isInclude | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

Hide the page numbers in a table of figures.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Turn page numbers off for the table of figures entries.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetIncludePageNumbers(false);
```

# SetIncludeLabel

Specifies whether the caption label and number are included in the table of figures entries.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetIncludeLabel(isInclude);
```

`expression` - A variable that represents a [ApiTableOfFigures](../ApiTableOfFigures.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isInclude | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

Exclude the caption label and number from a table of figures entries.

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Rebuild the table of figures so the entries show only the caption text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tof = doc.AddTableOfFigures({"BuildFrom": "Figure", "LabelNumber": true});
tof.SetIncludeLabel(false);
```

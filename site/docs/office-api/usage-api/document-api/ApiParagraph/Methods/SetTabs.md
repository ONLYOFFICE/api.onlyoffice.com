# SetTabs

Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.

:::warning
The lengths of the aPos and aVal arrays must be equal to each other.
:::

Inherited from [ApiParaPr.SetTabs](../../ApiParaPr/Methods/SetTabs.md).

## Syntax

```javascript
expression.SetTabs(aPos, aVal);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aPos | Required | [twips](../../Enumeration/twips.md)[] |  | An array of the positions of custom tab stops with respect to the current page margins measured in twentieths of a point (1/1440 of an inch). |
| aVal | Required | [TabJc](../../Enumeration/TabJc.md)[] |  | An array of the styles of custom tab stops, which determines the behavior of the tab stop and the alignment which will be applied to text entered at the current custom tab stop. |

## Returns

boolean

## Example

Define custom tab stop positions for a paragraph in a document.

```javascript editor-docx
// How do I set specific horizontal positions where tab characters jump to in a paragraph in a document?

// Align text at precise column positions by placing tab stops in a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 5 inches right");
```

# GetLowerHeadingLevel

Returns the lowest (innermost) heading level included in the table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetLowerHeadingLevel();
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the lowest heading level included in a table of contents.

```javascript editor-docx
// Insert a table of contents that spans the heading levels 1 through 3.

// Read the lower (innermost) heading level of the table of contents.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvlStart": 1, "OutlineLvls": 3}});
let lowerLevel = toc.GetLowerHeadingLevel();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Lower heading level: " + lowerLevel);
doc.Push(resultParagraph);
```

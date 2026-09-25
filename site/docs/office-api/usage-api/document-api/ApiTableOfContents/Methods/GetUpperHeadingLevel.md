# GetUpperHeadingLevel

Returns the highest (outermost) heading level included in the table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetUpperHeadingLevel();
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the highest heading level included in a table of contents.

```javascript editor-docx
// Insert a table of contents that spans the heading levels 2 through 4.

// Read the upper (outermost) heading level of the table of contents.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvlStart": 2, "OutlineLvls": 4}});
let upperLevel = toc.GetUpperHeadingLevel();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Upper heading level: " + upperLevel);
doc.Push(resultParagraph);
```

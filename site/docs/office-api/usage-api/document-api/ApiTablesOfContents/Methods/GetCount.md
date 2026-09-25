# GetCount

Returns the number of tables of contents in the document.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetCount();
```

`expression` - A variable that represents a [ApiTablesOfContents](../ApiTablesOfContents.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count how many tables of contents the document contains.

```javascript editor-docx
// Add a table of contents built from the document headings to the collection.

// Read the number of tables of contents currently present in the document.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let tablesOfContents = doc.GetTablesOfContents();
tablesOfContents.Add({"BuildFrom": {"OutlineLvls": 9}});
let count = tablesOfContents.GetCount();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Tables of contents count: " + count);
doc.Push(resultParagraph);
```

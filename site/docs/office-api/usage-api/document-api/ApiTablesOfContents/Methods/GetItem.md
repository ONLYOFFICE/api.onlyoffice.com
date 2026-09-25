# GetItem

Returns the table of contents at the specified position in the collection.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetItem(nIndex);
```

`expression` - A variable that represents a [ApiTablesOfContents](../ApiTablesOfContents.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | number |  | The position (zero-based) of the table of contents. |

## Returns

[ApiTableOfContents](../../ApiTableOfContents/ApiTableOfContents.md) \| null

## Example

Get a table of contents by its index from the document collection.

```javascript editor-docx
// Add a table of contents built from the document headings to the collection.

// Retrieve the first table of contents from the collection by its zero-based index.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let tablesOfContents = doc.GetTablesOfContents();
tablesOfContents.Add({"BuildFrom": {"OutlineLvls": 9}});
let toc = tablesOfContents.GetItem(0);
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Item class type: " + toc.GetClassType());
doc.Push(resultParagraph);
```

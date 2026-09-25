# Update

Updates the table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Update(bOnlyPageNumbers);
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bOnlyPageNumbers | Optional | boolean | false | No description provided. |

## Returns

boolean

## Example

Refresh a table of contents after the document content changes.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Rebuild the table of contents so it reflects the current headings and page numbers.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.Update();
```

# GetParent

Returns the document that contains the table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocument](../../ApiDocument/ApiDocument.md) \| null

## Example

Get the document that contains a table of contents.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Return the parent document of the table of contents.

	let doc = Api.GetDocument();
	let style = doc.GetStyle("Heading 1");
	let paragraph = doc.GetElement(0);
	paragraph.SetStyle(style);
	paragraph.AddText("Chapter 1");
	let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
	let parent = toc.GetParent();
	let resultParagraph = Api.CreateParagraph();
	resultParagraph.AddText("Parent class type: " + parent.GetClassType());
	doc.Push(resultParagraph);
```

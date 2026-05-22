# UpdateAllTOC

Updates all tables of contents in the current document.

## Syntax

```javascript
expression.UpdateAllTOC(bOnlyPageNumbers);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bOnlyPageNumbers | Optional | boolean | false | Specifies that only page numbers will be updated. |

## Returns

boolean

## Example

Refresh all tables of contents after adding new headings in a document.

```javascript editor-docx
// How do I keep tables of contents up to date in a document?

// Reflect the latest heading structure in every table of contents without rebuilding it manually in a document.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
newDocumentStyle = doc.GetStyle("Heading 2");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 2");
doc.Push(paragraph);
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
doc.AddTableOfContents(tocPr);
newDocumentStyle = doc.GetStyle("Heading 2");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 2");
doc.AddElement(3, paragraph);
doc.UpdateAllTOC(false);
```

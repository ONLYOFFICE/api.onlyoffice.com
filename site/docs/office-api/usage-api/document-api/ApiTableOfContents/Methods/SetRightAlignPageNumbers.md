# SetRightAlignPageNumbers

Specifies whether page numbers are right-aligned in the table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetRightAlignPageNumbers(isRightAlign);
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isRightAlign | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

Place the page numbers right after the entry text in a table of contents.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Disable right alignment so page numbers follow the entry text directly.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetRightAlignPageNumbers(false);
```
